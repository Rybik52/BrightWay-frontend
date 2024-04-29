import Button from "components/common/Button";
import Modal from "components/common/Modal";
import { useDispatch } from "react-redux";
import { closeModal } from "store/modalSlice";
import styles from "./SupportPage.module.scss";

const SuccessModal = () => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal({ modalId: "SupportSuccessModal" }));
	};

	return (
		<Modal modalTitle="SupportSuccessModal">
			<div className={styles.modalWrapper}>
				<h2>Запрос успешно отправлен</h2>
				<p>
					Запрос отправлен в тех.поддержку, в скором времени вам
					ответят
				</p>
				<Button onClick={handleClose} variant="contained">
					Закрыть
				</Button>
			</div>
		</Modal>
	);
};

export default SuccessModal;
