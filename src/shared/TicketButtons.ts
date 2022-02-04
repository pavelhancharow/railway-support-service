import styled from 'styled-components';
import { MyBtn } from './UI/MyButton';

export const TicketButtonsBox = styled.div`
  grid-column: 1 / 5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  & ${MyBtn} {
    margin: 0;

    &:first-of-type {
      color: black;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;
    }

    &:last-of-type {
      grid-column: 4 / 5;
      box-shadow: 1px 2px 2px rgb(0 0 0 / 50%);
    }
  }
`;