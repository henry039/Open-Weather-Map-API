import express, { Router } from 'express';
import { getWeatherRoute } from './weather_controller';

const router: Router = express.Router();

router.get('/getInfo', getWeatherRoute);

export default router;
