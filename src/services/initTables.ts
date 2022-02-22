import { Admin, Routes, Stations, Trains, TrainTypes } from 'src/db/dbSeed';
import { adminTable } from 'src/db/entities/AdminTable';
import { routesTable } from 'src/db/entities/RoutesTable';
import { stationsTable } from 'src/db/entities/StationsTable';
import { trainsTable } from 'src/db/entities/TrainsTable';
import { trainTypesTable } from 'src/db/entities/TrainTypesTable';

export async function initTables() {
  await adminTable.initTable(Admin);
  await routesTable.initTable(Routes);
  await stationsTable.initTable(Stations);
  await trainsTable.initTable(Trains);
  await trainTypesTable.initTable(TrainTypes);
}
