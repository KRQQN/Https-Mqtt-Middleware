import { Request, Response, NextFunction } from 'express';
import { jwtSecretSchema } from '../types/zod-shemas-and-TS-types.ts';
import jwt from 'jsonwebtoken';

const { JWT_KEY } = jwtSecretSchema.parse(process.env);

/**
 * ### Middlewarefunction to use for endpoint authentication.
 * 
 * Checks if token is present in the Authorization header
 * if its not it returns status 403 with message "Token not provided".
 *
 * If it is present the jwt-library verifies the token.
 * If it fails it returns status 410 with message "Failed to authenticate token".
 * else ir sets a property on the request object containing the decoded token.
 * Next() makes it proceed to the next middleware e.g a GET request.
 */

async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: 'Token not provided' });

  // split separates the token part of the string 'Bearer <jwtTokenStringHere>' and picks the token
  jwt.verify(token.split(' ')[1], JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate token', error: err });
    req.decodedToken = decoded;
  });
  next();
}

export default authenticateToken;
