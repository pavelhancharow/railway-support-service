import styled from 'styled-components';
import { styleVars } from 'src/styles/styleVars';

const { darkGrey, light, primary } = styleVars;

export const AdminStationBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 20px;
    margin-right: 30px;
  }

  label {
    position: relative;

    input {
      width: 100%;
      min-height: 30px;
      padding: 0 5px;
      margin-bottom: 25px;
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
      bottom: -34px;
      left: 5px;
      color: ${primary};
    }
  }

  button {
    margin: 10px auto 0 0;
  }
`;
