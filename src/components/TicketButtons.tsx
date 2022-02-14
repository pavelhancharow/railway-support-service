import { FC } from 'react';
import { TicketButtonsBox } from 'src/shared/TicketButtons';
import { MyButton } from './UI/MyButton';
import chevron from '../assets/svg/chevron.svg';
import { useAppDispatch } from 'src/hooks/redux';
import { toHomePage } from 'src/store/actionCreators/RailwayCreator';

export const TicketButtons: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <TicketButtonsBox>
      <MyButton>
        <img src={chevron} alt="chevron" />
        Details
      </MyButton>
      <MyButton handleClick={() => dispatch(toHomePage())}>
        Back To Home
      </MyButton>
      <MyButton>Reserve</MyButton>
    </TicketButtonsBox>
  );
};
