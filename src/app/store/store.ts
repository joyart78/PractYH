import { configureStore } from "@reduxjs/toolkit";
import questionApi from "@/features/questions/api/questionApi.ts";
import questionSlice from "@/features/questions/model/questionSlice.ts";

export const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
    questions: questionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
