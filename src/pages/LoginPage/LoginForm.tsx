import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useLoginMutation } from "store/api";

import Input from "components/common/Input";
import Button from "components/common/Button";

import styles from "./LoginPage.module.scss";

interface LoginFormProps {
	toggleForm: (isVisible: boolean) => void;
}
interface IFormInput {
	username: string;
	password: string;
}

const LoginForm: FC<LoginFormProps> = ({ toggleForm }) => {
	const navigate = useNavigate();

	// const [login, { isError, isLoading }] = useLoginMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = () => {
		// TODO: Добавить логику для обработки входа пользователя
		navigate("/tasks");
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h1>Вход в личный кабинет</h1>
			<div className={styles.form__inputs_container}>
				<Input
					{...register("username", {
						required: "Это обязательное поле*",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Неверный email*",
						},
					})}
					aria-invalid={errors.username ? "true" : "false"}
					isValidated={!!errors.username}
					placeholder="Введите email*"
					type="text"
				/>
				{errors.username && (
					<p className={styles.error} role="alert">
						{errors.username.message}
						{errors.username.message}
					</p>
				)}
				<Input
					{...register("password", {
						required: "Это обязательное поле*",
					})}
					aria-invalid={errors.password ? "true" : "false"}
					isValidated={!!errors.password}
					type="password"
					placeholder="Введите пароль*"
				/>
				{errors.password && (
					<p className={styles.error} role="alert">
						{errors.password.message}
					</p>
				)}
			</div>
			<Button
				style={{ alignSelf: "center", marginTop: "2.5rem" }}
				type="submit"
				variant="contained"
			>
				Войти
			</Button>
			<button
				onClick={() => toggleForm(true)}
				className={styles.forgotPassword}
			>
				Не помню пароль
			</button>
		</form>
	);
};

export default LoginForm;
