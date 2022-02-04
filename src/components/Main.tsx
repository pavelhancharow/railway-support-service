import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { MainBox } from 'src/shared/Main';
import { Form } from './Form';
import { MainInfo } from './MainInfo';
import { Ticket } from './Ticket';

export const Main: FC = (): JSX.Element => {
  const { formTicket } = useAppSelector(({ railwayReducer }) => railwayReducer);

  return (
    <MainBox>
      <MainInfo />
      {formTicket ? <Ticket /> : <Form />}
    </MainBox>
  );
};
