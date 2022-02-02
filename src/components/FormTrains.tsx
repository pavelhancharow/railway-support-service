import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from 'src/models/IForm';
import { TrainsBox } from 'src/shared/FormTrains';

interface FormTrainsProps {
  value: string;
  register: UseFormRegister<IForm>;
  checked: boolean;
}

export const FormTrains: FC<FormTrainsProps> = ({
  value,
  register,
  checked,
}): JSX.Element => {
  const labelName = value[0].toUpperCase() + value.slice(1);

  return (
    <TrainsBox>
      <input
        {...register('train')}
        type="radio"
        id={value}
        value={value}
        name="train"
        defaultChecked={checked}
      />
      <label htmlFor={value}>{labelName}</label>
    </TrainsBox>
  );
};
