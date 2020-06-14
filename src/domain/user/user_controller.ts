import { Request, Response } from 'express';
import { userCollection, checkUserPwd, signUpUser } from './user_repository';
import { hashedText, isSameText } from '../../util/auth';
import { signJWT } from '../../util/jwt';

export async function singUp(req: Request, res: Response) {
	const { name, password } = req.body;
	const { mongoClient } = req;
	try {
		const user = await userCollection(mongoClient!);
		const hashedPwd = await hashedText(password);
		await signUpUser(user, { name, password: hashedPwd });
		res.status(200).send(`${name} has been successfully created`);
	} catch (err) {
		res.status(400).send(`"${name}" has already been taken`);
	}
}

export async function login(req: Request, res: Response) {
	const { name, password } = req.body;
	const { mongoClient } = req;
	try {
		// const client = await mongoClient;
		const user = await userCollection(mongoClient!);
		const pwd = await checkUserPwd(user, name);
		(await isSameText(password, pwd))
			? res.status(200).send({ msg: `${name} login success`, token: signJWT(name) })
			: res.status(400).send('Wrong Password / Username');
	} catch (err) {
		res.status(400).send(`Wrong Password / Username`);
	}
}
