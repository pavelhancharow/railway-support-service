import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { darkGrey, formBackground } = styleVars;

export const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 780px;
  min-height: 113px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 30%);
  margin-top: -1.5rem;

  border: 2px solid ${darkGrey};
  background: ${formBackground};
  padding: 10px 26px;
  width: 100%;
  z-index: 10;

  h3 {
    margin-bottom: 10px;
  }
`;

interface IFieldset {
  $maxWidth?: string;
}

export const FormFieldset = styled.fieldset<IFieldset>`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  max-width: ${(props) => props.$maxWidth || 'auto'};
  cursor: auto;
`;
