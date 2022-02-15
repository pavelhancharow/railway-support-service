import { Navigate } from 'react-router-dom';
import { Ticket } from 'src/components/Ticket';
import { Form } from 'src/pages/Form';

export const privateRoutes = [
  { path: 'admin', element: <Form /> },
  { path: 'ticket', element: <Ticket /> },
  { path: '*', element: <Navigate to="/admin" /> },
];

export const publicRoutes = [
  { path: '/', element: <Form /> },
  { path: 'ticket', element: <Ticket /> },
  { path: '*', element: <Navigate to="/" /> },
];
