import styles from "./LoginPage.module.scss";
import eyeClosed from "assets/eye-closed.svg";
import eyeOpened from "assets/eye-opened.svg";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
	toggleForm: (isVisible: boolean) => void;
}

const LoginForm: FC<LoginFormProps> = ({ toggleForm }) => {
	const [password, setPassword] = useState("");
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeClosed);

	const handleToggle = () => {
		setType((prevType) => (prevType === "password" ? "text" : "password"));
		setIcon((prevIcon) => (prevIcon === eyeClosed ? eyeOpened : eyeClosed));
	};

	const navigate = useNavigate();

	const handleLoginSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// TODO: Добавить логику для обработки входа пользователя
		const isAuthenticated = true;

		if (isAuthenticated) {
			// Если успешно, перенаправляем на страницу dashboard
			navigate("/dashboard");
		} else {
			// Если неуспешно, вы можете добавить обработку ошибок или показать сообщение об ошибке
			console.error("Ошибка аутентификации");
		}
	};

	return (
		<form className={styles.form} onSubmit={handleLoginSubmit}>
			<h1>Вход в личный кабинет</h1>
			<div className={styles.input}>
				<input required placeholder="Введите email*" type="email" />
			</div>
			<div className={styles.input}>
				<input
					required
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
			<button type="submit">Войти</button>
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
