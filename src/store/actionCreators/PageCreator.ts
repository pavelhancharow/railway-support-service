import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminTable } from 'src/entities/AdminTable';
import { IAdminType } from 'src/models/IRailway';

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
  async (adminName: string, thunkAPI) => {
    try {
      if (adminName === 'admin') {
        await adminTable.put(adminName === 'admin');
        const adminResponse = await adminTable.get();
        return await new Promise<IAdminType>((resolve) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          setTimeout(() => resolve(adminResponse!.administrator), 300);
        });
      }
      return false;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Admin not found ${(error as Error).message}`
      );
    }
  }
);

export const logOut = createAsyncThunk('logOut', async (_, thunkAPI) => {
  try {
    await adminTable.put(false);
    const adminResponse = await adminTable.get();

    return await new Promise<IAdminType>((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setTimeout(() => resolve(adminResponse!.administrator), 300);
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
    return adminResponse!.administrator;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Admin not found ${(error as Error).message}`
    );
  }
});
