import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://v-mdlp1:89/";

export const queueApi = createApi({
	reducerPath: "mdlpAPI",
	tagTypes: ["Users"],
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
			providesTags: (result) =>
				result
					? [
							...result.map((id: number) => ({
								type: "Users",
								id,
							})),
							{ type: "Users", id: "List" },
					]
					: [{ type: "Users", id: "List" }],
			query: () => ({
				url: "api/users/all",
				method: "GET",
			}),
		}),
		addUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: ({ username, fullName, password }) => ({
				url: "api/users/add",
				method: "POST",
				body: {
					username,
					fullName,
					password,
					role: "ROLE_USER",
					state: {
						lastActivity: new Date(),
						isActiveNow: false,
						isDeleted: false,
						isBlocked: false,
						statusTime: null,
					},
				},
			}),
		}),
		editUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (body) => ({
				url: `api/users/edit`,
				method: "POST",
				body,
			}),
		}),
		deleteUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/delete/${id}`,
				method: "GET",
			}),
		}),
		toggleBlockUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/block/${id}`,
				method: "GET",
			}),
		}),
		recoveryUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/recovery/${id}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useRecoveryUserMutation,
	useToggleBlockUserMutation,
	useDeleteUserMutation,
	useGetQueueDataQuery,
	useLoginMutation,
	useGetUserByUsernameQuery,
	useGetUsersAllQuery,
	useAddUserMutation,
	useEditUserMutation,
} = queueApi;
