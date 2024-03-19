import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const preloadedState = {
  user: {
    user: null,
  },
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState,
});
