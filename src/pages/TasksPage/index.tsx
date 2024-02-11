import { useState } from "react";

import TaskTable from "components/TaskTable";
import Button from "components/common/Button";

import Schedule from "./Schedule";
import EditSchedule from "./EditSchedule";
import styles from "./TasksPage.module.scss";

const Index = () => {
	const [showModal, setShowModal] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);

	return (
		<>
			<Schedule
				showModal={showModal}
				setShowModal={setShowModal}
				onClicked={() => setShowModalEdit(true)}
			/>

			<EditSchedule
				showModal={showModalEdit}
				setShowModal={setShowModalEdit}
			/>

			<h1 className={styles.header}>
				Текущие задания в очереди на выгрузку
			</h1>
			<div className={styles.buttons_wrapper}>
				<Button variant="outlined">Одинарное задание +</Button>
				<Button variant="outlined">Задание по расписанию +</Button>
				<Button onClick={() => setShowModal(true)} variant="contained">
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
