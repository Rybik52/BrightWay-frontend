import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { useDispatch } from "react-redux";
import { closeModal } from "store/modalSlice";

const ExitModal = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal({ modalId: "ExitModal" }));
	};

	return (
		<Modal modalTitle="ExitModal" exitButton>
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
					<Button variant="cancel" onClick={handleClose}>
						Отмена
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ExitModal;
