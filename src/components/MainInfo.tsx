import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import {
  MainInfoBox,
  MainInfoBild,
  MainInfoDescription,
  MainInfoQuote,
  MainInfoAuthor,
} from 'src/shared/MainInfo';

export const MainInfo: FC = (): JSX.Element => {
  const { formTicket } = useAppSelector(({ railwayReducer }) => railwayReducer);

  return (
    <MainInfoBox $shadow={formTicket || false}>
      <MainInfoBild />
      <MainInfoDescription>
        <MainInfoQuote>
          Trains are wonderful.... To travel by train is to see nature and human
          beings, towns and churches, and rivers, in fact, to see life.
        </MainInfoQuote>
        <MainInfoAuthor>- Agatha Christie.</MainInfoAuthor>
      </MainInfoDescription>
    </MainInfoBox>
  );
};
