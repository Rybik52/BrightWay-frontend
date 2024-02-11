import Card from "components/common/Card";
import styles from "./DigitalSignature.module.scss";
import { FC } from "react";
import Button from "components/common/Button";
import { DigitalSignature } from "store/digitalSignaturesSlice";
interface DigitalSignatureProps {
	data: DigitalSignature;
	onClick: () => void;
}

const index: FC<DigitalSignatureProps> = ({ data, onClick }) => {
	const { id, ownerName, orgTitle } = data;
	return (
		<Card>
			<div className={styles.wrapper}>
				<h3 className={styles.header}>{`Сертификат ${id}`}</h3>
				<div className={styles.data}>
					<span>Владелец</span>
					<p>{ownerName}</p>
					<span>Организация</span>
					<p>{orgTitle}</p>
				</div>
				<Button onClick={onClick} variant="contained">
					Выбрать
				</Button>
			</div>
		</Card>
	);
};

export default index;
