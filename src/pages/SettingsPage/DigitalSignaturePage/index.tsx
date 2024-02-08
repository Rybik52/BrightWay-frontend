import styles from "pages/SettingsPage/OrganizationsPage/Organizations.module.scss";
import DigitalSignatureCard from "components/DigitalSignatureCard";
import Card from "components/common/Card";
import PlusIco from "assets/plus.svg?react";
import SelectDigitalSignature from "../OrganizationsPage/DigitalSignature/SelectDigitalSignature";
import { useState } from "react";

const Index = () => {
	const [createNewDigitalSignature, setCreateNewDigitalSignature] =
		useState(false);

	const data = [
		{
			ownerName: "Иванов Иван Иванович",
			INN: 1234567890,
			type: "Физическое лицо",
			date: "01.01.2021",
			auth: "Сотрудник",
			orgTitle: "ООО Рога и копыта",
		},
		{
			ownerName: "Иванов Иван Иванович",
			INN: 1234567890,
			type: "Физическое лицо",
			date: "01.01.2021",
			auth: "Сотрудник",
			orgTitle: "ООО Рога и копыта",
		},
		{
			ownerName: "Иванов Иван Иванович",
			INN: 1234567890,
			type: "Физическое лицо",
			date: "01.01.2021",
			auth: "Сотрудник",
			orgTitle: "ООО Рога и копыта",
		},
	];

	if (createNewDigitalSignature) {
		return <SelectDigitalSignature />;
	}
	return (
		<>
			<h1>Электронная подпись</h1>
			<div className={styles.wrapper}>
				{data.map((item, index) => {
					return <DigitalSignatureCard key={index} data={item} />;
				})}
				<button
					className={styles.add_card_button}
					onClick={() =>
						setCreateNewDigitalSignature(!createNewDigitalSignature)
					}
				>
					<Card title="Добавить организацию">
						<div className={styles.add_card}>
							<PlusIco />
						</div>
					</Card>
				</button>
			</div>
		</>
	);
};

export default Index;
