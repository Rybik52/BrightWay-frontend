import OrganizationCard, {
	OrganizationCardData,
} from "components/OrganizationCard";
import styles from "./Organizations.module.scss";
import Card from "components/common/Card";

import PlusIco from "assets/plus.svg?react";
import { useState } from "react";
import FormOrganization from "./FormOrganization";

const Index = () => {
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

	const [isEditing, setIsEditing] = useState(false);
	const [selectedOrganization, setSelectedOrganization] = useState<
		OrganizationCardData | undefined
	>({} as OrganizationCardData);

	const handleEdit = (item: OrganizationCardData) => {
		setIsEditing(!isEditing);
		setSelectedOrganization(item);
	};

	if (newOrganization) {
		return <FormOrganization data={selectedOrganization} />;
	}

	if (isEditing) {
		return <FormOrganization isEdit data={selectedOrganization} />;
	}

	return (
		<>
			<h1>Мои организации</h1>
			<div className={styles.wrapper}>
				{data.map((item) => (
					<OrganizationCard
						onClick={() => handleEdit(item)}
						key={item.id}
						data={item}
					/>
				))}
				<button
					className={styles.add_card_button}
					onClick={() => setNewOrganization(!newOrganization)}
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
