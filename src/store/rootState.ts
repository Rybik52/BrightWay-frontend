import { combineReducers } from "@reduxjs/toolkit";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";

const rootReducer = combineReducers({
	digitalSignatures: digitalSignaturesReducer,
	organizations: organizationsReducer,
	tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
