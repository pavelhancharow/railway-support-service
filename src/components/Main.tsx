import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { MainBox } from 'src/shared/Main';
import { Loader } from './Loader';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { MyError } from './UI/MyError';

export const Main: FC = (): JSX.Element => {
  const { railwayReducer, pageReducer } = useAppSelector((state) => state);
  const { isLoading, error } = railwayReducer;
  const { adminError, adminIsLoading, isAdmin } = pageReducer;

  const getContent = () => {
    if (isLoading || adminIsLoading) return <Loader />;

    if (error.length || adminError.length) {
      return <MyError>${error || adminError}</MyError>;
    }

    return isAdmin ? <PrivateRouter /> : <PublicRouter />;
  };

  return <MainBox>{getContent()}</MainBox>;
};
