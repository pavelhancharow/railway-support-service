import { routesTable } from 'src/db/entities/RoutesTable';
import { stationsTable } from 'src/db/entities/StationsTable';
import { trainsTable } from 'src/db/entities/TrainsTable';
import { trainTypesTable } from 'src/db/entities/TrainTypesTable';
import { IRailway } from 'src/models/IRailway';

export async function getRailwayDB(): Promise<IRailway> {
  const stations = await stationsTable.stations.toArray();
  const routes = await routesTable.routes.toArray();
  const trainTypes = await trainTypesTable.trainTypes.toArray();
  const trains = await trainsTable.trains.toArray();

  return { stations, routes, trainTypes, trains };
}
