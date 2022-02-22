import { IRailwayDB, RailwayDB } from 'src/db/RailwayDB';
import { IStation } from 'src/models/IRailway';

class StationsTable extends RailwayDB implements IRailwayDB<IStation[]> {
  async initTable(db: IStation[]) {
    try {
      if ((await this.table('stations').toArray()).length) return;

      await this.stations.bulkAdd(db);

      console.log('Stations Table created');
    } catch (error) {
      throw new Error(`Failed init table stations: ${error}`);
    }
  }

  async getStation(id: number) {
    return await this.stations.get({ station_id: id });
  }

  async getStationByName(str: string) {
    return await this.stations.get({ station: str });
  }

  async updateStations(str: string) {
    const station = await this.stations.orderBy('station_id').last();

    return await this.stations.put({
      station_id: station ? station.station_id + 1 : 1,
      station: str,
    });
  }
}

export const stationsTable = new StationsTable('RailwayDB');
