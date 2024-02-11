import OrganizationCard from "components/OrganizationCard";
import styles from "./Organizations.module.scss";
import Card from "components/common/Card";

import PlusIco from "assets/plus.svg?react";
import { useState } from "react";
import FormOrganization from "./FormOrganization";
import { useSelector } from "react-redux";
import { RootState } from "store/rootState"; // Путь зависит от вашей структуры проекта
import { IOrganization } from "store/organizationsSlice";

const Index = () => {
	const [newOrganization, setNewOrganization] = useState(false);
	const data = useSelector((state: RootState) => state.organizations.data);

	const [isEditing, setIsEditing] = useState(false);
	const [selectedOrganization, setSelectedOrganization] = useState<
		IOrganization | undefined
	>({} as IOrganization);

	const handleEdit = (item: IOrganization) => {
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
