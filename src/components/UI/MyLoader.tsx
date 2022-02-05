import { FC, ReactNode } from 'react';
import { MyLoaderBox } from 'src/shared/UI/MyLoader';

interface MyLoaderProps {
  children: ReactNode;
}

export const MyLoader: FC<MyLoaderProps> = ({ children }): JSX.Element => {
  return <MyLoaderBox>{children}</MyLoaderBox>;
};
