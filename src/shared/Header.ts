import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import { styleVars } from '../styles/styleVars';

const { body, dark, primary } = styleVars;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: ${primary};
`;

export const HeaderImg = styled.img.attrs({
  src: logo,
  alt: 'logo',
})`
  width: 64px;
  height: 64px;
  background-color: ${body};
  box-shadow: 0px 5px 10px 30px ${body};
`;

export const HeaderBtn = styled.button`
  font-size: 1.3rem;
  color: ${body};
  transition: color 0.3s;

  &:hover {
    color: ${dark};
  }
`;
