import OrganizationCard from "components/OrganizationCard"
import styles from "./Organizations.module.scss"
import Card from "components/common/Card"

import PlusIco from "assets/plus.svg?react"
import { useState } from "react"
import FormOrganization from "./FormOrganization"
import { useSelector } from "react-redux"
import { RootState } from "store/rootState" // Путь зависит от вашей структуры проекта
import { IOrganization } from "store/organizationsSlice"
import { useGetSelfQuery } from "store/api"
import SpinLoader from "components/common/SpinLoader"

const Index = () => {
	const [newOrganization, setNewOrganization] = useState(false)
	const data = useSelector((state: RootState) => state.organizations.data)
	const { data: userData, isLoading } = useGetSelfQuery({})

	const [isEditing, setIsEditing] = useState(false)
	const [selectedOrganization, setSelectedOrganization] = useState<
		IOrganization | undefined
	>({} as IOrganization)

	const showControls = userData?.roles[0] === "admin"

	const handleEdit = (item: IOrganization) => {
		setIsEditing(!isEditing)
		setSelectedOrganization(item)
	}

	if (isLoading) {
		return <SpinLoader />
	}

	if (newOrganization) {
		return <FormOrganization data={selectedOrganization} />
	}

	if (isEditing) {
		return <FormOrganization isEdit data={selectedOrganization} />
	}

	return (
		<>
			<h1>Мои организации</h1>
			<div className={styles.wrapper}>
				{data.map((item) => (
					<OrganizationCard
						controls={showControls}
						onClick={() => handleEdit(item)}
						key={item.id}
						data={item}
					/>
				))}
				{showControls && (
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
				)}
			</div>
		</>
	)
}

export default Index
