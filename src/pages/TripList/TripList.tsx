import { FC, SyntheticEvent, useState } from 'react';
import { TripHead, TripItem } from 'src/components/TripList';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IUser } from 'src/models/IForms';
import { TripListBox } from 'src/pages/TripList/TripListStyles';
import { getUserFromLocalStorage } from 'src/services/getUserFromLocalStorage';
import { setUser } from 'src/store/reducers/PageSlice/actionCreator';

export const TripList: FC = (): JSX.Element => {
  const [notFound, setNotFound] = useState(false);
  const { user } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const result = getUserFromLocalStorage(user);

  if (!result) {
    return (
      <TripListBox>
        <h2>You Have Not Any Trips</h2>
        <input
          type="email"
          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
            setNotFound(true);
            dispatch(setUser(e.currentTarget.value));
          }}
          placeholder="Enter your email"
        />
        {notFound && <span>Email not found</span>}
      </TripListBox>
    );
  }

  const userTrips: IUser = JSON.parse(result);

  return (
    <TripListBox>
      <h2>Your Trips {userTrips.login}</h2>
      <TripHead />
      <TripItem user={userTrips} />
    </TripListBox>
  );
};
