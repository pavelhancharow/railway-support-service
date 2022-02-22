import { IRailwayDB, RailwayDB } from '../RailwayDB';
import { IAdmin } from 'src/models/IRailway';

class AdminTable extends RailwayDB implements IRailwayDB<IAdmin> {
  async initTable(db: IAdmin) {
    try {
      if ((await this.table('admin').toArray()).length) return;

      await this.admin.add({ ...db });

      console.log('Admin db is created');
    } catch (error) {
      throw new Error(`Failed init table directions: ${error}`);
    }
  }

  async updateIsAdmin(value: boolean) {
    await this.admin.update(1, { isAdmin: value });
  }

  async get() {
    return await this.admin.get(1);
  }
}

export const adminTable = new AdminTable('RailwayDB');
