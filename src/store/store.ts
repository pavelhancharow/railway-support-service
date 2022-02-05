import { combineReducers, configureStore } from '@reduxjs/toolkit';
import railwayReducer from './reducers/RailwaySlice';
import pageReducer from './reducers/PageSlice';

const rootReducer = combineReducers({
  railwayReducer,
  pageReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
