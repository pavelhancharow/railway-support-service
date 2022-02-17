import Dexie, { Table } from 'dexie';
import { IAdmin } from 'src/models/IRailway';
import { IRoute, IStation, ITrain, ITrainType } from 'src/models/IRailway';

export interface IRailwayDB<T> {
  initTable: (db: T) => void;
}

export class RailwayDB extends Dexie {
  admin!: Table<IAdmin>;
  routes!: Table<IRoute>;
  stations!: Table<IStation>;
  trains!: Table<ITrain>;
  trainTypes!: Table<ITrainType>;

  constructor(dbName: string) {
    super(dbName);

    this.version(1).stores({
      admin: '++id, isAdmin, &name, password',
      routes: '++id, &train_id, &stations_id',
      stations: '++id, &station_id, &station',
      trains: '++id, &train_id, train_type_id, &train',
      trainTypes: '++id, &train_type_id, &train_type, train_type_tariff',
    });
  }
}
