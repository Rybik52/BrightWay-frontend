import Modal from "components/common/Modal";
import styles from "./Modals.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootState";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { closeModal } from "store/modalSlice";
import { useEditUserMutation } from "store/api";

const ChangePasswordModal = () => {
	const dispatch = useDispatch();
	const [Edit] = useEditUserMutation();

	const data = useSelector(
		(state: RootState) => state.modal["ChangeUserPasswordModal"]?.data
	);

	const handleClose = () => {
		dispatch(closeModal({ modalId: "ChangeUserPasswordModal" }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const newPassword = formData.get("password") as string;
		console.log(newPassword);

		Edit({
			id: data.id,
			password: newPassword,
		});

		dispatch(closeModal({ modalId: "ChangeUserPasswordModal" }));
	};

	return (
		<Modal modalTitle="ChangeUserPasswordModal" exitButton>
			<h2 className={styles.header}>
				Изменить пароль пользователю
				<br /> {data.name}
			</h2>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="Введите новый пароль"
					name="password"
					type="password"
				/>
				<div className={styles.buttons}>
					<Button type="submit" variant="contained">
						Изменить
					</Button>
					<Button
						type="button"
						onClick={handleClose}
						variant="cancel"
					>
						Отмена
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default ChangePasswordModal;
