import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { FC } from "react";

import styles from "../Table.module.scss";

interface DeleteTaskModalProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({
	showModal,
	setShowModal,
}) => {
	return (
		<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
			<div className={styles.modal}>
				<h3>Задание удалено</h3>
				<Button onClick={() => setShowModal(false)} variant="contained">
					Вернуться к заданиям
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteTaskModal;
