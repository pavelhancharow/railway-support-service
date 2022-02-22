import { ITicket } from './ITicket';

export interface IForm {
  from: string;
  to: string;
  train: string;
}

export interface ILoginForm {
  login: string;
  password: string;
}

export interface IRegistrationForm {
  login: string;
  email: string;
}

export interface IUserForm {
  login: string;
  email: string;
  trips: ITicket[];
}

export interface IAddRouteForm {
  from: string;
  to: string;
  distance: string;
}

export interface IFilterForm {
  sort: number;
  from: number;
  to: number;
}

export interface IAdminRouteForm {
  train: string;
  sort: number;
  from: number;
  to: number;
  stations: number[];
}
