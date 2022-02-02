import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IForm } from 'src/models/IForm';
import { IRailway } from 'src/models/IRailway';
import { fetchRailway, getFormData } from './ActionCreator';

interface RailwayState {
  railway: IRailway;
  isLoading: boolean;
  error: string;
  form: IForm;
  formTicket: boolean;
}

const initialState: RailwayState = {
  railway: {},
  isLoading: false,
  error: '',
  form: {
    from: '',
    to: '',
    train: '',
  },
  formTicket: false,
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
    [getFormData.fulfilled.type]: (state, action: PayloadAction<IForm>) => {
      state.formTicket = true;
      state.error = '';
      state.form = action.payload;
    },
    [getFormData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default RailwaySlice.reducer;
