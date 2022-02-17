import { stationsTable } from 'src/entities/StationsTable';

export async function updateStations() {
  const stations = await stationsTable.stations.toArray();
  return stations;
}
