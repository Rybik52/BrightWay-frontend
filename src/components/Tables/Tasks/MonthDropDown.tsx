import DropDown, { DropDownItem } from "components/common/DropDown";
import { SelectDropDownProps, getMonthName } from "./utils";
import { FC } from "react";

const months: DropDownItem[] = Array.from({ length: 12 }, (_, index) => ({
	id: index + 1,
	value: getMonthName(index + 1),
}));

const MonthDropDown: FC<SelectDropDownProps> = ({ setSelectedItem }) => {
	const handleDropDownChange = (selectedMonth: DropDownItem[]) => {
		setSelectedItem(selectedMonth[0] || null);
	};

	return (
		<DropDown
			title="Месяц*"
			onChange={handleDropDownChange}
			items={months}
		/>
	);
};

export default MonthDropDown;
