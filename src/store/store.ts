import { combineReducers, configureStore } from '@reduxjs/toolkit';
import railwayReducer from './reducers/RailwaySlice';

const rootReducer = combineReducers({
  railwayReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
