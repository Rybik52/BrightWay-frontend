export const formatDate = (dateString: number): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};
	const date = new Date(dateString);
	const formattedDate = date.toLocaleDateString("ru", options);
	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export const getMonthName = (monthNumber: number): string => {
	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];
	return months[monthNumber - 1] || "Неверный номер месяца";
};

export interface CustomOption {
	value: number;
	label: string;
}

export interface ISelectItemsProps {
	selectedItem: number | null;
	onChange: (selectedItem: number) => void;
}
