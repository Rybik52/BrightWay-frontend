import Button from "components/common/Button";
import Modal from "components/common/Modal";
import styles from "components/Tables/Table.module.scss";
import { useDispatch } from "react-redux";
import { closeModal } from "store/modalSlice";

const DeleteTaskModal = () => {
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(closeModal({ modalId: "DeleteTaskModal" }));
	};

	return (
		<Modal modalTitle="DeleteTaskModal" exitButton>
			<div className={styles.modal}>
				<h3>Задание удалено</h3>
				<Button onClick={handleClose} variant="contained">
					Вернуться к заданиям
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteTaskModal;
