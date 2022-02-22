import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { stationsTable } from 'src/db/entities/StationsTable';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { AdminStationBox } from 'src/shared/AdminStation';
import {
  addNewStation,
  toggleModalSuccess,
} from 'src/store/actionCreators/RailwayCreator';
import { SuccessModal } from './SuccessModal';
import { MyButton } from './UI/MyButton';

interface IAdminStation {
  station: string;
}

export const AdminStation: FC = (): JSX.Element => {
  const { isSuccessStation } = useAppSelector((state) => state.railwayReducer);
  const { register, handleSubmit, formState, reset } = useForm<IAdminStation>();
  const [isCreated, setIsCreated] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IAdminStation) => {
    const value = data.station.trim().split(' ').join('');
    const str = value[0].toUpperCase() + value.slice(1).toLowerCase();
    const result = await stationsTable.getStationByName(str);

    if (!result) {
      setIsCreated(false);
      await dispatch(addNewStation(str));
    } else {
      setIsCreated(true);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ station: '' });
  }, [formState, reset]);

  return (
    <AdminStationBox>
      <h3>Add New Station:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="station">
          <input
            type="text"
            placeholder="Add New Station"
            {...register('station', { required: true })}
          />
          {formState.errors.station && <span>This field is required</span>}
          {isCreated && <span>This station has been already created</span>}
        </label>
        <MyButton type="submit">Add Station</MyButton>
      </form>
      <SuccessModal
        trigger={isSuccessStation}
        handleSuccess={() => dispatch(toggleModalSuccess(false))}
      >
        Station created successful!
      </SuccessModal>
    </AdminStationBox>
  );
};
