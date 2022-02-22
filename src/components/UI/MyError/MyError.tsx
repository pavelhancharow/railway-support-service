import { FC, ReactNode } from 'react';
import { MyErrorBox } from './MyErrorStyle';

interface MyErrorProps {
  children: ReactNode;
}

export const MyError: FC<MyErrorProps> = ({ children }) => {
  return <MyErrorBox>{children}</MyErrorBox>;
};
