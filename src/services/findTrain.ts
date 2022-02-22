import { IFilterForm } from 'src/models/IForms';
import { IRailway } from 'src/models/IRailway';

export function findTrain(railway: IRailway, filter: IFilterForm) {
  const routes = railway.routes.filter((route) => {
    let acc = NaN;

    return route.stations_id.find((stations, i, array) => {
      if (stations === filter.from) {
        acc = 0;
        acc += i;
      }

      if (stations === filter.to && acc < i) return array;
    });
  });

  if (!routes.length) return null;

  const trainType = railway.trainTypes.find(
    (t) => t.train_type_id === filter.sort
  );

  if (!trainType) return null;

  const train = railway.trains.find((t) => {
    if (t.train_type_id === trainType.train_type_id) {
      return routes.find((route) => route.train_id === t.train_id);
    }
  });

  if (!train) return null;

  return train;
}
