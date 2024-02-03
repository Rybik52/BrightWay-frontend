import styles from "./TasksPage.module.scss";
import TaskTable from "components/TaskTable";
import Button from "components/common/Button";

const index = () => {
	return (
		<>
			<h1 className={styles.header}>
				Текущие задания в очереди на выгрузку
			</h1>
			<div className={styles.buttons_wrapper}>
				<Button variant="outlined">Одинарное задание +</Button>
				<Button variant="outlined">Задание по расписанию +</Button>
				<Button variant="contained">Текущее расписание</Button>
			</div>
			<div className={styles.table_wrapper}>
				<TaskTable isPagination />
			</div>
		</>
	);
};

export default index;
