import { FC, ReactNode } from 'react';
import { MyBtn } from 'src/components/UI/MyButton/MyButtonStyle';

type BtnType = 'button' | 'submit' | 'reset' | undefined;

interface MyButtonProps {
  children?: ReactNode;
  type?: BtnType;
  handleClick?: () => void;
}

export const MyButton: FC<MyButtonProps> = ({
  children,
  type = 'button',
  handleClick,
}): JSX.Element => {
  return (
    <MyBtn type={type} onClick={handleClick}>
      {children}
    </MyBtn>
  );
};
