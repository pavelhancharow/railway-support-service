import Dexie, { Table } from 'dexie';
import { IRoute } from '../models/IRoute';

class MySubClassedDexie extends Dexie {
  routes!: Table<IRoute>;

  constructor(dbName: string) {
    super(dbName);

    this.version(1).stores({
      routes: '++id, &from, to',
    });
  }

  async initTable(db: IRoute[]) {
    try {
      if ((await this.table('routes').toArray()).length) return;

      await this.routes.bulkAdd(db);
      console.log('Routes db is created');
    } catch (error) {
      throw new Error(`Failed init table routes: ${error}`);
    }
  }
}

export const idb = new MySubClassedDexie('myDatabase');
