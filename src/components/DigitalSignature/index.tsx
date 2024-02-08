import Card from "components/common/Card";
import styles from "./DigitalSignature.module.scss";
import { FC } from "react";
import Button from "components/common/Button";

export interface DigitalSignatureData {
	id: number;
	title: string;
	owner: string;
	org: string;
}

interface DigitalSignatureProps {
	data: DigitalSignatureData;
	onClick: () => void;
}

const index: FC<DigitalSignatureProps> = ({ data, onClick }) => {
	const { title, owner, org } = data;
	return (
		<Card>
			<div className={styles.wrapper}>
				<h3 className={styles.header}>{title}</h3>
				<div className={styles.data}>
					<span>Владелец</span>
					<p>{owner}</p>
					<span>Организация</span>
					<p>{org}</p>
				</div>
				<Button onClick={onClick} variant="contained">
					Выбрать
				</Button>
			</div>
		</Card>
	);
};

export default index;
