import { IRailwayDB, RailwayDB } from 'src/db/RailwayDB';
import { ITrainType } from 'src/models/IRailway';

class TrainTypesTable extends RailwayDB implements IRailwayDB<ITrainType[]> {
  async initTable(db: ITrainType[]) {
    try {
      if ((await this.table('trainTypes').toArray()).length) return;

      await this.trainTypes.bulkAdd(db);

      console.log('Train Types Table created');
    } catch (error) {
      throw new Error(`Failed init table train types: ${error}`);
    }
  }

  async getTrainType(id: number) {
    return await this.trainTypes.get({ train_type_id: id });
  }
}

export const trainTypesTable = new TrainTypesTable('RailwayDB');
