import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestionResponse } from "@/entities/question/model/types.ts";

interface Params {
  page: number;
  limit: number;
  titleOrDescription: string | undefined;
  specialization: number[] | undefined;
  skills: number[] | undefined;
  complexity: number[] | undefined;
  rate: number[] | undefined;
}

const BaseUrl = import.meta.env.VITE_BASE_URL;

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseUrl}` }),
  endpoints: (builder) => ({
    getQuestion: builder.query<IQuestionResponse, Params>({
      query: ({
        page,
        limit,
        titleOrDescription,
        specialization,
        skills,
        complexity,
        rate,
      }) => ({
        url: "questions/public-questions",
        params: {
          page,
          limit,
          titleOrDescription,
          specialization,
          skills,
          complexity,
          rate,
        },
      }),
    }),
  }),
});

export default questionApi;
