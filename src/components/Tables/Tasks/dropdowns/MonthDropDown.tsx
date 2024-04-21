import { CustomOption, ISelectItemsProps, getMonthName } from "../utils";
import { FC } from "react";
import Select, { SingleValue } from "react-select";

const months: CustomOption[] = Array.from({ length: 12 }, (_, index) => ({
	value: index + 1,
	label: getMonthName(index + 1),
}));

const MonthDropDown: FC<ISelectItemsProps> = ({ onChange, selectedItem }) => {
	const handleMonthChange = (newValue: SingleValue<CustomOption>) => {
		if (newValue) {
			const selectedOption = newValue as CustomOption;
			onChange(selectedOption?.value ?? null);
		}
	};

	return (
		<Select
			maxMenuHeight={150}
			options={months}
			placeholder="Месяц*"
			value={months.find((month) => month.value === selectedItem)}
			onChange={handleMonthChange}
		/>
	);
};

export default MonthDropDown;
