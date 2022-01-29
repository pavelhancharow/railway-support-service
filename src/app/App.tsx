import { FC } from 'react';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';

export const App: FC = (): JSX.Element => (
  <>
    <Header />
    <Main />
  </>
);
