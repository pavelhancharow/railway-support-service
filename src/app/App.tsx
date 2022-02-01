import { FC, useEffect } from 'react';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { idb } from 'src/services/idb';
import { routesDB } from 'src/db/routesDB';

export const App: FC = (): JSX.Element => {
  useEffect(() => {
    idb.initTable(routesDB);
  }, []);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
