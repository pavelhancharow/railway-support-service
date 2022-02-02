import { IRoute } from 'src/models/IRailway';
import { IRailwayDataBase, RailwayDataBase } from '../db/RailwayDataBase';

class RoutesTable
  extends RailwayDataBase
  implements IRailwayDataBase<IRoute[]>
{
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

export const routesTable = new RoutesTable('RailwayDB');
