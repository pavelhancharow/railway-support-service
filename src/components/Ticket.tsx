import { FC } from 'react';
import { TicketBox, TicketBody, TicketTable } from 'src/shared/Ticket';
import { TicketButtons } from './TicketButtons';
import { TicketDetails } from './TicketDetails';
import { TicketInfo } from './TicketInfo';
import { TicketHead } from './TicketHead';
import { useAppSelector } from 'src/hooks/redux';

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
    </TicketBox>
  );
};
