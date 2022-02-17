import { FC } from 'react';
import { AdminRoute } from 'src/components/AdminRoute';
import { AdminRoutesList } from 'src/components/AdminRoutesList';
import { AdminStation } from 'src/components/AdminStation';
import { AdminBox } from 'src/shared/Admin';

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
