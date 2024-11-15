import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { HeaderBox, HeaderBtns, HeaderImg } from './HeaderStyles';
import { toHomePage } from 'src/store/reducers/RailwaySlice/actionCreator';
import {
  logOut,
  toggleModalLogin,
} from 'src/store/reducers/PageSlice/actionCreator';
import { MyButton } from '../UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

export const Header: FC = (): JSX.Element => {
  const { isAdmin } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleTriggerModalLogin = async () => {
    if (isAdmin) {
      await dispatch(logOut());
      navigate('/');
    } else {
      await dispatch(toggleModalLogin(!isAdmin));
    }
  };

  const backHome = async () => {
    await dispatch(toHomePage());
    navigate('/');
  };

  return (
    <HeaderBox>
      <picture onClick={backHome}>
        <HeaderImg />
      </picture>
      <HeaderBtns>
        {!isAdmin && (
          <MyButton handleClick={() => navigate('/trips')}>Trips</MyButton>
        )}
        <MyButton handleClick={handleTriggerModalLogin}>
          {isAdmin ? 'LogOut' : 'LogIn'}
        </MyButton>
      </HeaderBtns>
    </HeaderBox>
  );
};
