import DigitalSignature, {
	DigitalSignatureData,
} from "components/DigitalSignature";
import Helper from "components/Helper";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { useState } from "react";
import EnterPassword from "./EnterPassword";
import styles from "./SelectDigitalSignature.module.scss";

const SelectDigitalSignature = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [selectedSignature, setSelectedSignature] =
		useState<DigitalSignatureData>();

	const handleSelect = (signature: DigitalSignatureData) => {
		setSelectedSignature(signature);
		setIsEditing(true);
	};

	const data: DigitalSignatureData[] = [
		{
			id: 1,
			title: "ЭЦП 1",
			owner: "Иванов Иван Иванович",
			org: "ООО “Название организации”",
		},
		{
			id: 2,
			title: "ЭЦП 2",
			owner: "Иванов Иван Иванович",
			org: "ООО “Название организации”",
		},
	];

	if (data.length === 0) {
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
					{data.map((item) => (
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
