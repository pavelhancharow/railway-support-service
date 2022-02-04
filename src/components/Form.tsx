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
  const { railway } = useAppSelector((state) => state.railwayReducer);
  const { register, handleSubmit, formState } = useForm<IForm>();
  const { directions, trains } = railway;
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IForm> = (formData) => {
    dispatch(getFormData(formData));
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
          />
        ))}
      </FormFieldset>
      <h3>Choose the train</h3>
      <FormFieldset $maxWidth="45%">
        {trains &&
          Object.keys(trains).map((train, i) => (
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
