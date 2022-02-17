import { routesTable } from 'src/entities/RoutesTable';
import { trainsTable } from 'src/entities/TrainsTable';
import { IAdminRoute } from 'src/models/IForms';

export async function createNewRoute(data: IAdminRoute) {
  const { train, sort, stations, from, to } = data;
  await trainsTable.updateTrains(train, sort);
  const lastTrain = await trainsTable.getTrainLastId();

  if (lastTrain) {
    await routesTable.updateRoutes(lastTrain.train_id, [from, ...stations, to]);
  }
}
