import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISkillsResponse } from "@/entities/skills/model/types.ts";

interface Params {
  page: number;
  limit: number;
  specializations?: number[];
}

const BaseUrl = import.meta.env.VITE_BASE_URL;

const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseUrl}` }),
  endpoints: (builder) => ({
    getSkills: builder.query<ISkillsResponse, Params>({
      query: ({ page, limit, specializations }) => ({
        url: "skills",
        params: { page, limit, specializations },
      }),
    }),
  }),
});

export default skillsApi;
