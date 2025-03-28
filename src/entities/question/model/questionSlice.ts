import { createSlice } from "@reduxjs/toolkit";
import type { IQuestion } from "@/entities/question/model/types.ts";

interface IInitialState {
  questions: IQuestion[];
  page: number;
  limit: number;
  totalPages: number;
  titleOrDescription: string | undefined;
  specialization: number[] | undefined;
  skills: number[] | undefined;
  complexity: number[] | undefined;
  rate: number[] | undefined;
}
const initialState: IInitialState = {
  questions: [],
  page: 1,
  limit: 10,
  totalPages: 0,
  titleOrDescription: undefined,
  specialization: undefined,
  skills: undefined,
  complexity: undefined,
  rate: undefined,
};

const manageState = (
  currentState: number[] | undefined,
  payload: number,
): number[] | undefined => {
  const existingRate = currentState?.find((item) => item === payload);

  if (existingRate && currentState) {
    const newState = currentState.filter((item) => item !== payload);
    return newState.length === 0 ? undefined : newState;
  } else {
    return [...(currentState || []), payload];
  }
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
    setTitleOrDescription: (state, action) => {
      state.titleOrDescription = action.payload;
    },
    setSpecialization: (state, action) => {
      if (state.specialization === action.payload) {
        state.specialization = undefined;
      } else state.specialization = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = manageState(state.skills, action.payload);
    },
    setComplexity: (state, action) => {
      state.complexity = manageState(state.complexity, action.payload);
    },
    setRate: (state, action) => {
      state.rate = manageState(state.rate, action.payload);
    },
  },
});

export const {
  nextPage,
  prevPage,
  setPage,
  setTotalPages,
  setQuestions,
  setTitleOrDescription,
  setSpecialization,
  setSkills,
  setComplexity,
  setRate,
} = questionSlice.actions;

export default questionSlice;
