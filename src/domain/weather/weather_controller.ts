import { Request, Response } from 'express';
import { getWeather, updateWeather, weatherCollection } from './weather_repository';
import { verifyJWT } from '../../util/jwt';
import axios, { AxiosResponse } from 'axios';
import { WEATHER_URL } from '../../util/dotenv';

export async function getWeatherRoute(req: Request, res: Response) {
	const { authorization } = req.headers;
	const { mongoClient } = req;
	try {
		if (authorization) {
			const token = authorization.split(' ')[1];
			await verifyJWT(token);
			const weather = await weatherCollection(mongoClient!);
			axios
				.get(WEATHER_URL!)
				.then(({ data }: AxiosResponse) => {
					updateWeather(weather, data);
					res.status(200).send(data);
				})
				.catch(async () => res.status(200).send(await getWeather(weather)));
		} else {
			res.status(401).send('You have to login to gain access token');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
}
