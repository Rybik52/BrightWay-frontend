import Button from "components/common/Button";
import Modal from "components/common/Modal";
import styles from "components/Tables/Table.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteTaskFromQueueMutation } from "store/api";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";

const DeleteTaskModal = () => {
	const dispatch = useDispatch();
	const data = useSelector(
		(state: RootState) => state.modal["DeleteTaskModal"]?.data
	);

	const [Delete] = useDeleteTaskFromQueueMutation();

	const handleClose = () => {
		dispatch(closeModal({ modalId: "DeleteTaskModal" }));
	};

	const handleDelete = (id: number) => {
		handleClose();
		Delete(id);
	};

	return (
		<Modal modalTitle="DeleteTaskModal" exitButton>
			<div className={styles.modal}>
				<h3>Вы уверены что хотите удалить задание?</h3>
				<Button onClick={() => handleDelete(data)} variant="contained">
					Удалить
				</Button>
				<Button onClick={handleClose} variant="cancel">
					Отмена
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteTaskModal;
