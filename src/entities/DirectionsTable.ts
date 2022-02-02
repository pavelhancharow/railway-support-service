import { IDirectionType } from 'src/models/IRailway';
import { IRailwayDataBase, RailwayDataBase } from '../db/RailwayDataBase';

class DirectionsTable
  extends RailwayDataBase
  implements IRailwayDataBase<IDirectionType[]>
{
  async initTable(db: IDirectionType[]) {
    try {
      if ((await this.table('directions').toArray()).length) return;

      await this.directions.add({ types: db });

      console.log('Directions db is created');
    } catch (error) {
      throw new Error(`Failed init table directions: ${error}`);
    }
  }
}

export const directionsTable = new DirectionsTable('RailwayDB');
