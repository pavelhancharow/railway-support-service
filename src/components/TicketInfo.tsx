import { FC } from 'react';
import { useFindRoute } from 'src/hooks/useFindRoute';
import { TicketInfoBox } from 'src/shared/TicketInfo';

export const TicketInfo: FC = (): JSX.Element => {
  const ticket = useFindRoute();

  if (!ticket) return <h1>Route not found</h1>;

  const { from, to, distance, price, train } = ticket;

  return (
    <TicketInfoBox>
      <li>{from}</li>
      <li>{to}</li>
      <li>{distance} km</li>
      <li>{train}</li>
      <li>{price} EUR</li>
    </TicketInfoBox>
  );
};
