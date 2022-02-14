import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRailway, IRoute } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';
import {
  addToRailway,
  fetchRailway,
  getFormData,
  setDuration,
  showDetails,
  toHomePage,
} from '../actionCreators/RailwayCreator';

interface RailwayState {
  railway: IRailway;
  isLoading: boolean;
  error: string;
  formTicket: boolean;
  ticket: ITicket;
  isDetails: boolean;
}

const initialState: RailwayState = {
  railway: {},
  isLoading: false,
  error: '',
  formTicket: false,
  ticket: {
    from: '',
    to: '',
    train: '',
    price: NaN,
    distance: NaN,
    duration: '',
  },
  isDetails: false,
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
    [addToRailway.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addToRailway.fulfilled.type]: (state, action: PayloadAction<IRoute[]>) => {
      state.isLoading = false;
      state.error = '';
      state.railway.routes = action.payload;
    },
    [addToRailway.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getFormData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getFormData.fulfilled.type]: (state, action: PayloadAction<ITicket>) => {
      state.isLoading = false;
      state.error = '';
      state.formTicket = true;
      state.ticket = action.payload;
    },
    [getFormData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [toHomePage.pending.type]: (state) => {
      state.isLoading = true;
    },
    [toHomePage.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.formTicket = false;
      state.error = '';
    },
    [setDuration.fulfilled.type]: (
      state,
      action: PayloadAction<{ duration: string }>
    ) => {
      state.ticket = { ...state.ticket, ...action.payload };
    },
    [showDetails.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.isDetails = action.payload;
    },
  },
});

export default RailwaySlice.reducer;
