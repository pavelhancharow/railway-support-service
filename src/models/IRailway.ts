export interface IRoute {
  id?: number;
  from: string;
  to: {
    city: string;
    distance: number;
    train: {
      type: string;
      price: number;
    }[];
  }[];
}

export type ITrainType = string;

export interface ITrain {
  id?: number;
  types: ITrainType[];
}

export type IDirectionType = string;

export interface IDirection {
  id?: number;
  types: IDirectionType[];
}

export interface IRailway {
  directions?: IDirectionType[];
  trains?: ITrainType[];
  routes?: IRoute[];
}
