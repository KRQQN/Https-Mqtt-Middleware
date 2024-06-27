import jwt from 'jsonwebtoken';
import { jwtSecretSchema } from '../types/zod-shemas-and-TS-types.ts';

const { JWT_KEY } = jwtSecretSchema.parse(process.env)

// Function to generate a jwt-token with the username as payload
export function generateToken(username: string): string {
  return jwt.sign(username, JWT_KEY);
}
