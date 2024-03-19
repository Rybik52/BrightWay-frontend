import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { queueApi } from "./api";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
	reducer: {
		digitalSignatures: digitalSignaturesReducer,
		organizations: organizationsReducer,
		tasks: tasksReducer,
		[queueApi.reducerPath]: queueApi.reducer,
		user: userReducer,
		modal: modalReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(queueApi.middleware),
});

setupListeners(store.dispatch);
