import { IRailwayDB, RailwayDB } from '../db/RailwayDB';
import { IRoute } from 'src/models/IRailway';

class RoutesTable extends RailwayDB implements IRailwayDB<IRoute[]> {
  async initTable(db: IRoute[]) {
    try {
      if ((await this.table('routes').toArray()).length) return;

      await this.routes.bulkAdd(db);

      console.log('Routes Table created');
    } catch (error) {
      throw new Error(`Failed init table routes: ${error}`);
    }
  }

  async getRouteByTrainId(id: number) {
    return await this.routes.get({ train_id: id });
  }

  async updateRoutes(train_id: number, stations_id: number[]) {
    return await this.routes.put({
      train_id,
      stations_id,
    });
  }
}

export const routesTable = new RoutesTable('RailwayDB');
