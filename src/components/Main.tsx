import { FC } from 'react';
import { MainBox } from 'src/shared/Main';
import { Form } from './Form';
import { MainInfo } from './MainInfo';

export const Main: FC = (): JSX.Element => {
  return (
    <MainBox>
      <MainInfo />
      <Form />
    </MainBox>
  );
};
