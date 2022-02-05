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

export const Header: FC = (): JSX.Element => {
  const { isAdmin } = useAppSelector((state) => state.pageReducer);
  const dispatch = useAppDispatch();

  const handleTriggerModalRoute = () => dispatch(toggleModalRoute(true));
  const handleTriggerModalLogin = () => {
    return isAdmin ? dispatch(logOut()) : dispatch(toggleModalLogin(!isAdmin));
  };

  return (
    <HeaderBox>
      <picture onClick={() => dispatch(toHomePage())}>
        <HeaderImg />
      </picture>
      <HeaderBtns>
        {isAdmin && (
          <MyButton handleClick={handleTriggerModalRoute}>Add Route</MyButton>
        )}
        <MyButton handleClick={handleTriggerModalLogin}>
          {isAdmin ? 'LogOut' : 'LogIn'}
        </MyButton>
      </HeaderBtns>
    </HeaderBox>
  );
};
