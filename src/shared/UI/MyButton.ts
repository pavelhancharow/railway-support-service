import styled from 'styled-components';
import { styleVars } from '../../styles/styleVars';

const { primary, light } = styleVars;

export const MyBtn = styled.button`
  margin: 10px 10px 0 auto;
  max-width: 145px;
  padding: 6px 28px 5px;
  background-color: ${primary};
  color: ${light};
`;
