import { useState } from "react";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { LockIcon } from "assets/IconsComponent";

import ForgotPassword from "./ChangePassword";
import styles from "./ProfilePage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "components/common/Modal";
import { useNavigate } from "react-router-dom";

const index = () => {
	const navigate = useNavigate();

	const [isVisible, setIsVisible] = useState(false);
	const [showModal, setShowModal] = useState(false);

	type Inputs = {
		name: string;
		email: string;
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

	const handleCloseModal = () => {
		navigate(-1);
	};

	if (isVisible) {
		return <ForgotPassword />;
	}

	return (
		<>
			<Modal
				goBack
				exitButton
				showModal={showModal}
				setShowModal={setShowModal}
			>
				<div className={styles.modal_wrapper}>
					<h3>Ваши данные изменены</h3>
					<Button
						style={{ alignSelf: "flex-start", marginTop: "1rem" }}
						onClick={handleCloseModal}
						variant="contained"
					>
						Вернуться к настройкам
					</Button>
				</div>
			</Modal>
			<div className={styles.wrapper}>
				<div>
					<h3>Данные пользователя</h3>
					<p>
						Вы можете поменять ФИО, email, пароль при необходимости
					</p>
				</div>
				<div className={styles.cards_container}>
					<Card>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={styles.cards_container__card_form}
						>
							<Input
								{...register("name", {
									required: "Это обязательное поле*",
								})}
								label="Ваше ФИО"
								type="name"
								placeholder="Иванов Александр Михайлович"
								isValidated={!!errors.name}
							/>
							<div
								className={
									styles.change_password__container__item_form__info
								}
							>
								{errors.name && (
									<span>{errors.name.message}</span>
								)}
							</div>
							<Input
								{...register("email", {
									required: "Это обязательное поле*",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: "Неверный email*",
									},
								})}
								label="Ваш email"
								type="email"
								placeholder="Ваш email"
								isValidated={!!errors.email}
							/>
							<div
								className={
									styles.change_password__container__item_form__info
								}
							>
								{errors.email && (
									<span>{errors.email.message}</span>
								)}
							</div>
							<Button type="submit" variant="contained">
								Сохранить
							</Button>
						</form>
					</Card>
					<Card>
						<div className={styles.cards_container__card}>
							<LockIcon />
							<div
								className={
									styles.cards_container__change_password
								}
							>
								<h3>Поменять пароль</h3>
								<p>
									Для смены пароля нужно отправить запрос
									администратору
								</p>
							</div>
							<Button
								onClick={() => setIsVisible(!isVisible)}
								variant="outlined"
							>
								Сменить пароль
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default index;
