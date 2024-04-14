import DropDown, { DropDownItem } from "components/common/DropDown";
import { FC } from "react";
import { SelectDropDownProps } from "./utils";

const currentYear = new Date().getFullYear();

// Создаем массив чисел от 2000 до текущего года с помощью Array.from()
const years: DropDownItem[] = Array.from(
	{ length: currentYear - 1999 },
	(_, index) => ({
		id: 2000 + index,
		value: `${2000 + index}`,
	})
).reverse();

const YearsDropDown: FC<SelectDropDownProps> = ({ setSelectedItem }) => {
	const handleDropDownChange = (selectedYear: DropDownItem[]) => {
		setSelectedItem(selectedYear[0] || null);
	};

	return (
		<DropDown title="Год*" items={years} onChange={handleDropDownChange} />
	);
};

export default YearsDropDown;
