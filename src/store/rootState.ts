import { combineReducers } from "@reduxjs/toolkit";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
	digitalSignatures: digitalSignaturesReducer,
	organizations: organizationsReducer,
	tasks: tasksReducer,
	user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
