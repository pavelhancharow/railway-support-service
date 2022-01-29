import { FC } from 'react';
import { HeaderBox, HeaderBtn, HeaderImg } from 'src/shared/Header';

export const Header: FC = (): JSX.Element => {
  return (
    <HeaderBox>
      <picture>
        <HeaderImg />
      </picture>
      <HeaderBtn>LogIn</HeaderBtn>
    </HeaderBox>
  );
};
