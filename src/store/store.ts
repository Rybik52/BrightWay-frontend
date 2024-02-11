import { configureStore } from "@reduxjs/toolkit";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
	reducer: {
		digitalSignatures: digitalSignaturesReducer,
		organizations: organizationsReducer,
		tasks: tasksReducer,
	},
});
