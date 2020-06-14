import { JWT_SECRET } from '../util/dotenv';
import { verify, sign } from 'jsonwebtoken';
import { promisify } from 'util';

const verPromise = promisify(verify);
export const signJWT = (name: string) => sign({ name }, JWT_SECRET!, { expiresIn: '2m' });
export const verifyJWT = (token: string): Promise<unknown> => verPromise(token, JWT_SECRET!);
