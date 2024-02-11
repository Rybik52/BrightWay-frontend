import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDigitalSignature {
	id: number;
	ownerName: string;
	INN: number;
	type: string;
	date: string;
	auth: string;
	orgTitle: string;
}

interface DigitalSignaturesState {
	data: IDigitalSignature[];
}

const initialState: DigitalSignaturesState = {
	data: [
		{
			id: 1,
			ownerName: "Иванов Иван Иванович",
			INN: 1234567890,
			type: "Физическое лицо",
			date: "01.01.2021",
			auth: "OOO “Название центра”",
			orgTitle: "ООО Рога и копыта",
		},
		{
			id: 2,
			ownerName: "Колякин Никита Сергеевич",
			INN: 7781232322,
			type: "Юридическое лицо",
			date: "22.07.2023",
			auth: "OOO “Название центра”",
			orgTitle: "ООО Стулья",
		},
		{
			id: 3,
			ownerName: "Иванов Иван Иванович",
			INN: 1234567890,
			type: "Физическое лицо",
			date: "01.01.2021",
			auth: "Сотрудник",
			orgTitle: "OOO “Название центра”",
		},
	],
};

const digitalSignaturesSlice = createSlice({
	name: "digitalSignatures",
	initialState,
	reducers: {
		addDigitalSignature(state, action: PayloadAction<IDigitalSignature>) {
			state.data.push(action.payload);
		},
		deleteDigitalSignature(state, action: PayloadAction<number>) {
			state.data = state.data.filter(
				(_, index) => index !== action.payload
			);
		},
	},
});

export const { addDigitalSignature, deleteDigitalSignature } =
	digitalSignaturesSlice.actions;
export default digitalSignaturesSlice.reducer;
