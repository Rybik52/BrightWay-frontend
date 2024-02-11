import { FlashDriveIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Modal from "components/common/Modal";
import styles from "components/OrganizationCard/OrganizationCard.module.scss";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
	deleteDigitalSignature,
	IDigitalSignature,
} from "store/digitalSignaturesSlice";

interface DigitalSignatureCardProps {
	data: IDigitalSignature;
}

const Index: FC<DigitalSignatureCardProps> = ({ data }) => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const { id, ownerName, INN, type, date, auth, orgTitle } = data;

	const handleDelete = (id: number) => {
		dispatch(deleteDigitalSignature(id));
		setShowModal(false);
	};

	return (
		<Card>
			<Modal showModal={showModal} setShowModal={setShowModal} exitButton>
				<div>
					<h3>ЭЦП будет удалена. Вы уверены?</h3>
					<p>
						Пользоваться сервисом без ЭЦП нельзя, вам необходимо
						будет добавить новую подпись
					</p>
				</div>
				<div className={styles.card_modal}>
					<Button
						onClick={() => handleDelete(id)}
						variant="contained"
					>
						Удалить
					</Button>
					<Button
						onClick={() => setShowModal(!showModal)}
						variant="outlined"
					>
						Отмена
					</Button>
				</div>
			</Modal>
			<header className={styles.card_header}>
				<FlashDriveIcon />
				<nav>
					<Button
						title="Удалить сертификат"
						onClick={() => setShowModal(!showModal)}
						variant="text"
					>
						Удалить
					</Button>
				</nav>
			</header>
			<div className={styles.card_info}>
				<h2>{ownerName}</h2>
				<div className={styles.card_info__data}>
					<div className={styles.card_info__data_container}>
						<span>Организация</span>
						<p>{orgTitle}</p>
						<span>ИНН</span>
						<p>{INN}</p>
						<span>Тип владельца</span>
						<p>{type}</p>
						<span>Срок действия</span>
						<p>{date}</p>
						<span>Удостоверяющий центр</span>
						<p>{auth}</p>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Index;
