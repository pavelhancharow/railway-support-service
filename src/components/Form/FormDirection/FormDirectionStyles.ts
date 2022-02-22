import styled from 'styled-components';
import { styleVars } from '../../../styles/styleVars';

const { light, darkGrey, primary, lightGrey } = styleVars;

export const DirectionBox = styled.div`
  width: calc(50% - 73px);
  padding-bottom: 20px;
  position: relative;

  label {
    position: absolute;
    top: 6px;
    width: auto;
    padding: 0 9px 0 6px;
    font-size: 0.875em;
    font-weight: bold;
    color: ${darkGrey};
    z-index: 10;
  }

  input {
    position: relative;
    width: 100%;
    min-height: 30px;
    padding: 0 5px 0 8px;
    padding-left: 38px;
    border: 1px solid ${darkGrey};
    background-color: ${light};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 1;
    cursor: auto;
  }

  span {
    position: absolute;
    bottom: 0;
    left: 5px;
    color: ${primary};
  }

  ul {
    position: absolute;
    width: 100%;
    background-color: ${light};
    z-index: 20;
    border: 1px solid ${darkGrey};
    border-bottom: none;
    top: 29px;

    li {
      padding: 5px;
      border-bottom: 1px solid ${darkGrey};
      cursor: pointer;

      &:hover {
        background-color: ${lightGrey};
      }
    }
  }
`;
