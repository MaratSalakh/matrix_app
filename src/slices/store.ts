import { apiAI } from "@/network/apiAI";
import { apiDATA } from "@/network/apiDATA";
import databaseReducer from "@/slices/databaseSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      database: databaseReducer,
      [apiAI.reducerPath]: apiAI.reducer,
      [apiDATA.reducerPath]: apiDATA.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(apiAI.middleware)
        .concat(apiDATA.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
