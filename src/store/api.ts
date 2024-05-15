import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import keycloak from "../Keycloak.ts"

export const queueApi = createApi({
	reducerPath: "mdlpAPI",
	tagTypes: ["Users", "Queue"],
	baseQuery: fetchBaseQuery({
		baseUrl: "http://v-mdlp-dev",
		prepareHeaders(headers) {
			const token = keycloak.token

			if (token) {
				headers.set("Authorization", `Bearer ${token}`)
			}

			return headers
		}
	}),
	endpoints: (builder) => ({
		getDashboardURL: builder.query({
			query: () => ({
				url: "api/superset/metadata",
				method: "GET",
			}),
		}),
		getDashboardsUID: builder.query({
			query: () => ({
				url: "api/superset/dashboards",
				method: "GET",
			}),
		}),
		getGuestToken: builder.query({
			query: () => ({
				url: "api/superset/guest-token",
				method: "GET",
			}),
		}),
		getQueueAll: builder.query({
			providesTags: (result) =>
				result
					? [
							...result.map((id: number) => ({
								type: "Queue",
								id
							})),
							{ type: "Queue", id: "List" }
					]
					: [{ type: "Queue", id: "List" }],
			query: () => "api/queue/all"
		}),
		addQueue: builder.mutation({
			invalidatesTags: [{ type: "Queue", id: "List" }],
			query: (data) => ({
				url: "/api/queue/new",
				method: "POST",
				body: data
			})
		}),
		deleteTaskFromQueue: builder.mutation({
			invalidatesTags: [{ type: "Queue", id: "List" }],
			query: (id: number) => ({
				url: `/api/queue/delete?id=${id}`,
				method: "DELETE"
			})
		}),
		login: builder.mutation({
			query: ({ username, password }) => ({
				url: "/login",
				method: "POST",
				mode: "no-cors",
				credentials: "include",
				body: { username, password }
			})
		}),
		getUserByUsername: builder.query({
			providesTags: ["Users"],
			query: (username: string) => ({
				url: `api/users/username?username=${username}`,
				method: "GET"
			})
		}),
		getUsersAll: builder.query({
			providesTags: (result) =>
				result
					? [
							...result.map((id: number) => ({
								type: "Users",
								id
							})),
							{ type: "Users", id: "List" }
					]
					: [{ type: "Users", id: "List" }],
			query: () => ({
				url: "api/users/all",
				method: "GET"
			})
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
					role: "ROLE_USER"
				}
			})
		}),
		editUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (body) => ({
				url: `api/users/edit`,
				method: "POST",
				body
			})
		}),
		deleteUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/delete/${id}`,
				method: "GET"
			})
		}),
		toggleBlockUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/block/${id}`,
				method: "GET"
			})
		}),
		recoveryUser: builder.mutation({
			invalidatesTags: [{ type: "Users", id: "List" }],
			query: (id: number) => ({
				url: `api/users/recovery/${id}`,
				method: "GET"
			})
		}),
		getAllCompany: builder.query({
			query: () => ({
				url: "api/company/get",
				method: "GET"
			})
		})
	})
})

export const {
	useGetDashboardsUIDQuery,
	useGetGuestTokenQuery,
	useGetDashboardURLQuery,
	useAddQueueMutation,
	useGetAllCompanyQuery,
	useDeleteTaskFromQueueMutation,
	useRecoveryUserMutation,
	useToggleBlockUserMutation,
	useDeleteUserMutation,
	useGetQueueAllQuery,
	useLoginMutation,
	useGetUserByUsernameQuery,
	useGetUsersAllQuery,
	useAddUserMutation,
	useEditUserMutation
} = queueApi
