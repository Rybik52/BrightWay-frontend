import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queueApi = createApi({
	reducerPath: "queueApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
	endpoints: (builder) => ({
		getQueueData: builder.query({
			query: () => "queue/all",
		}),
	}),
});

export const { useGetQueueDataQuery } = queueApi;
