import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
	[key: string]: {
		isOpen: boolean;
		data?: any;
	};
}

const initialState: ModalState = {};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openModal(
			state,
			action: PayloadAction<{ modalId: string; data?: any }>
		) {
			const { modalId, data } = action.payload;
			state[modalId] = {
				isOpen: true,
				data: data,
			};
		},
		closeModal(state, action: PayloadAction<{ modalId: string }>) {
			const { modalId } = action.payload;
			state[modalId] = {
				isOpen: false,
				data: undefined,
			};
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
