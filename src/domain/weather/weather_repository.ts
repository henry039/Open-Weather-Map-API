import { Collection, MongoClient } from 'mongodb';
import { mongoCollection } from '../../util/mongo';

// weather Collection
export const weatherCollection = (client: MongoClient) => mongoCollection(client, 'weather');

// collection operations
export const updateWeather = (collection: Collection, weather: unknown) => collection.insertOne(weather);

export const getWeather = (collection: Collection): Promise<unknown> =>
	collection.find().sort({ _id: -1 }).limit(1).toArray().then((res) => res[0]);
