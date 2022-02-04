import { FC } from 'react';
import { TicketBox, TicketBody, TicketTable } from 'src/shared/Ticket';
import { TicketButtons } from './TicketButtons';
import { TicketDetails } from './TicketDetails';
import { TicketInfo } from './TicketInfo';
import { TicketHead } from './TicketHead';

export const Ticket: FC = (): JSX.Element => {
  return (
    <TicketBox>
      <h2>Ticket</h2>
      <TicketTable>
        <TicketHead />
        <TicketBody>
          <TicketInfo />
          <TicketButtons />
          <TicketDetails />
        </TicketBody>
      </TicketTable>
    </TicketBox>
  );
};
