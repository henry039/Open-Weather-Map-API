import express, { Router } from 'express';
import { singUp, login } from './user_controller';

const router: Router = express.Router();

router.post('/signUp', singUp);
router.post('/login', login);

export default router;
