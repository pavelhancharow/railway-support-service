import { FC, ReactNode, SyntheticEvent } from 'react';
import { MyModalBox } from 'src/components/UI/MyModal/MyModalStyle';
import close from 'src/assets/svg/x-lg.svg';

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
      <div onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        <picture onClick={handleClick}>
          <img src={close} alt="close" />
        </picture>
        {children}
      </div>
    </MyModalBox>
  );
};

export default MyModal;
