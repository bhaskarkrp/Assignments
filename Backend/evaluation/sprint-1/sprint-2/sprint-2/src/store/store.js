import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import taskReducers from "../reducers/taskReducers";

export const store = configureStore({
  reducer: {
    tasks: taskReducers,
  },
  middleware: [...getDefaultMiddleware()],
});
