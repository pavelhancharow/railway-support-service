import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { TicketDetailsInfoBox } from 'src/shared/TicketDetailsInfo';

export const TicketDetailsInfo: FC = (): JSX.Element => {
  const { train, trainType, from, to, stations, distance, duration, price } =
    useAppSelector((state) => state.railwayReducer.ticket);

  return (
    <TicketDetailsInfoBox>
      <li>
        <b>Train Route:</b> {train}
      </li>
      <li>
        <b>Type Of Train:</b> {trainType}
      </li>
      <li>
        <b>Point of departure:</b> {from}
      </li>
      <li>
        <b>Destination:</b> {to}
      </li>
      <li>
        <b>Stations:</b>{' '}
        {
          <TicketDetailsInfoBox>
            {stations
              .filter((_, i, arr) => i !== 0 && i !== arr.length - 1)
              .map((item) => (
                <li key={item}>- {item}</li>
              ))}
          </TicketDetailsInfoBox>
        }
      </li>
      <li>
        <b>Distance:</b> {distance}
      </li>
      <li>
        <b>Duration:</b> {duration}
      </li>
      <li>
        <b>Price:</b> {price} EUR
      </li>
    </TicketDetailsInfoBox>
  );
};
