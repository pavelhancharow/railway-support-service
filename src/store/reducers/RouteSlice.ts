import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoute } from 'src/models/IRoute';
import { fetchRoutes } from './ActionCreator';

interface RouteState {
  routes: IRoute[];
  isLoading: boolean;
  error: string;
}

const initialState: RouteState = {
  routes: [],
  isLoading: false,
  error: '',
};

export const RouteSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRoutes.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRoutes.fulfilled.type]: (state, action: PayloadAction<IRoute[]>) => {
      state.isLoading = false;
      state.error = '';
      state.routes = action.payload;
    },
    [fetchRoutes.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default RouteSlice.reducer;
