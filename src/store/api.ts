import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://v-mdlp1:89/";

export const queueApi = createApi({
	reducerPath: "queueApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getQueueData: builder.query({
			query: () => "api/queue/all",
		}),
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: "/login",
				method: "POST",
				mode: "no-cors",
				credentials: "include",
				body: { username, password },
			}),
		}),
		getUserByUsername: builder.query({
			query: (username: string) => ({
				url: `api/users/username?username=${username}`,
				method: "GET",
			}),
		}),
		getUsersAll: builder.query({
			query: () => ({
				url: "api/users/all",
				method: "GET",
			}),
		}),
		addUser: builder.mutation({
			query: ({ username, fullName, password }) => ({
				url: "api/users/add",
				method: "POST",
				body: {
					username,
					fullName,
					password,
					active: true,
					role: "ROLE_USER",
				},
			}),
		}),
	}),
});

export const {
	useGetQueueDataQuery,
	useLoginMutation,
	useGetUserByUsernameQuery,
	useGetUsersAllQuery,
	useAddUserMutation
} = queueApi;
