import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeOrganizationsData } from "./fakeData";

export interface IOrganization {
	id: number;
	organizationTitle: string;
	organizationINN: number;
	address: string;
	ownerName: string;
	ownerINN: number;
	phone?: string;
}

interface OrganizationsState {
	data: IOrganization[];
}

const initialState: OrganizationsState = {
	data: fakeOrganizationsData,
};

const organizationsSlice = createSlice({
	name: "organizations",
	initialState,
	reducers: {
		addOrganization: (state, action: PayloadAction<IOrganization>) => {
			state.data.push(action.payload);
		},
		deleteOrganization: (state, action: PayloadAction<number>) => {
			state.data = state.data.filter((org) => org.id !== action.payload);
		},
	},
});

export const { addOrganization, deleteOrganization } =
	organizationsSlice.actions;

export default organizationsSlice.reducer;
