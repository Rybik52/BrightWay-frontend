import Button from "components/common/Button";
import Modal from "components/common/Modal";
import styles from "./TasksPage.module.scss";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "store/modalSlice";

const ScheduleModal = () => {
	const dispatch = useDispatch();

	const handelClick = () => {
		dispatch(openModal({ modalId: "EditScheduleModal" }));
		dispatch(closeModal({ modalId: "ScheduleModal" }));
	};

	return (
		<Modal modalTitle="ScheduleModal" exitButton>
			<div className={styles.modal}>
				<h3>Текущее расписание заданий</h3>
				<div className={styles.modal__grid}>
					<span>Отчеты</span>
					<p>2</p>
					<span>Дни недели</span>
					<p>Пн, Вт, Ср</p>
					<span>Время</span>
					<p>16:00</p>
				</div>
				<div className={styles.modal__buttons}>
					<Button onClick={() => handelClick()} variant="contained">
						Изменить
					</Button>
					<Button variant="outlined">Удалить</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ScheduleModal;
