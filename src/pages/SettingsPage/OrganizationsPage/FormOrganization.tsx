import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Card from "components/common/Card";
import Input from "components/common/Input";
import styles from "./Organizations.module.scss";
import Button from "components/common/Button";
import DropDown, { DropDownItem } from "components/common/DropDown";
import SelectDigitalSignature from "./DigitalSignature/SelectDigitalSignature";
import { IOrganization } from "store/organizationsSlice";

interface IFormInput {
	user_id: string;
	org: string;
	address: string;
	INN: number;
	phone: string;
	client_secret: DropDownItem[];
	client_id: DropDownItem[];
}

interface AddOrganizationProps {
	isEdit?: boolean;
	data?: IOrganization;
}

const FormOrganization: FC<AddOrganizationProps> = ({ isEdit, data }) => {
	const { organizationINN, organizationTitle, address } = data!;

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<IFormInput>();

	const [createNewOrganization, setCreateNewOrganization] = useState(false);

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
		setCreateNewOrganization(!createNewOrganization);
	};

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

	if (createNewOrganization) {
		return <SelectDigitalSignature />;
	}

	return (
		<div className={styles.form_wrapper}>
			<Card>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isEdit ? (
						<h2>Редактировать организацию</h2>
					) : (
						<div>
							<h2>Добавить организацию</h2>
							<p>Введите необходимые данные</p>
						</div>
					)}

					<div className={styles.container_inputs}>
						<div className={styles.container_inputs__row}>
							<DropDown
								onChange={(selectedItems) => {
									setValue("client_secret", selectedItems);
								}}
								isValidated={!!errors.client_secret}
								multiple
								items={client_secret}
								title="client_secret*"
							/>
							{errors.client_secret && (
								<span className={styles.error}>
									This field is required.
								</span>
							)}
							<DropDown
								onChange={(selectedItems) => {
									setValue("client_id", selectedItems);
								}}
								isValidated={!!errors.client_id}
								items={client_id}
								title="client_id*"
							/>
							{errors.client_id && (
								<span className={styles.error}>
									This field is required.
								</span>
							)}
						</div>
						<Input
							{...register("user_id", { required: true })}
							type="text"
							placeholder="user_id*"
							isValidated={!!errors.user_id}
						/>
						<Input
							{...register("org", { required: true })}
							type="text"
							placeholder={
								organizationTitle || "Название организации*"
							}
							isValidated={!!errors.org}
						/>
					</div>
					<div className={styles.container_inputs}>
						<p>Дополнительные данные</p>
						<Input
							{...register("INN")}
							type="text"
							placeholder={
								(!!organizationINN && `${organizationINN}`) ||
								"ИНН"
							}
						/>
						<Input
							{...register("address")}
							type="address"
							placeholder={address || "Адрес"}
						/>
						<Input
							{...register("phone")}
							type="tel"
							placeholder="Телефон"
						/>
					</div>
					<Button type="submit" variant="contained">
						{isEdit ? "Сохранить" : "Добавить"}
					</Button>
				</form>
			</Card>
		</div>
	);
};

export default FormOrganization;
