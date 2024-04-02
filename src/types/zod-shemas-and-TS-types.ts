import { z } from 'zod';

export const sequelizeConfSchema = z.object({
  DB_PORT    : z.string().transform(Number),
  DB_DATABASE: z.string(),
  DB_DIALECT : z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
});

export const mqttClientConfigSchema = z
  .object({
    MQTT_CONNECT_URL     : z.string(),
    MQTT_CLIENT_ID       : z.string(),
    MQTT_CLEAN           : z.string(),
    MQTT_CONNECT_TIMEOUT : z.string(),
    MQTT_USERNAME        : z.string(),
    MQTT_PASSWORD        : z.string(),
    MQTT_RECONNECT_PERIOD: z.string(),
  })
  .transform((obj) => ({
    ...obj,
    MQTT_CONNECT_TIMEOUT : Number(obj.MQTT_CONNECT_TIMEOUT),
    MQTT_RECONNECT_PERIOD: Number(obj.MQTT_RECONNECT_PERIOD),
    MQTT_CLEAN           : Boolean(obj.MQTT_CLEAN),
  }));

export const jwtSecretSchema = z.object({
  JWT_KEY: z.string(),
});

export const loginCredentialsSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const serverCredentialsSchema = z.object({
  nuxt : loginCredentialsSchema,
  admin: loginCredentialsSchema,
});
