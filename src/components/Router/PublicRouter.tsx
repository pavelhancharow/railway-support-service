import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import { publicRoutes } from 'src/routes';

export const PublicRouter: FC = (): JSX.Element => {
  const { isTicketCreated } = useAppSelector((state) => state.railwayReducer);

  return (
    <Routes>
      {isTicketCreated
        ? publicRoutes.map((r) => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))
        : publicRoutes
            .filter(
              (route) => route.path !== 'ticket' && route.path !== 'success'
            )
            .map((r) => (
              <Route path={r.path} element={r.element} key={r.path} />
            ))}
    </Routes>
  );
};
