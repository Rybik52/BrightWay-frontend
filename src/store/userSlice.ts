import { createSlice } from "@reduxjs/toolkit";

interface IUser {
	id: number;
	fullName: string;
	active: boolean;
	role: "ROLE_ADMIN" | "ROLE_USER";
	username: string;
}

interface UserState {
	user: IUser | null;
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	user: null,
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setError(state, action) {
			state.error = action.payload;
		},
	},
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectLoading = (state: { user: UserState }) => state.user.loading;
export const selectError = (state: { user: UserState }) => state.user.error;

export default userSlice.reducer;