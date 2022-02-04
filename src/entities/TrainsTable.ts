import { ITrainTypes } from 'src/models/IRailway';
import { IRailwayDataBase, RailwayDataBase } from '../db/RailwayDataBase';

class TrainsTable
  extends RailwayDataBase
  implements IRailwayDataBase<ITrainTypes>
{
  async initTable(db: ITrainTypes) {
    try {
      if ((await this.table('trains').toArray()).length) return;

      await this.trains.add({ types: db });

      console.log('Trains db is created');
    } catch (error) {
      throw new Error(`Failed init table trains: ${error}`);
    }
  }
}

export const trainsTable = new TrainsTable('RailwayDB');
