import { Request } from 'express';

// This is to make TypeScript recognize the custom types we define on the request object

declare global {
  namespace Express {
    interface Request {
      decodedToken?: string | jwt.JwtPayload | undefined;
      mqttPublish(topic: string, message: string | Buffer): void;
      mqttSubscribe(topic: string, callback: (message: string | Buffer) => void): void;
    }
  }
}
