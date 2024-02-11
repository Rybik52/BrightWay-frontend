import Button from "components/common/Button";
import Card from "components/common/Card";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import styles from "components/DigitalSignature/DigitalSignature.module.scss";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IDigitalSignature } from "store/digitalSignaturesSlice";

interface EnterPasswordProps {
	data?: IDigitalSignature;
}

const EnterPassword: FC<EnterPasswordProps> = ({ data }) => {
	const { id, ownerName, orgTitle } = data!;
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
					<h3 className={styles.header}>{`Сертификат ${id}`}</h3>
					<div className={styles.data}>
						<span>Владелец</span>
						<p>{ownerName}</p>
						<span>Организация</span>
						<p>{orgTitle}</p>
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
