import TaskTable from "components/Tables/Tasks";
import Button from "components/common/Button";

import Schedule from "./Schedule";
import EditSchedule from "./EditSchedule";
import styles from "./TasksPage.module.scss";
import { openModal } from "store/modalSlice";
import { useDispatch } from "react-redux";

const Index = () => {
	const dispatch = useDispatch();
	const handleOpenSchedule = () => {
		dispatch(openModal({ modalId: "ScheduleModal" }));
	};

	return (
		<>
			<Schedule />

			<EditSchedule />

			<h1 className={styles.header}>
				Текущие задания в очереди на выгрузку
			</h1>
			<div className={styles.buttons_wrapper}>
				<Button variant="outlined">Одинарное задание +</Button>
				<Button variant="outlined">Задание по расписанию +</Button>
				<Button onClick={handleOpenSchedule} variant="contained">
					Текущее расписание
				</Button>
			</div>
			<div className={styles.table_wrapper}>
				<TaskTable isPagination />
			</div>
		</>
	);
};

export default Index;
