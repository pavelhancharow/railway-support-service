import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminTable } from 'src/entities/AdminTable';

export const toggleModalLogin = createAsyncThunk(
  'toggleModalLogin',
  (trigger: boolean) => trigger
);

export const toggleModalRoute = createAsyncThunk(
  'toggleModalRoute',
  (trigger: boolean) => trigger
);

export const checkAdmin = createAsyncThunk(
  'checkAdmin',
  async (_, thunkAPI) => {
    try {
      await adminTable.updateIsAdmin(true);

      return await new Promise<boolean>((resolve) => {
        setTimeout(() => resolve(true), 300);
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Admin not found ${(error as Error).message}`
      );
    }
  }
);

export const logOut = createAsyncThunk('logOut', async (_, thunkAPI) => {
  try {
    await adminTable.updateIsAdmin(false);

    return await new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), 300);
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Admin not found ${(error as Error).message}`
    );
  }
});

export const getAdmin = createAsyncThunk('getAdmin', async (_, thunkAPI) => {
  try {
    const adminResponse = await adminTable.get();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return adminResponse!.isAdmin;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Admin not found ${(error as Error).message}`
    );
  }
});
