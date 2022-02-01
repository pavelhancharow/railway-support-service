import { FC, useEffect } from 'react';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchRoutes } from 'src/store/reducers/ActionCreator';

export const App: FC = (): JSX.Element => {
  const { isLoading, error } = useAppSelector((state) => state.routeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRoutes());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return <h1>Loading...</h1>;
  if (error.length) return <h1>${error}</h1>;

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
