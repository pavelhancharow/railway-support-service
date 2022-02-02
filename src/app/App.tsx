import { FC, useEffect } from 'react';
import { Header } from 'src/components/Header';
import { Main } from 'src/components/Main';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchRailway } from 'src/store/reducers/ActionCreator';

export const App: FC = (): JSX.Element => {
  const { isLoading, error } = useAppSelector((state) => state.railwayReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRailway());
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
