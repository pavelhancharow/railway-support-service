import { IRailwayDB, RailwayDB } from '../RailwayDB';
import { ITrain } from 'src/models/IRailway';

class TrainsTable extends RailwayDB implements IRailwayDB<ITrain[]> {
  async initTable(db: ITrain[]) {
    try {
      if ((await this.table('trains').toArray()).length) return;

      await this.trains.bulkAdd(db);

      console.log('Trains Table created');
    } catch (error) {
      throw new Error(`Failed init table trains: ${error}`);
    }
  }

  async getTrainLastId() {
    return await this.trains.orderBy('train_id').last();
  }

  async updateTrains(str: string, type_id: number) {
    const trn = await this.trains.orderBy('train_id').last();

    return await this.trains.put({
      train_type_id: type_id,
      train_id: trn ? trn.train_id + 1 : 1,
      train: str,
    });
  }
}

export const trainsTable = new TrainsTable('RailwayDB');
