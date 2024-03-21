import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";
import styles from "./Modals.module.scss";
import { useEditUserMutation } from "store/api";

const AdminModal = () => {
	const dispatch = useDispatch();
	const data = useSelector(
		(state: RootState) => state.modal["AdminModal"]?.data
	);

	const [Edit] = useEditUserMutation();

	const handleMakeAdmin = () => {
		Edit({
			id: data.UserId,
			role: "ROLE_ADMIN",
		});
		handleClose();
	};

	const handleUnMakeAdmin = () => {
		Edit({
			id: data.UserId,
			role: "ROLE_USER",
		});
		handleClose();
	};

	const handleClose = () => {
		dispatch(closeModal({ modalId: "AdminModal" }));
	};

	if (!data) return null;

	const stateText =
		data.role === "ROLE_USER"
			? "Назначить администратором пользователя"
			: "Убрать роль администратора у пользователя";

	const renderedButtons =
		data.role === "ROLE_USER" ? (
			<Button onClick={handleMakeAdmin} variant="contained">
				Назначить
			</Button>
		) : (
			<Button onClick={handleUnMakeAdmin} variant="contained">
				Убрать роль
			</Button>
		);

	return (
		<Modal modalTitle="AdminModal" exitButton>
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

export default AdminModal;
