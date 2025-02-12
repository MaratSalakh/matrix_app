import { ResponseAI } from "@/models/responseAI";
import { API_KEY } from "@/utils/API_KEY";
import { baseURL } from "@/utils/baseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiAI = createApi({
  reducerPath: "apiAI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    postText: builder.mutation<ResponseAI, string>({
      query: (promptText) => ({
        url: "/v1/chat/completions",
        method: "POST",
        body: {
          model: "google/gemini-2.0-flash-lite-preview-02-05:free",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: promptText,
                },
              ],
            },
          ],
        },
      }),
    }),
  }),
});

export const { usePostTextMutation } = apiAI;
