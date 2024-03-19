import { combineReducers } from "@reduxjs/toolkit";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";

const rootReducer = combineReducers({
	digitalSignatures: digitalSignaturesReducer,
	organizations: organizationsReducer,
	tasks: tasksReducer,
	user: userReducer,
	modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
