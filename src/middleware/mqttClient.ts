import { Request, Response, NextFunction } from 'express';
import mqtt from 'mqtt';
import { mqttClientConfigSchema } from '../types/zod-shemas-and-TS-types.ts';

const {
  MQTT_CONNECT_URL,
  MQTT_CLIENT_ID,
  MQTT_CLEAN,
  MQTT_CONNECT_TIMEOUT,
  MQTT_USERNAME,
  MQTT_PASSWORD,
  MQTT_RECONNECT_PERIOD,
} = mqttClientConfigSchema.parse(process.env);

const mqttClient = mqtt.connect(MQTT_CONNECT_URL, {
  clientId       : MQTT_CLIENT_ID,
  clean          : MQTT_CLEAN,
  connectTimeout : MQTT_CONNECT_TIMEOUT,
  username       : MQTT_USERNAME,
  password       : MQTT_PASSWORD,
  reconnectPeriod: MQTT_RECONNECT_PERIOD,
});

mqttClient.on('connect', () => {
  console.log('\x1b[32mConnected\x1b[0m to MQTT server');
});

mqttClient.on('reconnect', (error?: Error) => {
  console.error('Reconnect failed, trying again... ', error || '');
});

/**
 * ### Middleware function to provide mqtt functionality to endpoints
 *
 * Adds mqtt publish/subscribe functions to request object
 * to make it available in endpoints where the middleware is used
 */

function mqttClientProvider(req: Request, res: Response, next: NextFunction) {
  req.mqttPublish = function (topic: string, message: string | Buffer) {
    mqttClient.publish(topic, message);
  };

  req.mqttSubscribe = function (topic: string, callback) {
    mqttClient.subscribe(topic);

    mqttClient.on('message', function (t: string, m: Buffer) {
      if (t === topic) {
        callback(m.toString());
      }
    });
  };
  next();
}

export default mqttClientProvider;
