import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

import styles from "./ProfilePage.module.scss";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "store/modalSlice";

const NewPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
		dispatch(openModal({ modalId: "NewPasswordModal" }));
	};

	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: "NewPasswordModal" }));
		navigate(-1);
	};

	return (
		<>
			<Modal modalTitle="NewPasswordModal" goBack exitButton>
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
			<div className={styles.change_password}>
				<div className={styles.change_password__header}>
					<h3>Новый пароль</h3>
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
								Чтобы сменить пароль необходимо отправить запрос
								администратору
							</p>
							<div
								className={
									styles.change_password__container__item_form__wrapper
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
										styles.change_password__container__item_form__info
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
