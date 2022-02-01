import { combineReducers, configureStore } from '@reduxjs/toolkit';
import routeReducer from './reducers/RouteSlice';

const rootReducer = combineReducers({
  routeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
