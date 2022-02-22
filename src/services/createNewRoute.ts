import { routesTable } from 'src/db/entities/RoutesTable';
import { trainsTable } from 'src/db/entities/TrainsTable';
import { IAdminRoute } from 'src/models/IForms';

export async function createNewRoute(data: IAdminRoute) {
  const { train, sort, stations, from, to } = data;
  await trainsTable.updateTrains(train, sort);
  const lastTrain = await trainsTable.getTrainLastId();

  if (lastTrain) {
    await routesTable.updateRoutes(lastTrain.train_id, [from, ...stations, to]);
  }
}
