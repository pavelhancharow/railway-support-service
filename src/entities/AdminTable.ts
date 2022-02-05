import { IAdminType } from 'src/models/IRailway';
import { IRailwayDataBase, RailwayDataBase } from '../db/RailwayDataBase';

class AdminTable
  extends RailwayDataBase
  implements IRailwayDataBase<IAdminType>
{
  async initTable(db: IAdminType) {
    try {
      if ((await this.table('admin').toArray()).length) return;

      await this.admin.add({ administrator: db });

      console.log('Admin db is created');
    } catch (error) {
      throw new Error(`Failed init table directions: ${error}`);
    }
  }

  async put(value: boolean) {
    await this.admin.put({ id: 1, administrator: value });
  }

  async get() {
    return await this.admin.get(1);
  }
}

export const adminTable = new AdminTable('RailwayDB');
