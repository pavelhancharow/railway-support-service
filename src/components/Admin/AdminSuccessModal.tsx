import { FC } from 'react';
import MyModal from '../UI/MyModal/MyModal';

interface ISuccessModal {
  trigger: boolean;
  handleSuccess: () => void;
}

export const AdminSuccessModal: FC<ISuccessModal> = ({
  children,
  trigger,
  handleSuccess,
}): JSX.Element => {
  return (
    <MyModal $display={trigger} handleClick={handleSuccess}>
      {children}
    </MyModal>
  );
};
