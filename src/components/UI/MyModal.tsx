import { FC, ReactNode, SyntheticEvent } from 'react';
import { MyModalBox } from 'src/shared/UI/MyModal';

interface MyModalProps {
  children: ReactNode;
  $display?: boolean;
  handleClick?: () => void;
}

export const MyModal: FC<MyModalProps> = ({
  children,
  $display,
  handleClick,
}): JSX.Element => {
  return (
    <MyModalBox $display={$display} onClick={handleClick}>
      <div onClick={(e: SyntheticEvent) => e.stopPropagation()}>{children}</div>
    </MyModalBox>
  );
};

export default MyModal;
