import { createSlice } from "@reduxjs/toolkit";
import type { IQuestion } from "@/features/questions/model/types.ts";

interface IInitialState {
  questions: IQuestion[];
  page: number;
  limit: number;
  totalPages: number;
}
const initialState: IInitialState = {
  questions: [],
  page: 1,
  limit: 10,
  totalPages: 0,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = Math.max(state.page + 1, 1);
    },
    prevPage: (state) => {
      state.page = state.page - 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage, setTotalPages, setQuestions } =
  questionSlice.actions;

export default questionSlice;
