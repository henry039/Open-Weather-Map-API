import { MongoClient } from 'mongodb';

declare global {
	namespace Express {
		// MUST be namespace, and not declare module "Express" {
		export interface Request {
			mongoClient?: MongoClient;
		}
	}
}
