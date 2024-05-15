import Button from "components/common/Button"
import Modal from "components/common/Modal"
import styles from "./Sidebar.module.scss"
import { useDispatch } from "react-redux"
import { closeModal } from "store/modalSlice"
import { useKeycloak } from "@react-keycloak/web"

const ExitModal = () => {
	const dispatch = useDispatch()
	const { keycloak } = useKeycloak()

	const handleClose = () => {
		dispatch(closeModal({ modalId: "ExitModal" }))
		keycloak.logout().then((r) => console.log(r))
	}

	return (
		<Modal modalTitle="ExitModal" exitButton>
			<div className={styles.modal_exit}>
				<h3>Выйти из аккаунта?</h3>
				<div className={styles.modal_exit__buttons}>
					<Button variant="contained" onClick={handleClose}>
						Выйти
					</Button>
					<Button variant="cancel" onClick={handleClose}>
						Отмена
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ExitModal
