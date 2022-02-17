import { createAsyncThunk } from '@reduxjs/toolkit';
import { stationsTable } from 'src/entities/StationsTable';
import { IAdminRoute, IFilter } from 'src/models/IForms';
import { IStation, ITrain } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';
import { createNewRoute } from 'src/services/createNewRoute';
import { createTicket } from 'src/services/createTicket';
import { getRailwayDB } from 'src/services/getRailwayDB';
import { initTables } from 'src/services/initTables';
import { updateStations } from 'src/services/updateRoutes';

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

export const updateRailway = createAsyncThunk(
  'updateRailway',
  async (data: IAdminRoute, thunkAPI) => {
    try {
      await createNewRoute(data);
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

export const addNewStation = createAsyncThunk(
  'addNewStation',
  async (data: string, thunkAPI) => {
    try {
      await stationsTable.updateStations(data);

      return await new Promise<IStation[]>((resolve) => {
        setTimeout(() => resolve(updateStations()), 1000);
      });
    } catch (error) {
      return await new Promise((_, reject) => {
        setTimeout(
          () =>
            reject(
              thunkAPI.rejectWithValue(
                `Failed to add new station to railway db:
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
  async (data: [ITrain, IFilter], thunkAPI) => {
    try {
      const ticket = await createTicket(data);

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
export const setDetailsToTicket = createAsyncThunk(
  'setDetailsToTicket',
  async (data: [string, string, number], thunkAPI) => {
    try {
      const [duration, distance, price] = data;
      return { duration, distance, price };
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

export const showDetails = createAsyncThunk(
  'showDetails',
  (isShow: boolean) => isShow
);

export const toggleModalSuccess = createAsyncThunk(
  'toggleModalSuccess',
  (trigger: boolean) => trigger
);
