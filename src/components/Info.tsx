import { FC } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import {
  InfoBox,
  InfoBild,
  InfoDescription,
  InfoQuote,
  InfoAuthor,
} from 'src/shared/Info';

export const Info: FC = (): JSX.Element => {
  const { isTicketCreated } = useAppSelector(
    ({ railwayReducer }) => railwayReducer
  );

  return (
    <InfoBox $shadow={isTicketCreated || false}>
      <InfoBild />
      <InfoDescription>
        <InfoQuote>
          Trains are wonderful.... To travel by train is to see nature and human
          beings, towns and churches, and rivers, in fact, to see life.
        </InfoQuote>
        <InfoAuthor>- Agatha Christie.</InfoAuthor>
      </InfoDescription>
    </InfoBox>
  );
};
