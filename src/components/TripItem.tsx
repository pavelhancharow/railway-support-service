import { FC } from 'react';
import { IUser } from 'src/models/IForms';
import { TripListBody } from 'src/shared/TripList';
import { v4 as uuidv4 } from 'uuid';

interface ITripItem {
  user: IUser;
}

export const TripItem: FC<ITripItem> = ({ user }): JSX.Element => {
  return (
    <>
      {user.trips.map((trip) => {
        const { from, to, train, price, distance, duration } = trip;

        return (
          <TripListBody key={uuidv4()}>
            <li>{from}</li>
            <li>{to}</li>
            <li>{distance} km</li>
            <li>{duration}</li>
            <li>{train}</li>
            <li>{price} EUR</li>
          </TripListBody>
        );
      })}
    </>
  );
};
