import { FC } from 'react';
import { DirectionBox } from 'src/shared/FormDirection';
interface IAdminRouteTrain {
  handleTrain: (text: string) => void;
}
export const AdminRouteTrain: FC<IAdminRouteTrain> = ({
  handleTrain,
}): JSX.Element => {
  return (
    <DirectionBox>
      <label htmlFor="train">train</label>
      <input
        type="text"
        placeholder="Train Name"
        id="train"
        onChange={(e) => handleTrain(e.target.value)}
      />
    </DirectionBox>
  );
};
