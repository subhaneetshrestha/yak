import { Request as ExpressRequest } from 'express';

export type AnyObj = {
  [key: string]: any;
};

export type TObj<T> = {
  [key: string]: T
}

export type Request = ExpressRequest & {
  user?: IAuthUser;
};

export type MiddlewareType = (req: Request)
