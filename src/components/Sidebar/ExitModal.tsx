import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";

interface ExitModal {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const ExitModal: FC<ExitModal> = ({ showModal, setShowModal }) => {
	const navigate = useNavigate();
	return (
		<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
			<div className={styles.modal_exit}>
				<h3>Выйти из аккаунта?</h3>
				<div className={styles.modal_exit__buttons}>
					<Button
						variant="contained"
						onClick={() => {
							navigate("/login");
						}}
					>
						Выйти
					</Button>
					<Button
						variant="outlined"
						style={{ color: "gray", borderColor: "gray" }}
						onClick={() => setShowModal(false)}
					>
						Отмена
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ExitModal;
