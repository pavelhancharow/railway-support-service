import { FC } from 'react';
import { TicketHeadBox } from 'src/shared/TicketHead';

export const TicketHead: FC = (): JSX.Element => {
  return (
    <TicketHeadBox>
      <li>Train Station</li>
      <li>Distance</li>
      <li>Type Of Train</li>
      <li>Price</li>
    </TicketHeadBox>
  );
};
