import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { darkGrey, light, lightGrey } = styleVars;

export const TripListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 30px 2%;
  background-color: ${lightGrey};

  h2 {
    grid-column: 1 / 8;
    grid-row: 1 / 2;
    justify-self: center;
    padding: 10px 0;
  }

  h3 {
    grid-column: 1 / 8;
    grid-row: 2 / 3;
  }

  input {
    grid-column: 3 / 6;
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
    grid-column: 3 / 6;
    grid-row: 3 / 4;
  }
`;
