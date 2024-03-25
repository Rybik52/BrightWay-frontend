import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";
import styles from "./Modals.module.scss";
import { useToggleBlockUserMutation } from "store/api";

const BlockModal = () => {
	const dispatch = useDispatch();
	const data = useSelector(
		(state: RootState) => state.modal["BlockModal"]?.data
	);

	const [ToggleBlock] = useToggleBlockUserMutation();
	const handleToggleBlock = () => {
		ToggleBlock(data.UserId);
		handleClose();
	};

	const handleClose = () => {
		dispatch(closeModal({ modalId: "BlockModal" }));
	};

	if (!data) return null;

	const stateText = data.state.isBlocked
		? "Разблокировать аккаунт пользователя"
		: "Заблокировать пользователя";

	const renderedButtons = data.state.isBlocked ? (
		<Button onClick={handleToggleBlock} variant="contained">
			Разблокировать
		</Button>
	) : (
		<Button onClick={handleToggleBlock} variant="contained">
			Заблокировать
		</Button>
	);

	return (
		<Modal modalTitle="BlockModal" exitButton>
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

export default BlockModal;
