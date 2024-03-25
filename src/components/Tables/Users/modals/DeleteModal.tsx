import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";
import styles from "./Modals.module.scss";
import { useDeleteUserMutation, useRecoveryUserMutation } from "store/api";

const DeleteModal = () => {
	const dispatch = useDispatch();
	const data = useSelector(
		(state: RootState) => state.modal["DeleteModal"]?.data
	);

	const [Delete] = useDeleteUserMutation();
	const [Recovery] = useRecoveryUserMutation();

	const handleDelete = () => {
		console.log("Удалён пользователь " + data.UserId);
		Delete(data.UserId);
		dispatch(closeModal({ modalId: "DeleteModal" }));
	};

	const handleRecovery = () => {
		console.log(
			"Восстановлен пользователь " + data.UserId + " - " + data.name
		);
		Recovery(data.UserId);
		dispatch(closeModal({ modalId: "DeleteModal" }));
	};

	const handleClose = () => {
		dispatch(closeModal({ modalId: "DeleteModal" }));
	};

	if (!data) return null;

	const stateText = data.state.isDeleted
		? "Восстановить аккаунт пользователя"
		: "Удалить пользователя";

	const renderedButtons = data.state.isDeleted ? (
		<Button onClick={handleRecovery} variant="contained">
			Восстановить
		</Button>
	) : (
		<Button onClick={handleDelete} variant="contained">
			Удалить
		</Button>
	);

	return (
		<Modal modalTitle="DeleteModal" exitButton>
			<h2 className={styles.header}>
				{stateText}
				<br /> {data.name}?
			</h2>
			<div className={styles.buttons}>
				{renderedButtons}
				<Button onClick={handleClose} variant="cancel">
					Отмена
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteModal;
