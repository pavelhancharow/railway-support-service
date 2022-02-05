import { FC } from 'react';
import { PulseLoader } from 'react-spinners';
import { styleVars } from 'src/styles/styleVars';
import { MyLoader } from './UI/MyLoader';

const { primary } = styleVars;

export const Loader: FC = (): JSX.Element => {
  return (
    <MyLoader>
      <PulseLoader size={25} color={primary} />
    </MyLoader>
  );
};
