import { BankIcon, PencilIcon, TrashIcon } from "assets/IconsComponent"
import Button from "components/common/Button"
import Card from "components/common/Card"
import styles from "./OrganizationCard.module.scss"
import { FC } from "react"
import Modal from "components/common/Modal"
import { useDispatch } from "react-redux"
import { IOrganization, deleteOrganization } from "store/organizationsSlice"
import { closeModal, openModal } from "store/modalSlice"

interface OrganizationCardProps {
	data: IOrganization
	onClick?: () => void
	controls?: boolean
}

const Index: FC<OrganizationCardProps> = ({ data, onClick, controls }) => {
	const dispatch = useDispatch()

	const {
		id,
		organizationTitle,
		organizationINN,
		address,
		ownerName,
		ownerINN
	} = data

	const handleOpenModal = () => {
		dispatch(openModal({ modalId: "OrganizationCardConfirm" }))
	}
	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: "OrganizationCardConfirm" }))
	}

	const handleDelete = (id: number) => {
		dispatch(deleteOrganization(id))
		dispatch(closeModal({ modalId: "OrganizationCardConfirm" }))
	}

	return (
		<Card>
			<Modal modalTitle="OrganizationCardConfirm" exitButton>
				<h3>Данные будут удалены. Вы уверены?</h3>
				<div className={styles.card_modal}>
					<Button
						onClick={() => handleDelete(id)}
						variant="contained"
					>
						Удалить
					</Button>
					<Button onClick={handleCloseModal} variant="outlined">
						Отмена
					</Button>
				</div>
			</Modal>
			<header className={styles.card_header}>
				<BankIcon />
				{controls && (
					<nav>
						<Button
							onClick={onClick}
							title="Редактировать организацию"
							variant="text"
						>
							<PencilIcon />
						</Button>
						<Button
							title="Удалить организацию"
							onClick={handleOpenModal}
							variant="text"
						>
							<TrashIcon />
						</Button>
					</nav>
				)}
			</header>
			<div className={styles.card_info}>
				<h2>{organizationTitle}</h2>
				<div className={styles.card_info__data}>
					<h3>Данные организации</h3>
					<div className={styles.card_info__data_container}>
						<span>ИНН</span>
						<p>{organizationINN}</p>
					</div>
					<div className={styles.card_info__data_container}>
						<span>Адрес</span>
						<p>{address}</p>
					</div>
				</div>
				<div className={styles.card_info__data}>
					<h3>Сертификат</h3>
					<div className={styles.card_info__data_container}>
						<span>Владелец</span>
						<p>{ownerName}</p>
					</div>
					<div className={styles.card_info__data_container}>
						<span>ИНН</span>
						<p>{ownerINN}</p>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default Index
