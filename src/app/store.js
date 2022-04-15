import { configureStore } from '@reduxjs/toolkit';
import signInSlice from '../features/signIn-slice';

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
  },
});
