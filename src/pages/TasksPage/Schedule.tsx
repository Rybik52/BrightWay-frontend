import Button from "components/common/Button";
import Modal from "components/common/Modal";
import styles from "./TasksPage.module.scss";
import { FC } from "react";

interface ScheduleProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
	onClicked: (showModalEdit: boolean) => void;
}

const Schedule: FC<ScheduleProps> = ({
	showModal,
	setShowModal,
	onClicked,
}) => {
	const handelClick = () => {
		setShowModal(false);
		onClicked(true);
	};

	return (
		<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
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

export default Schedule;
