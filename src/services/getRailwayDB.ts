import { directionsTable } from 'src/entities/DirectionsTable';
import { routesTable } from 'src/entities/RoutesTable';
import { trainsTable } from 'src/entities/TrainsTable';

export async function getRailwayDB() {
  const trainsResponse = await trainsTable.trains.get(1);
  const routesResponse = await routesTable.routes.toArray();
  const directionsResponse = await directionsTable.directions.get(1);

  return {
    directions: directionsResponse?.types,
    routes: routesResponse,
    trains: trainsResponse?.types,
  };
}
