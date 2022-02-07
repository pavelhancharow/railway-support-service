import { createAsyncThunk } from '@reduxjs/toolkit';
import { routesTable } from 'src/entities/RoutesTable';
import { IAddRoute, IForm } from 'src/models/IForms';
import { IRoute, ITrainTypes } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';
import { createTicket } from 'src/services/createTicket';
import { getRailwayDB } from 'src/services/getRailwayDB';
import { initTables } from 'src/services/initTables';
import { updateRoutes } from 'src/services/updateRoutes';

export const fetchRailway = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      await initTables();
      const res = await new Promise((resolve) => {
        setTimeout(() => resolve(getRailwayDB()), 1000);
      });
      return res;
    } catch (error) {
      return await new Promise((_, reject) => {
        setTimeout(
          () =>
            reject(
              thunkAPI.rejectWithValue(
                `Failed to load railway db: ${(error as Error).message}`
              )
            ),
          1000
        );
      });
    }
  }
);

export const addToRailway = createAsyncThunk(
  'addToRailway',
  async (data: IAddRoute, thunkAPI) => {
    try {
      await updateRoutes(data);
      const res = await new Promise((resolve) => {
        setTimeout(() => resolve(routesTable.get()), 1000);
      });
      return res;
    } catch (error) {
      return await new Promise((_, reject) => {
        setTimeout(
          () =>
            reject(
              thunkAPI.rejectWithValue(
                `Failed to add new route to railway db:
                ${(error as Error).message}`
              )
            ),
          1000
        );
      });
    }
  }
);

export const getFormData = createAsyncThunk(
  'getData',
  async (res: [IForm, IRoute[], ITrainTypes], thunkAPI) => {
    try {
      const ticket = createTicket(res);

      if (!ticket) {
        throw new Error('Route not found');
      }

      return await new Promise<ITicket>((resolve) => {
        setTimeout(() => resolve(ticket), 1000);
      });
    } catch (error) {
      return await new Promise<ITicket>((_, reject) => {
        setTimeout(
          () => reject(thunkAPI.rejectWithValue(`${(error as Error).message}`)),
          1000
        );
      });
    }
  }
);
export const setDuration = createAsyncThunk(
  'setDuration',
  async (duration: string, thunkAPI) => {
    try {
      return { duration };
    } catch (error) {
      return await new Promise((_, reject) => {
        setTimeout(
          () => reject(thunkAPI.rejectWithValue(`${(error as Error).message}`)),
          1000
        );
      });
    }
  }
);

export const toHomePage = createAsyncThunk(
  'toHome',
  async () =>
    await new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1000);
    })
);
