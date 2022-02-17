export const Admin = {
  isAdmin: false,
  name: 'admin',
  password: 'admin',
};

export const Stations = [
  { station_id: 1, station: 'Minsk' },
  { station_id: 2, station: 'Moscow' },
  { station_id: 3, station: 'Brest' },
  { station_id: 4, station: 'Warsaw' },
  { station_id: 5, station: 'Berlin' },
  { station_id: 6, station: 'Paris' },
];

export const Routes = [
  { train_id: 1, stations_id: [2, 1, 3, 4, 5] },
  { train_id: 2, stations_id: [5, 4, 3, 2, 1] },
  { train_id: 3, stations_id: [1, 5] },
];

export const TrainTypes = [
  { train_type_id: 1, train_type: 'passenger', train_type_tariff: 0.1 },
  { train_type_id: 2, train_type: 'express', train_type_tariff: 0.2 },
  { train_type_id: 3, train_type: 'freight', train_type_tariff: 0.25 },
];

export const Trains = [
  { train_type_id: 1, train_id: 1, train: 'moscow-berlin' },
  { train_type_id: 1, train_id: 2, train: 'berlin-moscow' },
  { train_type_id: 2, train_id: 3, train: 'minsk-berlin' },
];
