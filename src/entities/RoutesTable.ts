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

  async get() {
    return await this.routes.toArray();
  }

  async post(cityA: string, cityB: string, distance: number) {
    await this.routes.add({
      from: cityA,
      to: [{ city: cityB, distance: distance }],
    });
  }

  async put(cityA: string, cityB: string, distance: number) {
    await this.routes.where({ from: cityA }).modify((route) => {
      const isCityB = route.to.find((item) => item.city === cityB);

      if (!isCityB) return route.to.push({ city: cityB, distance: distance });

      isCityB.distance = distance;
    });
  }
}

export const routesTable = new RoutesTable('RailwayDB');
