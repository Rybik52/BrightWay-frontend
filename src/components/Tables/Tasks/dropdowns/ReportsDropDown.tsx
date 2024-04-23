import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { customStyles } from "./CustomStyles";

interface ReportsDropDownProps {
	selectedItem: string;
	onChange: (selectedItem: string) => void;
}

type Option = {
	value: string | null;
	label: string;
};

const ReportsTypes: Option[] = [
	{ value: "disposal", label: "О выбытии" },
	{ value: "pricing", label: "По ценам" },
	{ value: "traffic", label: "По движению" },
	{ value: "balance", label: "По остаткам" },
];

const ReportsDropDown: FC<ReportsDropDownProps> = ({
	selectedItem,
	onChange,
}) => {
	const handleReportTypeChange = (newValue: SingleValue<Option>) => {
		if (newValue) {
			const selectedOption = newValue as Option;
			onChange(selectedOption.value ?? "");
		}
	};

	return (
		<Select
			styles={customStyles}
			options={ReportsTypes}
			maxMenuHeight={150}
			placeholder="Отчет по выгрузке"
			onChange={handleReportTypeChange}
			value={ReportsTypes.find(
				(reportType) => reportType.value === selectedItem
			)}
		/>
	);
};

export default ReportsDropDown;
