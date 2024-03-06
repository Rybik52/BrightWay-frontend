import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import { FC } from "react";
import styles from "./UserPage.module.scss";

interface AddUserModalProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const AddUserModal: FC<AddUserModalProps> = ({ showModal, setShowModal }) => {
	return (
		<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
			<div className={styles.wrapper}>
				<div className={styles.wrapper__header}>
					<h3>Добавить нового пользователя</h3>
					<p>Введите данные пользователя</p>
				</div>
				<form className={styles.wrapper__form}>
					<Input placeholder="ФИО*" type="text" />
					<Input placeholder="Email*" type="text" />
					<Input placeholder="Пароль*" type="password" />
					<div className={styles.wrapper__form_buttons}>
						<Button type="submit" variant="contained">
							Отправить
						</Button>
						<Button variant="cancel">Отмена</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default AddUserModal;
