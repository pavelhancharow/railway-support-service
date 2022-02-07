import { IForm } from 'src/models/IForms';
import { IRoute, ITrainTypes } from 'src/models/IRailway';

export function createTicket(res: [IForm, IRoute[], ITrainTypes]) {
  const [form, routes, trains] = res;

  const ticket = {
    from: '',
    to: '',
    train: '',
    price: NaN,
    distance: NaN,
    duration: '-',
  };

  const isFromCity = routes.find((route) => route.from === form.from);

  if (!isFromCity) return null;
  ticket.from = isFromCity.from[0].toUpperCase() + isFromCity.from.slice(1);

  const isToCity = isFromCity.to.find((to) => to.city === form.to);

  if (!isToCity) return null;
  ticket.to = isToCity.city[0].toUpperCase() + isToCity.city.slice(1);
  ticket.distance = isToCity.distance;

  for (const key in trains) {
    if (key === form.train) {
      ticket.train = key;
      ticket.price = +(trains[key] * ticket.distance).toFixed(2);
      return ticket;
    }
  }
}
