import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from 'src/routes';

export const PrivateRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      {privateRoutes.map((route) => {
        const { path, element } = route;
        return <Route path={path} element={element} key={path} />;
      })}
    </Routes>
  );
};
