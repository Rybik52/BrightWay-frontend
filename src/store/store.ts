import { configureStore } from "@reduxjs/toolkit";
import digitalSignaturesReducer from "./digitalSignaturesSlice";
import organizationsReducer from "./organizationsSlice";
import tasksReducer from "./tasksSlice";
import { queueApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
	reducer: {
		digitalSignatures: digitalSignaturesReducer,
		organizations: organizationsReducer,
		tasks: tasksReducer,
		[queueApi.reducerPath]: queueApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(queueApi.middleware),
});

setupListeners(store.dispatch);
