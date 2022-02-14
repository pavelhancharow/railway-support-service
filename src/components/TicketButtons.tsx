import { FC, useState } from 'react';
import { TicketButtonsBox } from 'src/shared/TicketButtons';
import { MyButton } from './UI/MyButton';
import chevron from '../assets/svg/chevron.svg';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import {
  showDetails,
  toHomePage,
} from 'src/store/actionCreators/RailwayCreator';

export const TicketButtons: FC = (): JSX.Element => {
  const { isDetails } = useAppSelector((state) => state.railwayReducer);
  const dispatch = useAppDispatch();

  return (
    <TicketButtonsBox>
      <MyButton handleClick={() => dispatch(showDetails(!isDetails))}>
        <img className={isDetails ? 'show' : ''} src={chevron} alt="chevron" />
        Details
      </MyButton>
      <MyButton handleClick={() => dispatch(toHomePage())}>
        Back To Home
      </MyButton>
      <MyButton>Reserve</MyButton>
    </TicketButtonsBox>
  );
};
