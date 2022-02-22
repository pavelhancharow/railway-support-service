import styled from 'styled-components';
import wallpaper from 'src/assets/img/ice-wallpaper.jpeg';
import { styleVars } from '../../styles/styleVars';

const { grey, lightGrey } = styleVars;

interface IInfoBox {
  $shadow?: boolean;
}

export const InfoBox = styled.div<IInfoBox>`
  position: relative;
  display: flex;
  width: 100%;
  box-shadow: ${({ $shadow }) => $shadow && '0px 4px 8px rgb(44 101 77 / 8%)'};
`;

export const InfoBild = styled.div`
  width: 70%;
  height: 300px;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${grey};
`;

export const InfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  padding: 0 1rem;
  background-color: ${lightGrey};
`;

export const InfoQuote = styled.q`
  margin-bottom: 30px;
  font-size: 1.3rem;
  font-style: italic;
`;

export const InfoAuthor = styled.b`
  align-self: flex-end;
  font-size: 1.3rem;
`;
