import { FC } from 'react';
import { FormBox, FormFieldset } from 'src/shared/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MyButton } from './UI/MyButton';
import { FormDirection } from './FormDirection';
import { IForm } from 'src/models/IForm';

export const Form: FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (formData) => {
    console.log(formData);
  };

  const directions = ['from', 'to'];

  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <h3>Travel Information</h3>
      <FormFieldset>
        {directions.map((direction) => (
          <FormDirection
            key={direction}
            direction={direction}
            registerDir={direction === 'from' ? 'from' : 'to'}
            errors={errors}
            register={register}
          />
        ))}
      </FormFieldset>
      <MyButton type="submit">Search</MyButton>
    </FormBox>
  );
};
