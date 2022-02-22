import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { darkGrey, light, primary } = styleVars;

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    align-self: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  label {
    position: relative;
    padding-bottom: 20px;

    input {
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
      position: absolute;
      bottom: 0;
      left: 5px;
      color: ${primary};
    }
  }

  b {
    color: ${primary};
  }

  button {
    margin: 10px auto 0 0;
  }
`;
