import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { MainBox } from 'src/shared/Main';
import { Form } from './Form';
import { Loader } from './Loader';
import { MainInfo } from './MainInfo';
import { Ticket } from './Ticket';
import { MyError } from './UI/MyError';

export const Main: FC = (): JSX.Element => {
  const { railwayReducer, pageReducer } = useAppSelector((state) => state);
  const { isLoading, error, formTicket } = railwayReducer;
  const { adminError, adminIsLoading } = pageReducer;

  const content = () => {
    if (isLoading || adminIsLoading) return <Loader />;

    if (error.length || adminError.length) {
      return <MyError>${error || adminError}</MyError>;
    }

    return formTicket ? <Ticket /> : <Form />;
  };

  return (
    <MainBox>
      <MainInfo />
      {content()}
    </MainBox>
  );
};
