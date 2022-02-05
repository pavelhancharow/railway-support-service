import { RailwayDB } from 'src/db/RailwayDB';
import { adminTable } from 'src/entities/AdminTable';
import { directionsTable } from 'src/entities/DirectionsTable';
import { routesTable } from 'src/entities/RoutesTable';
import { trainsTable } from 'src/entities/TrainsTable';

export async function initTables() {
  const { routes, trains, directions, administrator } = RailwayDB;

  await adminTable.initTable(administrator);
  await trainsTable.initTable(trains);
  await routesTable.initTable(routes);
  await directionsTable.initTable(directions);
}
