import DigitalSignature from "components/DigitalSignature";
import styles from "./DigitalSignaturePage.module.scss";
import Card from "components/common/Card";
import Button from "components/common/Button";
import Helper from "components/Helper";

const index = () => {
	const data = [
		{
			id: 1,
			title: "ЭЦП 1",
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
			<div className={styles.grid_items}>
				{data.map((item) => (
					<DigitalSignature key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default index;
