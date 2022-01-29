import { FC } from 'react';
import { MainBox } from 'src/shared/Main';
import { MainInfo } from './MainInfo';

export const Main: FC = (): JSX.Element => {
  return (
    <MainBox>
      <MainInfo />
    </MainBox>
  );
};
