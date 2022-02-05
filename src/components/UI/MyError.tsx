import { FC, ReactNode } from 'react';
import { MyErrorBox } from 'src/shared/UI/MyError';

interface MyErrorProps {
  children: ReactNode;
}

export const MyError: FC<MyErrorProps> = ({ children }) => {
  return <MyErrorBox>{children}</MyErrorBox>;
};
