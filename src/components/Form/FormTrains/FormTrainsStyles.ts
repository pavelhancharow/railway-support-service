import styled from 'styled-components';
import { styleVars } from '../../../styles/styleVars';

const { light, darkGrey, red } = styleVars;

export const TrainsBox = styled.div`
  label {
    font-size: 0.875rem;
    position: relative;
    padding-left: 28px;
    display: flex;
    align-items: center;
    user-select: none;
    box-sizing: border-box;
    padding-top: 1px;
    margin: 4px 0 16px;
    padding-right: 10px;
  }

  input[type='radio'] {
    display: none;
    transition: 0.3s;
  }

  input[type='radio'] + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background: ${light};
    box-shadow: inset 1px 1px 3px rgb(0 0 0 / 15%);
    border: 1px solid ${darkGrey};
  }

  input[type='radio']:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${red};
  }

  input[type='radio']:checked + label {
    font-weight: bold;
  }
`;
