import { createSlice } from "@reduxjs/toolkit";
import { fakeTasksData } from "./fakeData";

interface ITasksItem {
	id: number;
	date: number;
	week: string;
	gtin: string;
	party: string;
	type: string;
	dateOfCreate: number;
	progress: number;
}

interface TasksState {
	data: ITasksItem[];
}

const initialState: TasksState = {
	data: fakeTasksData,
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setData(state, action) {
			state.data = action.payload;
		},
		deleteTask(state, action) {
			state.data = state.data.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

export const { setData, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
