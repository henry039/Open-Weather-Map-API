import { Collection, MongoClient } from 'mongodb';
import { mongoCollection } from '../../util/mongo';

interface IUser {
	name: string;
	password: string;
}

// user Collection
export const userCollection = (client: MongoClient) => mongoCollection(client, 'user');

// user collectio operations
export const signUpUser = (collection: Collection, user: IUser) => collection.insertOne(user);

export const checkUserPwd = (collection: Collection, userName: string): Promise<string> =>
	collection.findOne({ name: userName }).then(({ password }) => password);
