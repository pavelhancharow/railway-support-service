import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useAppSelector } from 'src/hooks/redux';
import { IForm } from 'src/models/IForms';
import { TrainsBox } from 'src/components/Form/FormTrains/FormTrainsStyles';

interface FormTrainsProps {
  value: string;
  register: UseFormRegister<IForm>;
  checked: boolean;
  handleChange: (id: number) => void;
}

export const FormTrains: FC<FormTrainsProps> = ({
  value,
  register,
  checked,
  handleChange,
}): JSX.Element => {
  const { trainTypes } = useAppSelector(
    (state) => state.railwayReducer.railway
  );
  const labelName = value[0].toUpperCase() + value.slice(1);

  const findTrainTypeId = (value: string) => {
    const result = trainTypes.find((train) => train.train_type === value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    handleChange(result!.train_type_id);
  };

  return (
    <TrainsBox>
      <input
        {...register('train')}
        type="radio"
        id={value}
        value={value}
        name="train"
        defaultChecked={checked}
        onChange={(e) => findTrainTypeId(e.target.value)}
      />
      <label htmlFor={value}>{labelName}</label>
    </TrainsBox>
  );
};
