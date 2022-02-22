import { FC, useContext } from 'react';
import { TicketBox, TicketBody, TicketTable } from './TicketStyles';
import {
  TicketButtons,
  TicketDetails,
  TicketHead,
  TicketInfo,
  TicketRegistration,
} from 'src/components/Ticket';
import { TicketContext } from 'src/context/TicketContext';

export const Ticket: FC = (): JSX.Element => {
  const { isDetails } = useContext(TicketContext);

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
      <TicketRegistration />
    </TicketBox>
  );
};
