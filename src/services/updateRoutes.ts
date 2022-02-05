import { routesTable } from 'src/entities/RoutesTable';
import { IAddRoute } from 'src/models/IForms';

export async function updateRoutes(data: IAddRoute) {
  await routesTable.transaction('rw', routesTable.routes, async () => {
    const isCityA = await routesTable.routes.get({ from: data.from });
    const isCityB = await routesTable.routes.get({ from: data.to });
    const distance = +data.distance;

    !isCityA
      ? await routesTable.post(data.from, data.to, distance)
      : await routesTable.put(data.from, data.to, distance);

    !isCityB
      ? await routesTable.post(data.to, data.from, distance)
      : await routesTable.put(data.to, data.from, distance);
  });
}
