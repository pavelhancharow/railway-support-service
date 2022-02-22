import { FC, ReactNode } from 'react';
import { MyLoaderBox } from './MyLoaderStyle';

interface MyLoaderProps {
  children: ReactNode;
}

export const MyLoader: FC<MyLoaderProps> = ({ children }): JSX.Element => {
  return <MyLoaderBox>{children}</MyLoaderBox>;
};
