import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { useRoutes } from 'src/hooks/useRoutes';
import { IRoute } from 'src/models/IRailway';
import {
  AdminRoutesBox,
  AdminRoutesListBox,
  AdminRoutesListBtns,
  AdminRoutesListWrap,
} from 'src/shared/AdminRoutesList';
import { v4 as uuidv4 } from 'uuid';
import { MyButton } from './UI/MyButton';

export const AdminRoutesList: FC = (): JSX.Element => {
  const { routes } = useAppSelector((state) => state.railwayReducer.railway);
  const [getRouteTrain, getRouteStations] = useRoutes();

  const createRoute = (route: IRoute) => {
    const resultTrain = getRouteTrain(route);
    const station = getRouteStations(route);

    if (!resultTrain) return;
    const { train, train_id } = resultTrain;

    return (
      <AdminRoutesListWrap key={uuidv4()}>
        <ul>
          <li data-train_id={train_id}>
            <b>Train Route:</b> {train}
          </li>
          <li>
            Stations:{' '}
            <ul style={{ display: 'flex' }}>
              {station.map((elem) => (
                // eslint-disable-next-line max-len
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                <li key={elem!.station} data-station_id={elem!.station_id}>
                  {elem?.station},
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <AdminRoutesListBtns>
          <MyButton>Change</MyButton>
          <MyButton>Delete</MyButton>
        </AdminRoutesListBtns>
      </AdminRoutesListWrap>
    );
  };

  return (
    <AdminRoutesBox>
      <h3>Routes List:</h3>
      <AdminRoutesListBox>
        {routes.map((route) => createRoute(route))}
      </AdminRoutesListBox>
    </AdminRoutesBox>
  );
};
