import { configureStore } from '@reduxjs/toolkit';
import { dummyJsonApi } from '../services/dummyJsonApi';

export default configureStore({
  reducer: {
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([dummyJsonApi.middleware]),
});
