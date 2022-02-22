import { routesTable } from 'src/db/entities/RoutesTable';
import { stationsTable } from 'src/db/entities/StationsTable';
import { trainTypesTable } from 'src/db/entities/TrainTypesTable';
import { IFilter } from 'src/models/IForms';
import { ITrain } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';

export async function createTicket(data: [ITrain, IFilter]) {
  const [Train, Filter] = data;
  const { train, train_id, train_type_id } = Train;
  const { from, to } = Filter;

  let trigger = false;

  const ticket: ITicket = {
    train,
    trainType: '',
    tariff: NaN,
    from: '',
    to: '',
    stations: [] as string[],
    price: NaN,
    distance: '',
    duration: '',
  };

  const trainInfo = await trainTypesTable.getTrainType(train_type_id);
  if (!trainInfo) return null;
  ticket.trainType = trainInfo.train_type;
  ticket.tariff = trainInfo.train_type_tariff;

  const fromStation = await stationsTable.getStation(from);
  if (!fromStation) return null;
  ticket.from = fromStation.station;

  const toStation = await stationsTable.getStation(to);
  if (!toStation) return null;
  ticket.to = toStation.station;

  const stations = await routesTable.getRouteByTrainId(train_id);
  if (!stations) return null;

  for (const station of stations.stations_id) {
    if (station === to) {
      trigger = false;
      const res = await stationsTable.getStation(station);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ticket.stations.push(res!.station);
    }

    if (trigger) {
      const res = await stationsTable.getStation(station);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ticket.stations.push(res!.station);
    }

    if (station === from) {
      trigger = true;
      const res = await stationsTable.getStation(station);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ticket.stations.push(res!.station);
    }
  }

  return ticket;
}
