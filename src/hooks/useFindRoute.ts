import { useAppSelector } from 'src/hooks/redux';

export function useFindRoute() {
  const { railway, form } = useAppSelector((state) => state.railwayReducer);
  const { routes } = railway;

  if (!routes) return null;

  const ticket = {
    from: '',
    to: '',
    train: '',
    price: NaN,
    distance: NaN,
  };

  const isFromCity = routes.find((route) => route.from === form.from);

  if (!isFromCity) return null;
  ticket.from = isFromCity.from[0].toUpperCase() + isFromCity.from.slice(1);

  const isToCity = isFromCity.to.find((to) => to.city === form.to);

  if (!isToCity) return null;
  ticket.to = isToCity.city[0].toUpperCase() + isToCity.city.slice(1);
  ticket.distance = isToCity.distance;

  const trains = railway.trains;

  for (const key in trains) {
    if (key === form.train) {
      ticket.train = key;
      ticket.price = trains[key] * ticket.distance;
      return ticket;
    }
  }
}
