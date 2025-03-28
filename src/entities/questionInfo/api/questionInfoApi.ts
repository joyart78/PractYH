import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestion } from "@/entities/question/model/types.ts";

const BaseUrl = import.meta.env.VITE_BASE_URL;

const questionInfoApi = createApi({
  reducerPath: "questionInfo",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    getQuestionInfo: builder.query<IQuestion, { questionId: number }>({
      query: ({ questionId }) => ({
        url: `questions/public-questions/${questionId}`,
      }),
    }),
  }),
});

export default questionInfoApi;
