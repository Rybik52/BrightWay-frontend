import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "components/common/Input";
import Button from "components/common/Button";

import styles from "./LoginPage.module.scss";

interface LoginFormProps {
	toggleForm: (isVisible: boolean) => void;
}
interface IFormInput {
	email: string;
	password: string;
}

const LoginForm: FC<LoginFormProps> = ({ toggleForm }) => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		// TODO: Добавить логику для обработки входа пользователя

		console.log(data);
		navigate("/home");
	};

	const [password, setPassword] = useState("");

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h1>Вход в личный кабинет</h1>
			<div className={styles.form__inputs_container}>
				<Input
					{...register("email", {
						required: "Это обязательное поле*",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Неверный email*",
						},
					})}
					aria-invalid={errors.email ? "true" : "false"}
					isValidated={!!errors.email}
					placeholder="Введите email*"
					type="text"
				/>
				<Input
					{...register("password", {
						required: "Это обязательное поле*",
					})}
					aria-invalid={errors.password ? "true" : "false"}
					isValidated={!!errors.password}
					type="password"
					placeholder="Введите пароль*"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			{errors.email && (
				<p className={styles.error} role="alert">
					{errors.email.message}
				</p>
			)}
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
