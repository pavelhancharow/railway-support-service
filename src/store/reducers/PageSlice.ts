import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  checkAdmin,
  getAdmin,
  logOut,
  toggleModalLogin,
  toggleModalRoute,
} from '../actionCreators/PageCreator';

interface PageState {
  isModalLogin: boolean;
  isModalRoute: boolean;
  isAdmin: boolean;
  adminIsLoading: boolean;
  adminError: string;
}

const initialState: PageState = {
  isModalLogin: false,
  isModalRoute: false,
  isAdmin: false,
  adminIsLoading: false,
  adminError: '',
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
  },
});

export default PageSlice.reducer;
