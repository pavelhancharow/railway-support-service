import { FC } from 'react';
import { TicketBox, TicketBody, TicketTable } from './TicketStyles';
import { useAppSelector } from 'src/hooks/redux';
import {
  TicketButtons,
  TicketDetails,
  TicketHead,
  TicketInfo,
  TicketRegistration,
} from 'src/components/Ticket';

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
      <TicketRegistration />
    </TicketBox>
  );
};
