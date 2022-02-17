export interface IStation {
  station_id: number;
  station: string;
}

export interface IRoute {
  train_id: number;
  stations_id: number[];
}

export interface ITrain {
  train_type_id: number;
  train_id: number;
  train: string;
}

export interface ITrainType {
  train_type_id: number;
  train_type: string;
  train_type_tariff: number;
}

export interface IRailway {
  stations: IStation[];
  routes: IRoute[];
  trains: ITrain[];
  trainTypes: ITrainType[];
}

export interface IAdmin {
  id?: number;
  isAdmin: boolean;
  name: string;
  password: string;
}
