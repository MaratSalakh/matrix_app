import { ResponsePersons } from "@/models/responsePersons";
import { baseURL_MATRIX } from "@/utils/baseURLs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiMATRIX = createApi({
  reducerPath: "apiMATRIX",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL_MATRIX,
  }),
  endpoints: (builder) => ({
    getPersons: builder.query<ResponsePersons, void>({
      query: () => ({
        url: `/persons`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPersonsQuery } = apiMATRIX;
