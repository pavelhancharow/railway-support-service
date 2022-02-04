export interface IRoute {
  id?: number;
  from: string;
  to: {
    city: string;
    distance: number;
  }[];
}

export interface ITrainTypes {
  [key: string]: number;
}

export interface ITrain {
  id?: number;
  types: ITrainTypes;
}

export type IDirectionType = string;

export interface IDirection {
  id?: number;
  types: IDirectionType[];
}

export interface IRailway {
  directions?: IDirectionType[];
  trains?: ITrainTypes;
  routes?: IRoute[];
}
