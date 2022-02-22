import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRailway, IStation } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';
import {
  addNewStation,
  fetchRailway,
  getFormData,
  setDetailsToTicket,
  showDetails,
  toggleModalSuccess,
  toHomePage,
  updateRailway,
} from './actionCreator';

interface RailwayState {
  railway: IRailway;
  isLoading: boolean;
  error: string;
  isTicketCreated: boolean;
  ticket: ITicket;
  isDetails: boolean;
  isSuccessStation: boolean;
  isSuccessRoute: boolean;
}

const initialState: RailwayState = {
  railway: {
    stations: [],
    routes: [],
    trains: [],
    trainTypes: [],
  },
  isLoading: false,
  error: '',
  isTicketCreated: false,
  ticket: {
    train: '',
    trainType: '',
    tariff: NaN,
    from: '',
    to: '',
    stations: [],
    price: NaN,
    distance: '',
    duration: '',
  },
  isDetails: true,
  isSuccessStation: false,
  isSuccessRoute: false,
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
    [updateRailway.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateRailway.fulfilled.type]: (
      state,
      action: PayloadAction<IRailway>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccessRoute = true;
      state.railway = action.payload;
    },
    [updateRailway.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewStation.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addNewStation.fulfilled.type]: (
      state,
      action: PayloadAction<IStation[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.isSuccessStation = true;
      state.railway.stations = action.payload;
    },
    [addNewStation.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getFormData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getFormData.fulfilled.type]: (state, action: PayloadAction<ITicket>) => {
      state.isLoading = false;
      state.error = '';
      state.isTicketCreated = true;
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
      state.isTicketCreated = false;
      state.error = '';
    },
    [setDetailsToTicket.fulfilled.type]: (
      state,
      action: PayloadAction<{
        duration: string;
        distance: string;
        price: number;
      }>
    ) => {
      state.ticket = { ...state.ticket, ...action.payload };
    },
    [showDetails.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.isDetails = action.payload;
    },
    [toggleModalSuccess.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isSuccessStation = action.payload;
      state.isSuccessRoute = action.payload;
    },
  },
});

export default RailwaySlice.reducer;
