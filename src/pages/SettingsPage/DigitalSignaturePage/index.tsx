import styles from "pages/SettingsPage/OrganizationsPage/Organizations.module.scss"
import DigitalSignatureCard from "components/DigitalSignatureCard"
import Card from "components/common/Card"
import PlusIco from "assets/plus.svg?react"
import SelectDigitalSignature from "../OrganizationsPage/DigitalSignature/SelectDigitalSignature"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store/rootState"
import { useGetSelfQuery } from "store/api"
import SpinLoader from "components/common/SpinLoader"

const Index = () => {
	const [createNewDigitalSignature, setCreateNewDigitalSignature] =
		useState(false)

	const digitalSignatures = useSelector(
		(state: RootState) => state.digitalSignatures.data
	)

	const { data: userData, isLoading } = useGetSelfQuery({})
	const showControls = userData?.roles[0] === "admin"

	if (isLoading) {
		return <SpinLoader />
	}

	if (createNewDigitalSignature) {
		return <SelectDigitalSignature />
	}

	return (
		<>
			<h1>Электронная подпись</h1>
			<div className={styles.wrapper}>
				{digitalSignatures.map((item) => {
					return (
						<DigitalSignatureCard
							controls={showControls}
							key={item.id}
							data={item}
						/>
					)
				})}
				{showControls && (
					<button
						className={styles.add_card_button}
						onClick={() =>
							setCreateNewDigitalSignature(
								!createNewDigitalSignature
							)
						}
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
