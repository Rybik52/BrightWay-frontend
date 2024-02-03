import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

import styles from "./ProfilePage.module.scss";

const NewPassword = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	type Inputs = {
		newPassword: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		setIsSubmitting(true);
		setShowModal(!showModal);
	};

	const handleCloseModal = () => {
		navigate(-1);
	};

	return (
		<>
			<Modal goBack showModal={showModal} setShowModal={setShowModal}>
				<h3>Запрос был отправлен администратору</h3>
				<p>Статус одобрения вам придет на почту</p>
				<Button
					style={{ alignSelf: "flex-start", marginTop: "1rem" }}
					onClick={handleCloseModal}
					variant="contained"
				>
					Закрыть
				</Button>
			</Modal>
			<div className={styles.forgot_password}>
				<h3>Новый пароль</h3>
				<div className={styles.forgot_password__container}>
					<Card>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={
								styles.forgot_password__container__item_form
							}
						>
							<p
								className={
									styles.forgot_password__container__item_p
								}
							>
								Чтобы сменить пароль необходимо отправить запрос
								администратору
							</p>
							<div
								className={
									styles.forgot_password__container__item_form__wrapper
								}
							>
								<Input
									{...register("newPassword", {
										required: "Это обязательное поле*",
									})}
									placeholder="Введите новый пароль"
									type="password"
									isValidated={!!errors.newPassword}
								/>
								<div
									className={
										styles.forgot_password__container__item_form__info
									}
								>
									{errors.newPassword && (
										<span>
											{errors.newPassword.message}
										</span>
									)}
								</div>
								<Button
									type="submit"
									variant="contained"
									disabled={isSubmitting}
								>
									{isSubmitting
										? "Отправка..."
										: "Отправить запрос"}
								</Button>
							</div>
						</form>
					</Card>
				</div>
			</div>
		</>
	);
};

export default NewPassword;
