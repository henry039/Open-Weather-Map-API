import { MongoClient, Collection } from 'mongodb';
// const { MONGO_URL, MONGO_DB } = process.env;
import { MONGO_URL, MONGO_DB } from './dotenv';
// import { MONGO_URL, MONGO_DB } from '../../config';

// mongo client connect / close
export const mongoClient = (): Promise<MongoClient> => {
	console.log('mongodb connected');
	return MongoClient.connect(MONGO_URL!, { useNewUrlParser: true });
};
export const mongoClose = (client: MongoClient): Promise<void> => client.close();

// mongo collection
export const mongoCollection = (client: MongoClient, collectionName: string): Collection =>
	client.db(MONGO_DB).collection(collectionName);
