import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";
import styles from "./Modals.module.scss";

const DeleteModal = () => {
	const dispatch = useDispatch();
	const data = useSelector(
		(state: RootState) => state.modal["DeleteModal"]?.data
	);

	// const id = data?.UserId;
	// const { data: deleteUserData } = useDeleteUserQuery(id);

	const handleDelete = () => {
		// console.log(deleteUserData);

		dispatch(closeModal({ modalId: "DeleteModal" }));
	};

	const handleClose = () => {
		dispatch(closeModal({ modalId: "DeleteModal" }));
	};

	if (!data) return null;

	const stateText =
		data.state.status === "deleted"
			? "Восстановить аккаунт пользователя"
			: "Удалить пользователя";

	const renderedButtons =
		data.state.status === "deleted" ? (
			<Button variant="contained">Восстановить</Button>
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
