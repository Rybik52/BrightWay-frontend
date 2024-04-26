/* eslint-disable @typescript-eslint/no-explicit-any */
export const customStyles = {
	valueContainer: (provided: any) => ({
		...provided,
		padding: "0",
	}),
	control: (provided: any, state: { isFocused: any }) => ({
		...provided,
		border: "1px solid transparent",
		padding: "0.75rem",
		borderRadius: "6px",
		BoxShadow: state.isFocused ? "0 0 0 1px #2684FF" : null,
		"&:hover": {
			borderColor: "#2684FF",
		},
	}),
	option: (provided: any, state: { isSelected: any }) => ({
		...provided,
		BackgroundColor: state.isSelected ? "#2684FF" : null,
		color: state.isSelected ? "white" : "inherit",
		"&:hover": {
			backgroundColor: "#2684FF",
			color: "white",
		},
	}),
};
