import SpinLoader from "components/common/SpinLoader";
import { FC } from "react";
import { useGetAllCompanyQuery } from "store/api";
import { CustomOption, ISelectItemsProps } from "../utils";
import Select, { SingleValue } from "react-select";
import { customStyles } from "./CustomStyles";

const OrgDropDown: FC<ISelectItemsProps> = ({ selectedItem, onChange }) => {
	const { data, isLoading, isSuccess } = useGetAllCompanyQuery({});
	const handleYearChange = (newValue: SingleValue<CustomOption>) => {
		if (newValue) {
			const selectedOption = newValue as CustomOption;
			onChange(selectedOption?.value ?? null);
		}
	};

	let orgsData = [];
	if (isSuccess) {
		orgsData = data.map((org: { id: number; title: string }) => ({
			value: org.id,
			label: org.title,
		}));
	}

	if (isLoading) return <SpinLoader />;
	return (
		<Select
			styles={customStyles}
			placeholder="Организация*"
			options={orgsData}
			onChange={handleYearChange}
			value={orgsData.find(
				(org: CustomOption) => org.value === selectedItem
			)}
		/>
	);
};

export default OrgDropDown;
