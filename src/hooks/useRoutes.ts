import { useAppSelector } from 'src/hooks/redux';
import { IRoute, IStation, ITrain } from 'src/models/IRailway';

export function useRoutes(): [
  (route: IRoute) => ITrain | undefined,
  (route: IRoute) => (IStation | undefined)[]
] {
  const { trains, stations } = useAppSelector(
    (state) => state.railwayReducer.railway
  );

  const getRouteTrain = (route: IRoute): ITrain | undefined => {
    return trains.find((train) => train.train_id === route.train_id);
  };

  const getRouteStations = (route: IRoute): (IStation | undefined)[] => {
    return route.stations_id.map((station) => {
      return stations.find((item) => item.station_id === station);
    });
  };

  return [getRouteTrain, getRouteStations];
}
