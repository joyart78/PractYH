import { configureStore } from "@reduxjs/toolkit";
import questionApi from "@/entities/question/api/questionApi.ts";
import questionSlice from "@/entities/question/model/questionSlice.ts";
import skillsApi from "@/entities/skills/api/skillsApi.ts";
import specializationsApi from "@/entities/specializations/api/specializationsApi.ts";
import questionInfoApi from "@/entities/questionInfo/api/questionInfoApi.ts";

export const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
    questions: questionSlice.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer,
    [questionInfoApi.reducerPath]: questionInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      skillsApi.middleware,
      specializationsApi.middleware,
      questionInfoApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
