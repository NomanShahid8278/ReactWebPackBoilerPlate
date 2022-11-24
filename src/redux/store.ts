import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../redux/reducers/Example/index";

export const store = configureStore({
  reducer: {
    counter: exampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
