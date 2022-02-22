import { FC } from 'react';
import { TicketButtonsBox } from './TicketButtonsStyles';
import { MyButton } from '../../UI/MyButton/MyButton';
import chevron from 'src/assets/svg/chevron.svg';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import {
  showDetails,
  toHomePage,
} from 'src/store/reducers/RailwaySlice/actionCreator';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line max-len
import { toggleModalRegistration } from 'src/store/reducers/PageSlice/actionCreator';

export const TicketButtons: FC = (): JSX.Element => {
  const { isDetails } = useAppSelector((state) => state.railwayReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const backHome = async () => {
    await dispatch(toHomePage());
    navigate('/');
  };

  const handleTriggerModalRegistration = () =>
    dispatch(toggleModalRegistration(true));

  return (
    <TicketButtonsBox>
      <MyButton handleClick={() => dispatch(showDetails(!isDetails))}>
        <img className={isDetails ? 'show' : ''} src={chevron} alt="chevron" />
        Details
      </MyButton>
      <MyButton handleClick={backHome}>Back To Home</MyButton>
      <MyButton handleClick={handleTriggerModalRegistration}>Reserve</MyButton>
    </TicketButtonsBox>
  );
};
