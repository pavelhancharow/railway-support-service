import styled from 'styled-components';
import wallpaper from '../assets/img/ice-wallpaper.jpeg';
import { styleVars } from '../styles/styleVars';

const { grey } = styleVars;

export const MainInfoBox = styled.div`
  display: flex;
  width: 100%;
`;

export const MainInfoBild = styled.div`
  width: 70%;
  height: 300px;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${grey};
`;

export const MainInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  padding: 0 1rem;
`;

export const MainInfoQuote = styled.q`
  margin-bottom: 30px;
  font-size: 1.3rem;
  font-style: italic;
`;

export const MainInfoAuthor = styled.b`
  align-self: flex-end;
  font-size: 1.3rem;
`;
