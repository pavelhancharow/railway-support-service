import { stationsTable } from 'src/db/entities/StationsTable';

export async function updateStations() {
  const stations = await stationsTable.stations.toArray();
  return stations;
}
