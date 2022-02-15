import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';
import { TicketBox, TicketBody } from './Ticket';

const { darkGrey, light } = styleVars;

export const TripListBox = styled(TicketBox)`
  h3 {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
  }

  input {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    width: 100%;
    min-height: 30px;
    padding: 0 5px;
    border: 1px solid ${darkGrey};
    background-color: ${light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    cursor: auto;
  }

  span {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
`;

export const TripListBody = styled(TicketBody)`
  grid-column: 1 / 6;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 30px);
  margin-bottom: 15px;

  li {
    display: flex;
    align-items: center;

    &:nth-child(1),
    &:nth-child(2) {
      grid-column: 1 / 2;
      padding-left: 20px;
    }

    &:nth-child(2) {
      grid-row: 2 / 3;
    }

    &:not(:first-of-type, :nth-child(2)) {
      justify-content: center;
    }

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      grid-row: 1 / 3;
    }
  }
`;
