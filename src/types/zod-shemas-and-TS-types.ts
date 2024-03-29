import { z } from 'zod';

export const sequelizeConfSchema = z.object({
  DB_PORT: z.string().transform(Number),
  DB_NAME: z.string(),
  DB_DIALECT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
});

export const jwtSecretSchema = z.object({
  JWT_KEY: z.string(),
});

export const loginCredentialsSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const serverCredentialsSchema = z.object({
  nuxt: loginCredentialsSchema,
  admin: loginCredentialsSchema,
});
