import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { TicketInfoBox } from 'src/shared/TicketInfo';

export const TicketInfo: FC = (): JSX.Element => {
  const { from, to, distance, train, price, duration } = useAppSelector(
    (state) => state.railwayReducer.ticket
  );

  return (
    <TicketInfoBox>
      <li>{from}</li>
      <li>{to}</li>
      <li>{distance} km</li>
      <li>{duration}</li>
      <li>{train}</li>
      <li>{price} EUR</li>
    </TicketInfoBox>
  );
};
