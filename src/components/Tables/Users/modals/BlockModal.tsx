import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "store/modalSlice";
import { RootState } from "store/rootState";
import styles from "./Modals.module.scss";
import { useChangeUserRoleAndStateMutation } from "store/api";

const BlockModal = () => {
	const dispatch = useDispatch();
	const [block] = useChangeUserRoleAndStateMutation();
	const data = useSelector(
		(state: RootState) => state.modal["BlockModal"]?.data
	);

	const handleToggleBlock = async (status: string) => {
		try {
			await block({
				id: data.UserId,
				state: {
					status,
					status_time: new Date(),
				},
			});
			dispatch(closeModal({ modalId: "BlockModal" }));
		} catch (error) {
			console.error("Ошибка при отправке запроса на блокировку:", error);
		}
	};

	const handleClose = () => {
		dispatch(closeModal({ modalId: "BlockModal" }));
	};

	if (!data) return null;

	const stateText =
		data.state.status === "blocked"
			? "Разблокировать аккаунт пользователя"
			: "Заблокировать пользователя";

	const renderedButtons =
		data.state.status === "blocked" ? (
			<Button variant="contained">Разблокировать</Button>
		) : (
			<Button
				onClick={() => handleToggleBlock("blocked")}
				variant="contained"
			>
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
