import { FC } from 'react';
import { TicketBox, TicketBody, TicketTable } from 'src/shared/Ticket';
import { TicketButtons } from '../components/TicketButtons';
import { TicketDetails } from '../components/TicketDetails';
import { TicketInfo } from '../components/TicketInfo';
import { TicketHead } from '../components/TicketHead';
import { useAppSelector } from 'src/hooks/redux';
import { Registration } from '../components/Registration';

export const Ticket: FC = (): JSX.Element => {
  const { isDetails } = useAppSelector((state) => state.railwayReducer);
  return (
    <TicketBox>
      <h2>Ticket</h2>
      <TicketTable>
        <TicketHead />
        <TicketBody>
          <TicketInfo />
          <TicketButtons />
          {isDetails && <TicketDetails />}
        </TicketBody>
      </TicketTable>
      <Registration />
    </TicketBox>
  );
};
