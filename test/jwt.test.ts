import request from 'supertest';
import init from '../src/app';
import { signJWT, verifyJWT } from '../src/util/jwt';
import { hashedText, isSameText } from '../src/util/auth';

interface IUser {
	name: string;
}

describe('Login', () => {
	test('login', async () => {
		const app = await init();
		const res = await request(app).get('/weather/getInfo');
		expect(res.status).toBe(401);
	});
});

describe('about jwt', () => {
	test('test jwt', async () => {
		const testText = 'test';
		const temp = signJWT(testText);
		const jwt = (await verifyJWT(temp)) as IUser;
		expect(jwt.name).toBe(testText);
	});
});

describe('about hash', () => {
	test('test hash function', async () => {
		const testText = 'test';
		const hashed = await hashedText(testText);
		expect(await isSameText(testText, hashed)).toBe(true);
	});
});
