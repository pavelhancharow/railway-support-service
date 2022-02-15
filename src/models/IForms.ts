import { ITicket } from './ITicket';

export interface IForm {
  from: string;
  to: string;
  train: string;
}

export interface ILogin {
  login: string;
  password: string;
}

export interface IRegistration {
  login: string;
  email: string;
}

export interface IUser {
  login: string;
  email: string;
  trips: ITicket[];
}

export interface IAddRoute {
  from: string;
  to: string;
  distance: string;
}
