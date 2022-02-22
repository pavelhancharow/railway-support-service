import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyButton } from 'src/components/UI/MyButton/MyButton';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { TripListBox } from 'src/pages/TripList/TripListStyles';
import { toHomePage } from 'src/store/reducers/RailwaySlice/actionCreator';

export const Success: FC = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const result = localStorage.getItem(user);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userTrips = JSON.parse(result!);
  const { login, email } = userTrips;

  const backHome = async () => {
    await dispatch(toHomePage());
    navigate('/');
  };

  return (
    <TripListBox>
      <h2>You bought ticket successfully</h2>
      <h3>
        {login}, your ticket have to come on your email: {email}
      </h3>
      <MyButton handleClick={backHome}>Back To Home</MyButton>
    </TripListBox>
  );
};
