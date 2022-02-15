import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { HeaderBox, HeaderBtns, HeaderImg } from 'src/shared/Header';
import { toHomePage } from 'src/store/actionCreators/RailwayCreator';
import {
  logOut,
  toggleModalLogin,
  toggleModalRoute,
} from 'src/store/actionCreators/PageCreator';
import { MyButton } from './UI/MyButton';
import { Link, useNavigate } from 'react-router-dom';

export const Header: FC = (): JSX.Element => {
  const { isAdmin } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleTriggerModalRoute = () => dispatch(toggleModalRoute(true));
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
        {isAdmin && (
          <MyButton handleClick={handleTriggerModalRoute}>Routes</MyButton>
        )}
        <MyButton handleClick={handleTriggerModalLogin}>
          {isAdmin ? 'LogOut' : 'LogIn'}
        </MyButton>
      </HeaderBtns>
    </HeaderBox>
  );
};
