import dotenv from 'dotenv';
dotenv.config();
import init from './src/app';
import { PORT } from './src/util/dotenv';

init().then((app) => {
	app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
