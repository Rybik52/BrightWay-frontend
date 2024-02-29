// import moment from "moment";
import { useState } from "react";
// import { DatePicker, Stack } from "rsuite";
// import "rsuite/dist/rsuite-no-reset.min.css";
import "./WeekPicker.css";

interface WeekData {
	data: Date | null;
	dataFrom: Date | null;
	dataTo: Date | null;
	weekNumber: number | null;
}

const Index: React.FC = () => {
	const [weekData, setWeekData] = useState<WeekData>({
		data: null,
		dataFrom: null,
		dataTo: null,
		weekNumber: null,
	});

	const handleWeekChange = (date: Date): void => {
		const weekNumber: number = moment(date).isoWeek();
		const dataFrom: Date = moment(date).startOf("isoWeek").toDate();
		const dataTo: Date = moment(date).endOf("isoWeek").toDate();

		setWeekData({
			data: date,
			dataFrom,
			dataTo,
			weekNumber,
		});
	};

	return <div>d</div>;
};

export default Index;
