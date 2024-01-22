import { useState } from "react";
import styles from "./LoginPage.module.scss";
import logo from "assets/brightTech.png";
import eyeClosed from "assets/eye-closed.svg";
import eyeOpened from "assets/eye-opened.svg";

const ForgotPassword = () => {
	return (
		<form className={styles.form}>
			<div className={styles.info}>
				<h6>Введите вашу почту</h6>
				<p>
					Вам придет письмо от администратора с новым паролем для
					входа
				</p>
			</div>
			<div className={styles.input}>
				<input required placeholder="Введите email*" type="email" />
			</div>
			<button type="submit">Отправить</button>
		</form>
	);
};

const Index = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [password, setPassword] = useState("");
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeClosed);

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eyeOpened);
			setType("text");
		} else {
			setIcon(eyeClosed);
			setType("password");
		}
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		// TODO: Добавить логику для обработки входа пользователя
	};

	return (
		<div className={styles.wrapper}>
			<a href="/">
				<img src={logo} alt="brightTech logo" />
			</a>
			<div className={styles.container}>
				{isVisible ? (
					<ForgotPassword />
				) : (
					<form className={styles.form} onSubmit={handleLoginSubmit}>
						<h1>Вход в личный кабинет</h1>
						<div className={styles.input}>
							<input
								required
								placeholder="Введите email*"
								type="email"
							/>
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
								<img src={icon} alt="" />
							</span>
						</div>
						<button type="submit">Войти</button>
						<span
							onClick={() => setIsVisible(!isVisible)}
							className={styles.forgotPassword}
						>
							Не помню пароль
						</span>
					</form>
				)}
			</div>
		</div>
	);
};

export default Index;
