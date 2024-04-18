import Modal from "components/common/Modal";
import styles from "./SelectDigitalSignature.module.scss";
import Button from "components/common/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "store/modalSlice";

const SuccessAddOrganization = () => {
	const navigator = useNavigate();
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: "SuccessAddOrganizationModal" }));
		navigator(0);
	};

	return (
		<Modal modalTitle="SuccessAddOrganizationModal" exitButton>
			<div className={styles.modal}>
				<div>
					<h3>Организация успешно добавлена</h3>
					<p>Она будет отражена в вашем кабинете</p>
				</div>
				<Button onClick={handleCloseModal} variant="contained">
					Закрыть
				</Button>
			</div>
		</Modal>
	);
};

export default SuccessAddOrganization;
