import { Navigate } from 'react-router-dom';
import { Ticket } from 'src/pages/Ticket/Ticket';
import { TripList } from 'src/pages/TripList/TripList';
import { Form } from 'src/pages/Form/Form';
import { Success } from 'src/pages/Success/Success';
import { Admin } from 'src/pages/Admin/Admin';

export const privateRoutes = [
  { path: 'admin', element: <Admin /> },
  { path: '*', element: <Navigate to="/admin" /> },
];

export const publicRoutes = [
  { path: '/', element: <Form /> },
  { path: 'ticket', element: <Ticket /> },
  { path: 'trips', element: <TripList /> },
  { path: 'success', element: <Success /> },
  { path: '*', element: <Navigate to="/" /> },
];
