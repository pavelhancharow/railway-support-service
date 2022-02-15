import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/models/IForms';

import {
  checkAdmin,
  getAdmin,
  logOut,
  setUser,
  toggleModalLogin,
  toggleModalRegistration,
  toggleModalRoute,
} from '../actionCreators/PageCreator';

interface PageState {
  isModalLogin: boolean;
  isModalRoute: boolean;
  isModalRegistration: boolean;
  isAdmin: boolean;
  adminIsLoading: boolean;
  adminError: string;
  user: string;
}

const initialState: PageState = {
  isModalLogin: false,
  isModalRoute: false,
  isModalRegistration: false,
  isAdmin: false,
  adminIsLoading: false,
  adminError: '',
  user: '',
};

export const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {},
  extraReducers: {
    [toggleModalLogin.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isModalLogin = action.payload;
    },
    [toggleModalRoute.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isModalRoute = action.payload;
    },
    [toggleModalRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isModalRegistration = action.payload;
    },
    [checkAdmin.pending.type]: (state) => {
      state.adminIsLoading = true;
    },
    [checkAdmin.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.adminIsLoading = false;
      state.adminError = '';
      state.isAdmin = action.payload;
    },
    [checkAdmin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.adminIsLoading = false;
      state.adminError = action.payload;
    },
    [getAdmin.pending.type]: (state) => {
      state.adminIsLoading = true;
    },
    [getAdmin.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.adminIsLoading = false;
      state.adminError = '';
      state.isAdmin = action.payload;
    },
    [getAdmin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.adminIsLoading = false;
      state.adminError = action.payload;
    },
    [logOut.pending.type]: (state) => {
      state.adminIsLoading = true;
    },
    [logOut.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.adminIsLoading = false;
      state.adminError = '';
      state.isAdmin = action.payload;
    },
    [logOut.rejected.type]: (state, action: PayloadAction<string>) => {
      state.adminIsLoading = false;
      state.adminError = action.payload;
    },
    [setUser.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export default PageSlice.reducer;
