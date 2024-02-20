import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queueApi = createApi({
	reducerPath: "queueApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://v-mdlp1:89/" }),
	endpoints: (builder) => ({
		getQueueData: builder.query({
			query: () => "queue/all",
		}),
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: "/login",
				method: "POST",
				mode: "no-cors",
				body: { username, password },
			}),
		}),
	}),
});

export const { useGetQueueDataQuery, useLoginMutation } = queueApi;
