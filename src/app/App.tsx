import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/components/Header';
import { Info } from 'src/components/Info';
import { Login } from 'src/components/Login';
import { Main } from 'src/components/Main';
import { RouteList } from 'src/components/RouteList';
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
    <BrowserRouter>
      <Header />
      <Info />
      <Main />
      <Login />
      <RouteList />
    </BrowserRouter>
  );
};
