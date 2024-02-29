import { createSlice } from "@reduxjs/toolkit";

interface ITasksItem {
	id: number;
	year: number;
	month: number;
	week: number | null;
	gtin: string | null;
	batch: string;
	type: string;
	progress: number;
}

interface TasksState {
	data: ITasksItem[];
}

const initialState: TasksState = {
	data: [
		{
			id: 1,
			year: 2022,
			month: 12,
			week: 12,
			gtin: null,
			batch: "",
			type: "",
			progress: 0,
		},
	],
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
