import { Router } from 'express';
import { IAuthController } from '../controller/interfaces/auth-controller';

const authRouter = ({ login, register }: IAuthController) => {
  const authRouter = Router();

  authRouter.route('/').get(login).post(register);
};

export default authRouter;
