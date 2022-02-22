import { createAsyncThunk } from '@reduxjs/toolkit';
import { stationsTable } from 'src/db/entities/StationsTable';
import { IAdminRouteForm, IFilterForm } from 'src/models/IForms';
import { ITrain } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';
import { createNewRoute } from 'src/services/createNewRoute';
import { createTicket } from 'src/services/createTicket';
import { delay } from 'src/services/delay';
import { getRailwayDB } from 'src/services/getRailwayDB';
import { initTables } from 'src/services/initTables';
import { updateStations } from 'src/services/updateRoutes';

export const fetchRailway = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await Promise.all([initTables(), delay(getRailwayDB)]);
      return res[1];
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
  async (data: IAdminRouteForm, thunkAPI) => {
    try {
      const res = await Promise.all([
        createNewRoute(data),
        delay(getRailwayDB),
      ]);
      return res[1];
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
      const res = await Promise.all([
        stationsTable.updateStations(data),
        delay(updateStations),
      ]);
      return res[1];
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
  async (data: [ITrain, IFilterForm], thunkAPI) => {
    try {
      const ticket = await createTicket(data);

      if (!ticket) throw new Error('Route not found');

      return await delay(ticket);
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

export const toHomePage = createAsyncThunk('toHome', async () => await delay());

export const showDetails = createAsyncThunk(
  'showDetails',
  (isShow: boolean) => isShow
);

export const toggleModalSuccess = createAsyncThunk(
  'toggleModalSuccess',
  (trigger: boolean) => trigger
);
