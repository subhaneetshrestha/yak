import { IAuthController, ILogin, IRegister } from './interfaces/auth-controller';
export default class AuthController implements IAuthController {
  login = async (body: ILogin) => {};

  register = async (body: IRegister) => {};
}
