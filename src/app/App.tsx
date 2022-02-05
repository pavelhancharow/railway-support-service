import { FC, useEffect } from 'react';
import { Header } from 'src/components/Header';
import { Login } from 'src/components/Login';
import { Main } from 'src/components/Main';
import { Route } from 'src/components/Route';
import { useAppDispatch } from 'src/hooks/redux';
import { fetchRailway } from 'src/store/actionCreators/RailwayCreator';
import { getAdmin } from 'src/store/actionCreators/PageCreator';

export const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchRailway());
      await dispatch(getAdmin());
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />
      <Main />
      <Login />
      <Route />
    </>
  );
};
