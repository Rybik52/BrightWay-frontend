import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./WeekPicker.css";
import Input from "../Input";
import { Locale, endOfWeek, getWeek, startOfWeek, format } from "date-fns";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru as unknown as Locale);

const Index = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [weekNumber, setWeekNumber] = useState<number | null>(null);

	const handleDateChange = (date: Date) => {
		setSelectedDate(date);
		setWeekNumber(getWeek(date));
	};

	return (
		<>
			<p
				className={`react-datepicker__week-info ${
					weekNumber && "visible"
				}`}
			>
				{selectedDate &&
					format(startOfWeek(selectedDate), "dd.MM.yyyy")}
				-{selectedDate && format(endOfWeek(selectedDate), "dd.MM.yyyy")}{" "}
				({weekNumber}-ая неделя)
			</p>
			<DatePicker
				placeholderText="Неделя*"
				customInput={<Input type="text" />}
				selected={selectedDate}
				onChange={handleDateChange}
				dateFormat="dd.MM.yyyy"
				locale={"ru"}
			/>
		</>
	);
};

export default Index;
