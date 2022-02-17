import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { TrainsBox } from 'src/shared/FormTrains';

interface IAdminRouteRange {
  value: string;
  checked: boolean;
  handleChange: (id: number) => void;
}

export const AdminRouteRange: FC<IAdminRouteRange> = ({
  value,
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
