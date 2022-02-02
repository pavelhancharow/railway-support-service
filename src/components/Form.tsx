import { FC } from 'react';
import { FormBox, FormFieldset } from 'src/shared/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MyButton } from './UI/MyButton';
import { FormDirection } from './FormDirection';
import { IForm } from 'src/models/IForm';
import { FormTrains } from './FormTrains';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getFormData } from 'src/store/reducers/ActionCreator';

export const Form: FC = (): JSX.Element => {
  const { directions, trains } = useAppSelector(
    ({ railwayReducer }) => railwayReducer.railway
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    await dispatch(getFormData(formData));
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
            errors={errors}
            register={register}
          />
        ))}
      </FormFieldset>
      <h3>Choose the train</h3>
      <FormFieldset $maxWidth="45%">
        {trains?.map((train, i) => (
          <FormTrains
            key={train}
            value={train}
            register={register}
            checked={i !== 0 ? false : true}
          />
        ))}
      </FormFieldset>
      <MyButton type="submit">Search</MyButton>
    </FormBox>
  );
};
