import DigitalSignature from "components/DigitalSignature";
import Helper from "components/Helper";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { useState } from "react";
import EnterPassword from "./EnterPassword";
import styles from "./SelectDigitalSignature.module.scss";
import { RootState } from "store/rootState";
import { useSelector } from "react-redux";
import { IDigitalSignature } from "store/digitalSignaturesSlice";

const SelectDigitalSignature = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [selectedSignature, setSelectedSignature] =
		useState<IDigitalSignature>();

	const handleSelect = (signature: IDigitalSignature) => {
		setSelectedSignature(signature);
		setIsEditing(true);
	};

	const digitalSignatures = useSelector(
		(state: RootState) => state.digitalSignatures.data
	);

	if (digitalSignatures.length === 0) {
		return (
			<div className={styles.wrapper}>
				<Card>
					<h3>ЭЦП не найдена. Попробуйте еще раз</h3>
					<Helper
						title="Как исправить?"
						description="Ваша ЭЦП отобразится в окне автоматически, если необходимые сертификаты установлены на вашем компьютере или флеш-диск с ЭЦП вставлен в устройство. Также вы можете обратиться в тех. поддержку"
					/>
					<Button variant="contained">Обновить</Button>
				</Card>
			</div>
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h2>Добавить электронную подпись</h2>
				<p>К каждой организации необходимо привязать ЭЦП</p>
			</div>

			{isEditing ? (
				<EnterPassword data={selectedSignature} />
			) : (
				<div className={styles.grid_items}>
					{digitalSignatures.map((item) => (
						<DigitalSignature
							onClick={() => handleSelect(item)}
							key={item.id}
							data={item}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectDigitalSignature;
