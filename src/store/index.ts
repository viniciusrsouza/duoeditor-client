import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer, usersReducer } from "./slices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
