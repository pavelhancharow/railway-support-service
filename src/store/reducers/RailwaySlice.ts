import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRailway } from 'src/models/IRailway';
import { fetchRailway } from './ActionCreator';

interface RailwayState {
  railway: IRailway;
  isLoading: boolean;
  error: string;
}

const initialState: RailwayState = {
  railway: {},
  isLoading: false,
  error: '',
};

export const RailwaySlice = createSlice({
  name: 'railway',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRailway.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRailway.fulfilled.type]: (state, action: PayloadAction<IRailway>) => {
      state.isLoading = false;
      state.error = '';
      state.railway = action.payload;
    },
    [fetchRailway.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default RailwaySlice.reducer;
