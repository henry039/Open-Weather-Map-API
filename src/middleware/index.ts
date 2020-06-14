import { Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb';

export default async (client: MongoClient) => {
	return (request: Request, _response: Response, next: NextFunction) => {
		request.mongoClient = client;
		next();
	};
};
