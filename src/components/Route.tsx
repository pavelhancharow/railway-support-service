import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IAddRoute } from 'src/models/IForms';
import { RouteBox } from 'src/shared/Route';
import { addToRailway } from 'src/store/actionCreators/RailwayCreator';
import { toggleModalRoute } from 'src/store/actionCreators/PageCreator';
import { MyButton } from './UI/MyButton';
import MyModal from './UI/MyModal';

export const Route: FC = (): JSX.Element => {
  const { isModalRoute } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, reset } = useForm<IAddRoute>();

  const onSubmit = async (data: IAddRoute) => {
    await dispatch(addToRailway(data));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ from: '', to: '', distance: '' });
  }, [formState, reset]);

  return (
    <MyModal
      $display={isModalRoute}
      handleClick={() => dispatch(toggleModalRoute(false))}
    >
      <RouteBox onSubmit={handleSubmit(onSubmit)}>
        <h3>Add New Route</h3>
        <label htmlFor="from">
          <input
            type="text"
            placeholder="Enter city from"
            {...register('from', { required: true })}
          />
          {formState.errors.from && <span>This field is required</span>}
        </label>
        <label htmlFor="to">
          <input
            type="text"
            placeholder="Enter city to"
            {...register('to', { required: true })}
          />
          {formState.errors.to && <span>This field is required</span>}
        </label>
        <label htmlFor="distance">
          <input
            type="text"
            placeholder="Enter route distance"
            {...register('distance', { required: true })}
          />
          {formState.errors.distance && <span>This field is required</span>}
        </label>
        <MyButton type="submit">Add Route</MyButton>
      </RouteBox>
    </MyModal>
  );
};
