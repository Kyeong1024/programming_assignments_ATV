import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//왜하는지 알아보기
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
