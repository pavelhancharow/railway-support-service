import { FC } from 'react';
import { TicketButtonsBox } from 'src/shared/TicketButtons';
import { MyButton } from './UI/MyButton';
import chevron from '../assets/svg/chevron.svg';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import {
  showDetails,
  toHomePage,
} from 'src/store/actionCreators/RailwayCreator';
import { useNavigate } from 'react-router-dom';
import { toggleModalRegistration } from 'src/store/actionCreators/PageCreator';

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
