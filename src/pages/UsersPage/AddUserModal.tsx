import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import { FC } from "react";
import styles from "./UserPage.module.scss";
import st from "pages/LoginPage/LoginPage.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddUserMutation } from "store/api";

interface AddUserModalProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

interface IFormInput {
	username: string;
	fullName: string;
	password: string;
}

const AddUserModal: FC<AddUserModalProps> = ({ showModal, setShowModal }) => {
	const [addUser, { isError, isLoading }] = useAddUserMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		addUser(data);
		setShowModal(false);
	};

	return (
		<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
			<div className={styles.wrapper}>
				<div className={styles.wrapper__header}>
					<h3>Добавить нового пользователя</h3>
					<p>Введите данные пользователя</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.wrapper__form}
				>
					{isError && <span>Ошибка при создании пользователя</span>}
					<Input
						{...register("fullName", {
							required: "Это обязательное поле*",
						})}
						placeholder="ФИО*"
						type="text"
						isValidated={!!errors.fullName}
					/>
					{errors.fullName && (
						<span className={st.error} role="alert">
							{errors.fullName.message}
						</span>
					)}
					<Input
						{...register("username", {
							required: "Это обязательное поле*",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: "Неверный email*",
							},
						})}
						placeholder="Email*"
						type="text"
						isValidated={!!errors.username}
					/>
					{errors.username && (
						<span className={st.error} role="alert">
							{errors.username.message}
						</span>
					)}
					<Input
						{...register("password", {
							required: "Это обязательное поле*",
						})}
						placeholder="Пароль*"
						type="password"
						isValidated={!!errors.password}
					/>
					{errors.password && (
						<span className={st.error} role="alert">
							{errors.password.message}
						</span>
					)}
					<div className={styles.wrapper__form_buttons}>
						<Button
							disabled={isLoading}
							type="submit"
							variant="contained"
						>
							Отправить
						</Button>
						<Button
							type="button"
							onClick={() => setShowModal(false)}
							variant="cancel"
						>
							Отмена
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default AddUserModal;
