import { FC } from 'react';
import { TicketButtonsBox } from 'src/shared/TicketButtons';
import { MyButton } from './UI/MyButton';
import chevron from '../assets/svg/chevron.svg';

export const TicketButtons: FC = (): JSX.Element => {
  return (
    <TicketButtonsBox>
      <MyButton>
        <img src={chevron} alt="chevron" />
        Details
      </MyButton>
      <MyButton>Reserve</MyButton>
    </TicketButtonsBox>
  );
};
