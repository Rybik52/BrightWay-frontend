import OrganizationCard from "components/OrganizationCard";
import styles from "./Organizations.module.scss";
import Card from "components/common/Card";

import PlusIco from "assets/plus.svg?react";
import { useState } from "react";
import AddOrganization from "./AddOrganization";

const index = () => {
	const [newOrganization, setNewOrganization] = useState(false);
	const data = [
		{
			id: 1,
			organizationTitle: "ООО “Название организации”",
			organizationINN: 12345678902,
			address: "656 000, г. Москва, ул. Иванова, 1В, офис 230",
			ownerName: "Иванов Иван Иванович",
			ownerINN: 12345678902,
		},
		{
			id: 2,
			organizationTitle: "ООО “Название организации”",
			organizationINN: 12345678902,
			address: "656 000, г. Москва, ул. Иванова, 1В, офис 230",
			ownerName: "Иванов Иван Иванович",
			ownerINN: 12345678902,
		},
	];

	if (newOrganization) {
		return <AddOrganization />;
	}

	return (
		<>
			<h1>Мои организации</h1>
			<div className={styles.wrapper}>
				{data.map((item) => (
					<OrganizationCard key={item.id} data={item} />
				))}
				<Card title="Добавить организацию">
					<div
						onClick={() => setNewOrganization(!newOrganization)}
						className={styles.add_card}
					>
						<PlusIco />
					</div>
				</Card>
			</div>
		</>
	);
};

export default index;
