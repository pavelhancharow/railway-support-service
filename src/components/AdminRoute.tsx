import { FC, SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IAdminRoute } from 'src/models/IForms';
import { AdminRouteBox } from 'src/shared/AdminRoute';
import { AdminRouteForm } from 'src/shared/AdminRouteForm';
import { FormFieldset } from 'src/shared/Form';
import {
  toggleModalSuccess,
  updateRailway,
} from 'src/store/actionCreators/RailwayCreator';
import { AdminRouteDirection } from './AdminRouteDirection';
import { AdminRouteRange } from './AdminRouteRange';
import { AdminRouteStation } from './AdminRouteStation';
import { AdminRouteTrain } from './AdminRouteTrain';
import { SuccessModal } from './SuccessModal';
import { MyButton } from './UI/MyButton';

export const AdminRoute: FC = (): JSX.Element => {
  const { isSuccessRoute, railway, directions } = useAppSelector(
    (state) => state.railwayReducer
  );
  const { trainTypes } = railway;
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<IAdminRoute>({
    train: '',
    sort: 1,
    from: NaN,
    to: NaN,
    stations: [],
  });
  const [choosedStations, setChoosedStations] = useState<string[]>([]);

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

    setChoosedStations((state) => {
      const newState = state;
      const array = newState.filter((_, i, arr) => i !== arr.length - 1);

      return [...array];
    });
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
      <SuccessModal
        trigger={isSuccessRoute}
        handleSuccess={() => dispatch(toggleModalSuccess(false))}
      >
        Route created successful!
      </SuccessModal>
    </AdminRouteBox>
  );
};
