import { FC } from 'react';
import { AdminBox } from 'src/pages/Admin/AdminStyles';
import {
  AdminRoute,
  AdminRoutesList,
  AdminStation,
} from 'src/components/Admin';

export const Admin: FC = (): JSX.Element => {
  return (
    <AdminBox>
      <h2>Admin Field</h2>
      <AdminRoutesList />
      <AdminStation />
      <AdminRoute />
    </AdminBox>
  );
};
