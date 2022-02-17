import { FC, useEffect, useState } from 'react';
import { FormBox, FormFieldset } from 'src/shared/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MyButton } from '../components/UI/MyButton';
import { FormDirection } from '../components/FormDirection';
import { IFilter, IForm } from 'src/models/IForms';
import { FormTrains } from '../components/FormTrains';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getFormData } from 'src/store/actionCreators/RailwayCreator';
import { useNavigate } from 'react-router-dom';
import { findTrain } from 'src/services/findTrain';

export const Form: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { directions, railway } = useAppSelector(
    (state) => state.railwayReducer
  );
  const { register, handleSubmit, formState, reset } = useForm<IForm>();
  const [filter, setFilter] = useState<IFilter>({
    sort: 1,
    from: NaN,
    to: NaN,
  });
  const { trainTypes } = railway;

  const onSubmit: SubmitHandler<IForm> = async () => {
    const train = findTrain(railway, filter);

    if (train) {
      await dispatch(getFormData([train, filter]));
      navigate('/ticket');
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ from: '', to: '' });
  }, [filter, formState.isSubmitSuccessful, reset]);

  const handleSort = (id: number) => setFilter({ ...filter, sort: id });
  const handleQuery = (id: number, value: string) => {
    setFilter('to' !== value ? { ...filter, from: id } : { ...filter, to: id });
  };

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <h3>Travel Information</h3>
      <FormFieldset>
        {directions?.map((direction) => (
          <FormDirection
            key={direction}
            direction={direction}
            registerDir={direction === 'from' ? 'from' : 'to'}
            errors={formState.errors}
            register={register}
            handleQuery={handleQuery}
          />
        ))}
      </FormFieldset>
      <h3>Choose the train</h3>
      <FormFieldset $maxWidth="45%">
        {trainTypes.map((trainType) => {
          const { train_type, train_type_id } = trainType;
          return (
            <FormTrains
              key={train_type}
              value={train_type}
              register={register}
              checked={filter.sort !== train_type_id ? false : true}
              handleChange={handleSort}
            />
          );
        })}
      </FormFieldset>
      <MyButton type="submit">Search</MyButton>
    </FormBox>
  );
};
