import { FC } from 'react';
import MyModal from './UI/MyModal';

interface ISuccessModal {
  trigger: boolean;
  handleSuccess: () => void;
}

export const SuccessModal: FC<ISuccessModal> = ({
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
