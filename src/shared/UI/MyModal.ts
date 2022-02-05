import { styleVars } from 'src/styles/styleVars';
import styled from 'styled-components';

const { formBackground } = styleVars;

interface IMyModalBox {
  $display?: boolean;
}

export const MyModalBox = styled.div<IMyModalBox>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.33);
  z-index: ${({ $display }) => ($display ? 99 : -1)};
  visibility: ${({ $display }) => ($display ? 'visible' : 'hidden')};
  opacity: ${({ $display }) => ($display ? 1 : 0)};

  div {
    display: flex;
    flex-direction: column;
    min-width: 260px;
    padding: 25px;
    background: ${formBackground};
    transform: translate(0, -50px);
    transition: transform 0.3s ease-out;

    &.show {
      transform: none;
    }
  }
`;
