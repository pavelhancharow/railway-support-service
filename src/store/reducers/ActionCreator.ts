import { createAsyncThunk } from '@reduxjs/toolkit';
import { routesDB } from 'src/db/routesDB';
import { idb } from 'src/services/idb';

export const fetchRoutes = createAsyncThunk(
  'routes/fetchAll',
  async (_, thunkAPI) => {
    try {
      await idb.initTable(routesDB);
      const response = await idb.routes.toArray();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Failed to load railway routes: ${error}`
      );
    }
  }
);
