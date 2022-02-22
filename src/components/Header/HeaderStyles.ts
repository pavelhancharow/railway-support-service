import styled from 'styled-components';
import logo from 'src/assets/img/logo.png';
import { styleVars } from '../../styles/styleVars';
import { MyBtn } from '../UI/MyButton/MyButtonStyle';

const { body, dark, primary } = styleVars;

export const HeaderBox = styled.header`
  display: flex;
  padding: 10px 15px;
  background-color: ${primary};

  picture {
    cursor: pointer;
  }
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

export const HeaderBtns = styled.div`
  display: flex;
  margin-left: auto;

  ${MyBtn} {
    margin: 0;
    margin-left: 40px;
    max-width: none;
    padding: 0;
    background-color: transparent;
    font-size: 1.3rem;
    color: ${body};
    transition: color 0.3s;

    &:hover {
      color: ${dark};
    }
  }
`;
