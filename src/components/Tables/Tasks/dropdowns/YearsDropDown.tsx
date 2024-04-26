import { FC } from "react";
import Select, { SingleValue } from "react-select";
import { CustomOption, ISelectItemsProps } from "../utils";
import { customStyles } from "./CustomStyles";

const currentYear = new Date().getFullYear();

// Создаем массив чисел от 2000 до текущего года с помощью Array.from()
const years: CustomOption[] = Array.from(
	{ length: currentYear - 1999 },
	(_, index) => ({
		value: 2000 + index,
		label: `${2000 + index}`,
	})
).reverse();

const YearsDropDown: FC<ISelectItemsProps> = ({ selectedItem, onChange }) => {
	const handleYearChange = (newValue: SingleValue<CustomOption>) => {
		if (newValue) {
			const selectedOption = newValue as CustomOption;
			onChange(selectedOption?.value ?? null);
		}
	};

	return (
		<Select
			styles={customStyles}
			options={years}
			maxMenuHeight={150}
			placeholder="Год*"
			onChange={handleYearChange}
			value={years.find((year) => year.value === selectedItem)}
		/>
	);
};

export default YearsDropDown;
