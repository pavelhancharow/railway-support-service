import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { light } = styleVars;

export const TripItemBox = styled.ul`
  grid-column: 1 / 8;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 15px;
  padding: 10px 0 20px;
  background-color: ${light};
  box-shadow: 0 1px 8px 0 rgb(0 0 0 / 40%);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TripItemWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    padding: 3px 0;
  }
`;
