import { createAsyncThunk } from '@reduxjs/toolkit';
import { RailwayDB } from 'src/db/RailwayDB';
import { directionsTable } from 'src/entities/DirectionsTable';
import { routesTable } from 'src/entities/RoutesTable';
import { trainsTable } from 'src/entities/TrainsTable';
import { IForm } from 'src/models/IForm';

const { routes, trains, directions } = RailwayDB;

export const fetchRailway = createAsyncThunk(
  'railway/fetchAll',
  async (_, thunkAPI) => {
    try {
      await trainsTable.initTable(trains);
      await routesTable.initTable(routes);
      await directionsTable.initTable(directions);

      const trainsResponse = await trainsTable.trains.get(1);
      const routesResponse = await routesTable.routes.toArray();
      const directionsResponse = await directionsTable.directions.get(1);

      return {
        directions: directionsResponse?.types,
        routes: routesResponse,
        trains: trainsResponse?.types,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(`Failed to load railway db: ${error}`);
    }
  }
);

export const getFormData = createAsyncThunk(
  'railway/getFormData',
  async (formData: IForm, thunkAPI) => {
    try {
      return formData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Failed to load route information: ${error}`
      );
    }
  }
);
