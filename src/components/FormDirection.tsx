import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IForm } from 'src/models/IForm';
import { DirectionBox } from 'src/shared/MainFormDirection';

interface FormDirectionProps {
  direction: string;
  registerDir: 'from' | 'to';
  register: UseFormRegister<IForm>;
  errors: {
    from?: FieldError | undefined;
    to?: FieldError | undefined;
  };
}

export const FormDirection: FC<FormDirectionProps> = ({
  direction,
  registerDir,
  register,
  errors,
}) => {
  return (
    <DirectionBox>
      <label htmlFor={direction}>{direction}</label>
      <input
        type="text"
        id={direction}
        placeholder="Train station"
        {...register(registerDir, { required: true })}
      />
      {errors[`${registerDir}`] && <span>This field is required</span>}
    </DirectionBox>
  );
};
