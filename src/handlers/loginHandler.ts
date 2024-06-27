import { Request, Response } from 'express';
import { generateToken } from '../utils/generateToken.ts';
import {
  loginCredentialsSchema,
  serverCredentialsSchema,
} from '../types/zod-shemas-and-TS-types.ts';

const serverCredentials = serverCredentialsSchema.parse(process.env);

export async function loginHandler(req: Request, res: Response) {
  const validation = loginCredentialsSchema.safeParse(req.body);

  // If parsing is succesfull proceed with login
  if (validation.success) {
    const { username, password } = validation.data;

    // If any key-value pairs match username and password validCredentials equals true.
    const validCredentials = Object.values(serverCredentials).some(
      (creds) => creds.username === username && creds.password === password
    );

    // If credentials has a match, generate token, set header and return token in body.
    if (validCredentials) {
      const token = generateToken(username);
      return res
        .setHeader('Authorization', `Bearer ${token}`)
        .status(200)
        .json({ access_token: token });
    }

    // If validation fail or if credentials doesn't match
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
