import Card from "components/common/Card";
import Input from "components/common/Input";
import styles from "./Organizations.module.scss";
import Button from "components/common/Button";
import DropDown from "components/common/DropDown";

const AddOrganization = () => {
	const client_secret = [
		{ id: 1, value: "client_secret" },
		{ id: 2, value: "client_secret2" },
		{ id: 3, value: "client_secret3" },
		{ id: 4, value: "client_secret4" },
	];

	const client_id = [
		{ id: 1, value: "client_id" },
		{ id: 2, value: "client_id2" },
	];

	return (
		<div className={styles.form_wrapper}>
			<Card>
				<form>
					<h2>Добавить организацию</h2>
					<p>Введите необходимые данные</p>
					<div className={styles.container_inputs}>
						<div className={styles.container_inputs__row}>
							<DropDown
								multiple
								items={client_secret}
								title="client_secret*"
							/>
							<DropDown items={client_id} title="client_id*" />
						</div>
						<Input required type="text" placeholder="user_id*" />
						<Input
							required
							type="text"
							placeholder="Название организации*"
						/>
					</div>
					<div className={styles.container_inputs}>
						<p>Дополнительные данные</p>
						<Input type="text" placeholder="ИНН" />
						<Input type="address" placeholder="Адрес" />
						<Input type="tel" placeholder="Телефон" />
					</div>
					<Button type="submit" variant="contained">
						Добавить
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddOrganization;
