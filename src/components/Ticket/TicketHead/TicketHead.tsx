import { FC } from 'react';
import { TicketHeadBox } from './TicketHeadStyles';

export const TicketHead: FC = (): JSX.Element => {
  return (
    <TicketHeadBox>
      <li>Train Station</li>
      <li>Train Route</li>
      <li>Duration</li>
      <li>Type Of Train</li>
      <li>Price</li>
    </TicketHeadBox>
  );
};
