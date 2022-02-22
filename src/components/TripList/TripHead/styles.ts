import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { light, ticketHead } = styleVars;

export const TripHeadBox = styled.ul`
  grid-column: 1 / 8;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 30px);
  margin-bottom: 15px;

  li {
    width: 100%;
    background-color: ${ticketHead};
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-of-type {
      grid-column: 1 /2;
    }

    &:not(:last-of-type) {
      border-right: 2px solid ${light};
    }
  }
`;
