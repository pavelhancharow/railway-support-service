import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { HeaderBox, HeaderBtn, HeaderImg } from 'src/shared/Header';
import { toHomePage } from 'src/store/reducers/ActionCreator';

export const Header: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <HeaderBox>
      <picture onClick={() => dispatch(toHomePage())}>
        <HeaderImg />
      </picture>
      <HeaderBtn>LogIn</HeaderBtn>
    </HeaderBox>
  );
};
