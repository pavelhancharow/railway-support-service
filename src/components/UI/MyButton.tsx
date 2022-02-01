import { FC, ReactNode } from 'react';
import { MyBtn } from 'src/shared/UI/MyButton';

type BtnType = 'button' | 'submit' | 'reset' | undefined;

interface MyButtonProps {
  children?: ReactNode;
  type?: BtnType;
}

export const MyButton: FC<MyButtonProps> = ({
  children,
  type = 'button',
  ...props
}): JSX.Element => {
  return <MyBtn type={type}>{children}</MyBtn>;
};
