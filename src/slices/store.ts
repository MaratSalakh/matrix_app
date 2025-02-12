import { apiAI } from "@/network/apiAI";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: { [apiAI.reducerPath]: apiAI.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiAI.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
