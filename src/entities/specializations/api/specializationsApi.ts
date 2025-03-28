import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpecializationResponse } from "@/entities/specializations/model/types.ts";

interface Params {
  page: number;
  limit: number;
}

const BaseUrl = import.meta.env.VITE_BASE_URL;

const specializationsApi = createApi({
  reducerPath: "specializationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseUrl}` }),
  endpoints: (builder) => ({
    getSpecializations: builder.query<ISpecializationResponse, Params>({
      query: ({ page, limit }) => ({
        url: "specializations",
        params: { page, limit },
      }),
    }),
  }),
});

export default specializationsApi;
