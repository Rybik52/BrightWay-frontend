import { BankIcon, PencilIcon, TrashIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import Card from "components/common/Card";
import styles from "./OrganizationCard.module.scss";
import { FC, useState } from "react";
import Modal from "components/common/Modal";

export interface OrganizationCardData {
	organizationTitle: string;
	organizationINN: number;
	address: string;
	ownerName: string;
	ownerINN: number;
}

interface OrganizationCardProps {
	data: OrganizationCardData;
	onClick?: () => void;
}

const index: FC<OrganizationCardProps> = ({ data, onClick }) => {
	const { organizationTitle, organizationINN, address, ownerName, ownerINN } =
		data;
		
	const [showModal, setShowModal] = useState(false);

	return (
		<Card>
			<Modal showModal={showModal} setShowModal={setShowModal} exitButton>
				<h3>Данные будут удалены. Вы уверены?</h3>
				<div className={styles.card_modal}>
					<Button variant="contained">Удалить</Button>
					<Button
						onClick={() => setShowModal(!showModal)}
						variant="outlined"
					>
						Отмена
					</Button>
				</div>
			</Modal>
			<header className={styles.card_header}>
				<BankIcon />
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
						onClick={() => setShowModal(!showModal)}
						variant="text"
					>
						<TrashIcon />
					</Button>
				</nav>
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
	);
};

export default index;
