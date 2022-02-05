import Dexie, { Table } from 'dexie';
import { IAdmin, IDirection, IRoute, ITrain } from '../models/IRailway';

export interface IRailwayDataBase<T> {
  initTable: (db: T) => void;
}

export class RailwayDataBase extends Dexie {
  routes!: Table<IRoute>;
  trains!: Table<ITrain>;
  directions!: Table<IDirection>;
  admin!: Table<IAdmin>;

  constructor(dbName: string) {
    super(dbName);

    this.version(1).stores({
      routes: '++id, &from, to',
      trains: '++id, &types',
      directions: '++id, &types',
      admin: '++id, &administrator',
    });
  }
}
