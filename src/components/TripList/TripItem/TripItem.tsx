import { FC } from 'react';
import { IUserForm } from 'src/models/IForms';
import { TripItemBox, TripItemWrap } from './styles';
import { v4 as uuidv4 } from 'uuid';

interface ITripItem {
  user: IUserForm;
}

export const TripItem: FC<ITripItem> = ({ user }): JSX.Element => {
  return (
    <>
      {user.trips.map((trip) => {
        const {
          from,
          to,
          train,
          price,
          distance,
          duration,
          trainType,
          stations,
        } = trip;

        return (
          <TripItemBox key={uuidv4()}>
            <li>
              <TripItemWrap>
                <li>{from}</li>
                <li>{to}</li>
              </TripItemWrap>
            </li>
            <li>{train}</li>
            <li>{trainType}</li>
            <li>
              <TripItemWrap>
                {stations
                  .filter((_, i, arr) => i !== 0 && i !== arr.length - 1)
                  .map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
              </TripItemWrap>
            </li>
            <li>{distance}</li>
            <li>{duration}</li>
            <li>{price} EUR</li>
          </TripItemBox>
        );
      })}
    </>
  );
};
