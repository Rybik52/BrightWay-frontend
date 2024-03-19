import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

import styles from "./ProfilePage.module.scss";
import { useDispatch } from "react-redux";
import { closeModal } from "store/modalSlice";

const ForgotPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isSubmitting, setIsSubmitting] = useState(false);

	type Inputs = {
		email: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		setIsSubmitting(true);
		dispatch(closeModal({ modalId: "ForgotPasswordModal" }));
	};

	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: "ForgotPasswordModal" }));
		navigate(-1);
	};

	return (
		<>
			<Modal modalTitle="ForgotPasswordModal" goBack exitButton>
				<h3>Запрос был отправлен администратору</h3>
				<p>Новый пароль вам будет выслан на почту</p>
				<Button
					style={{ alignSelf: "flex-start", marginTop: "1rem" }}
					onClick={handleCloseModal}
					variant="contained"
				>
					Закрыть
				</Button>
			</Modal>
			<div className={styles.change_password}>
				<div className={styles.change_password__header}>
					<h3>Смена пароля</h3>
					<p>
						Вам придет письмо от администратора с новым паролем для
						входа
					</p>
				</div>
				<div className={styles.change_password__container}>
					<Card>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={
								styles.change_password__container__item_form
							}
						>
							<p
								className={
									styles.change_password__container__item_p
								}
							>
								Введите вашу почту
							</p>
							<div
								className={
									styles.change_password__container__item_form__wrapper
								}
							>
								<Input
									{...register("email", {
										required: "Это обязательное поле*",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Неверный email*",
										},
									})}
									placeholder="Введите email"
									type="email"
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
								<Button
									type="submit"
									variant="contained"
									disabled={isSubmitting}
								>
									{isSubmitting
										? "Отправка..."
										: "Получить пароль"}
								</Button>
							</div>
						</form>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
