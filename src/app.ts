import express, { Application } from 'express';
import { MongoClient } from 'mongodb';
import { json } from 'body-parser';
import { mongoClient, mongoClose } from './util/mongo';
import attachMongo from './middleware';
import userRouter from './domain/user/user_router';
import weatherRouter from './domain/weather/weather_router';

const init = async () => {
	const client: MongoClient = await mongoClient();
	const app: Application = express();
	app.use(json());
	const attachMongoMiddleware = await attachMongo(client);
	app.use(attachMongoMiddleware);
	app.use('/user', userRouter);
	app.use('/weather', weatherRouter);

	process.on('SIGINT', async () => {
		await mongoClose(client);
		process.exit();
	});
	return app;
};

export default init;
