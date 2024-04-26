// import TaskTable from "components/Tables/Tasks";
import Button from "components/common/Button";

import ScheduleModal from "./ScheduleModal";
import EditScheduleModal from "./EditScheduleModal";
import styles from "./TasksPage.module.scss";
import { openModal } from "store/modalSlice";
import { useDispatch } from "react-redux";
import CreateTaskModal from "./CreateTaskModal";
import { Suspense, lazy } from "react";
import SpinLoader from "components/common/SpinLoader";
const TaskTable = lazy(() => import("components/Tables/Tasks"));

const Index = () => {
	const dispatch = useDispatch();

	const handleOpenScheduleModal = () => {
		dispatch(openModal({ modalId: "ScheduleModal" }));
	};

	const handleOpenCreateTaskModal = () => {
		// dispatch(openModal({ modalId: "CreateTaskModal" }));
		dispatch(openModal({ modalId: "EditAndCreateTaskModal" }));
	};

	return (
		<>
			<ScheduleModal />
			<EditScheduleModal />
			<CreateTaskModal />

			<h1 className={styles.header}>
				Текущие задания в очереди на выгрузку
			</h1>
			<div className={styles.buttons_wrapper}>
				<Button disabled variant="outlined">
					Одинарное задание +
				</Button>
				<Button disabled variant="outlined">
					Задание по расписанию +
				</Button>
				<Button variant="outlined" onClick={handleOpenCreateTaskModal}>
					Создать задание +
					{/* Временно добавление реализованно через компонент редактирования, в дальнейшем переделаю компонент на универсальный, который будет обновлять и создавать новую задачу */}
				</Button>
				<Button onClick={handleOpenScheduleModal} variant="contained">
					Текущее расписание
				</Button>
			</div>
			<div className={styles.table_wrapper}>
				<Suspense fallback={<SpinLoader />}>
					<TaskTable isPagination />
				</Suspense>
			</div>
		</>
	);
};

export default Index;
