export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister extends ILogin {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}

export interface IAuthController {
  login(body: ILogin): Promise<any>;
  register(body: IRegister): Promise<any>;
}
