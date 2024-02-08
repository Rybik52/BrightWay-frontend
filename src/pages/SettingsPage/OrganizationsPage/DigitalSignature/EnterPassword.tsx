import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import { DigitalSignatureData } from "components/DigitalSignature";
import styles from "components/DigitalSignature/DigitalSignature.module.scss";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface EnterPasswordProps {
	data?: DigitalSignatureData;
}

const EnterPassword: FC<EnterPasswordProps> = ({ data }) => {
	const { title, owner, org } = data!;
	const [showModal, setShowModal] = useState(false);
	const navigator = useNavigate();

	type Inputs = {
		password: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		setShowModal(!showModal);
	};

	return (
		<>
			<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
				<div className={styles.modal}>
					<div>
						<h3>Организация успешна добавлена</h3>
						<p>Она будет отражена в вашем кабинете</p>
					</div>
					<Button
						onClick={() => {
							setShowModal(!showModal);
							navigator(0);
						}}
						variant="contained"
					>
						Закрыть
					</Button>
				</div>
			</Modal>
			<Card>
				<div className={styles.wrapper}>
					<h3 className={styles.header}>{title}</h3>
					<div className={styles.data}>
						<span>Владелец</span>
						<p>{owner}</p>
						<span>Организация</span>
						<p>{org}</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.form}
					>
						<div>
							<h4>Введите пароль от контейнера</h4>
							<p>
								Загрузив ЭЦП вам нужно ввести пароль от
								контейнера
							</p>
						</div>
						<Input
							{...register("password", {
								required: "Это обязательное поле*",
							})}
							disabled={showModal && true}
							type="password"
							placeholder="Введите пароль*"
							isValidated={!!errors.password}
						/>
						{errors.password && (
							<span className={styles.error}>
								{errors.password.message}
							</span>
						)}
						<Button type="submit" variant="contained">
							Отправить
						</Button>
					</form>
				</div>
			</Card>
		</>
	);
};

export default EnterPassword;
