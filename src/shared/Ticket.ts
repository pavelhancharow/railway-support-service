import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { lightGrey, light } = styleVars;

export const TicketBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 30px 10%;
  background-color: ${lightGrey};

  h2 {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    justify-self: center;
    padding: 10px 0;
  }
`;

export const TicketTable = styled.div`
  grid-column: 1 / 6;
`;

export const TicketBody = styled.div`
  grid-column: 1 / 6;
  margin-bottom: 15px;
  padding: 10px 0 20px;
  background-color: ${light};
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 40%);
`;
