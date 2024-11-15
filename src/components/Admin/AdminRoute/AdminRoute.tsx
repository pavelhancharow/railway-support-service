import { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IAdminRouteForm } from 'src/models/IForms';
import {
  AdminRouteBox,
  AdminRouteForm,
} from 'src/components/Admin/AdminRoute/AdminRouteStyles';
import { FormFieldset } from 'src/pages/Form/FormStyles';
import {
  toggleModalSuccess,
  updateRailway,
} from 'src/store/reducers/RailwaySlice/actionCreator';
import { AdminRouteDirection } from './AdminRouteDirection';
import { MyButton } from '../../UI/MyButton/MyButton';
import { AdminRouteTrain } from './AdminRouteTrain';
import { AdminRouteRange } from './AdminRouteRange';
import { AdminRouteStation } from './AdminRouteStation';
import { AdminSuccessModal } from '../AdminSuccessModal';

export const AdminRoute: FC = (): JSX.Element => {
  const { isSuccessRoute, railway } = useAppSelector(
    (state) => state.railwayReducer
  );
  const { trainTypes } = railway;
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<IAdminRouteForm>({
    train: '',
    sort: 1,
    from: NaN,
    to: NaN,
    stations: [],
  });
  const [choosedStations, setChoosedStations] = useState<string[]>([]);
  const directions = ['from', 'to'];

  const handleSort = (id: number) => setFilter({ ...filter, sort: id });
  const handleTrain = (text: string) => setFilter({ ...filter, train: text });
  const handleQuery = (id: number, value: string) => {
    setFilter('to' !== value ? { ...filter, from: id } : { ...filter, to: id });
  };
  const handleStation = (id: number, value: string) => {
    setFilter((state) => {
      return { ...filter, stations: [...state.stations, id] };
    });
    setChoosedStations((state) => [...state, value]);
  };

  const handleRemoveStation = () => {
    setFilter((state) => {
      const newState = state;
      const array = newState.stations.filter(
        (_, i, arr) => i !== arr.length - 1
      );

      return { ...filter, stations: [...array] };
    });

    setChoosedStations((state) =>
      state.filter((_, i, arr) => i !== arr.length - 1)
    );
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(updateRailway(filter));
  };

  return (
    <AdminRouteBox>
      <h3>Add New Route:</h3>
      <AdminRouteForm autoComplete="off" onSubmit={handleSubmit}>
        <AdminRouteTrain handleTrain={handleTrain} />
        {directions?.map((direction) => (
          <AdminRouteDirection
            key={direction}
            direction={direction}
            handleQuery={handleQuery}
          />
        ))}
        <FormFieldset $maxWidth="45%">
          {trainTypes.map((trainType) => {
            const { train_type, train_type_id } = trainType;
            return (
              <AdminRouteRange
                key={train_type}
                value={train_type}
                checked={filter.sort !== train_type_id ? false : true}
                handleChange={handleSort}
              />
            );
          })}
        </FormFieldset>
        <AdminRouteStation
          direction="station"
          handleStation={handleStation}
          handleRemoveStation={handleRemoveStation}
        />
        <p>My added stations: {choosedStations.join(' ')}</p>
        <MyButton type="submit">Add Route</MyButton>
      </AdminRouteForm>
      <AdminSuccessModal
        trigger={isSuccessRoute}
        handleSuccess={() => dispatch(toggleModalSuccess(false))}
      >
        Route created successful!
      </AdminSuccessModal>
    </AdminRouteBox>
  );
};
