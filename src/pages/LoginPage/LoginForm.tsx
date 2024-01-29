import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./LoginPage.module.scss";

import eyeClosed from "assets/eye-closed.svg";
import eyeOpened from "assets/eye-opened.svg";
import Button from "components/common/Button";

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
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeClosed);

	const handleToggle = () => {
		setType((prevType) => (prevType === "password" ? "text" : "password"));
		setIcon((prevIcon) => (prevIcon === eyeClosed ? eyeOpened : eyeClosed));
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h1>Вход в личный кабинет</h1>
			<div
				className={`${styles.input} ${
					errors.email ? styles.input_error : ""
				}`}
			>
				<input
					{...register("email", {
						required: "Это обязательное поле*",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Неверный email*",
						},
					})}
					aria-invalid={errors.email ? "true" : "false"}
					placeholder="Введите email*"
					type="text"
				/>
			</div>
			<div
				className={`${styles.input} ${
					errors.password ? styles.input_error : ""
				}`}
			>
				<input
					{...register("password", {
						required: true,
					})}
					aria-invalid={errors.password ? "true" : "false"}
					placeholder="Введите пароль*"
					name="password"
					type={type}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<span className={styles.eye} onClick={handleToggle}>
					<img src={icon} alt="иконка глаза" />
				</span>
			</div>
			{errors.email && (
				<p className={styles.error} role="alert">
					{errors.email.message}
				</p>
			)}
			<Button
				style={{ alignSelf: "center" }}
				type="submit"
				variant="contained"
			>
				Войти
			</Button>
			<span
				onClick={() => toggleForm(true)}
				className={styles.forgotPassword}
			>
				Не помню пароль
			</span>
		</form>
	);
};

export default LoginForm;
