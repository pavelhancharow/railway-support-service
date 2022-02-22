import { Admin, Routes, Stations, Trains, TrainTypes } from 'src/db/dbSeed';
import { adminTable } from 'src/entities/AdminTable';
import { routesTable } from 'src/entities/RoutesTable';
import { stationsTable } from 'src/entities/StationsTable';
import { trainsTable } from 'src/entities/TrainsTable';
import { trainTypesTable } from 'src/entities/TrainTypesTable';

export async function initTables() {
  await adminTable.initTable(Admin);
  await routesTable.initTable(Routes);
  await stationsTable.initTable(Stations);
  await trainsTable.initTable(Trains);
  await trainTypesTable.initTable(TrainTypes);
}
