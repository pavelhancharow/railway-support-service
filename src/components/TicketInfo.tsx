import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { TicketInfoBox } from 'src/shared/TicketInfo';

export const TicketInfo: FC = (): JSX.Element => {
  const { from, to, trainType, train, price, duration } = useAppSelector(
    (state) => state.railwayReducer.ticket
  );

  return (
    <TicketInfoBox>
      <li>{from}</li>
      <li>{to}</li>
      <li>{train}</li>
      <li>{duration}</li>
      <li>{trainType}</li>
      <li>{price} EUR</li>
    </TicketInfoBox>
  );
};
