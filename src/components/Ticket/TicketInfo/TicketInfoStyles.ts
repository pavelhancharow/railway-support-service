import styled from 'styled-components';

export const TicketInfoBox = styled.ul`
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
