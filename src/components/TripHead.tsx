import { FC } from 'react';
import { TripHeadBox } from 'src/shared/TripHead';

export const TripHead: FC = (): JSX.Element => {
  return (
    <TripHeadBox>
      <li>Train Station</li>
      <li>Train Route</li>
      <li>Type Of Train</li>
      <li>Stations</li>
      <li>Distance</li>
      <li>Duration</li>
      <li>Price</li>
    </TripHeadBox>
  );
};
