import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestionResponse } from "@/features/questions/model/types.ts";

interface Params {
  page: number;
  limit: number;
}

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.yeatwork.ru/questions/" }),
  endpoints: (builder) => ({
    getQuestion: builder.query<IQuestionResponse, Params>({
      query: ({ page, limit }) => ({
        url: "public-questions",
        params: { page, limit },
      }),
    }),
  }),
});

export default questionApi;
