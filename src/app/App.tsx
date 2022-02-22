import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'src/components/Header/Header';
import { Info } from 'src/components/Info/Info';
import { Login } from 'src/components/Login/Login';
import { Main } from 'src/components/Main/Main';
import { useAppDispatch } from 'src/hooks/redux';
import { fetchRailway } from 'src/store/reducers/RailwaySlice/actionCreator';
import { getAdmin } from 'src/store/reducers/PageSlice/actionCreator';

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
    </BrowserRouter>
  );
};
