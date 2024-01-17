import { useState } from "react";
import styles from "./LoginPage.module.scss";

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

			<input required placeholder="Введите email" type="email" />
			<button type="submit">Отправить</button>
		</form>
	);
};

const Index = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		// Добавьте логику для обработки входа пользователя
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<a href="/">BrightWay</a>
			</header>
			<div className={styles.container}>
				<h1>Вход в личный кабинет</h1>
				<span>BrightWay</span>
				{isVisible ? (
					<ForgotPassword />
				) : (
					<form className={styles.form} onSubmit={handleLoginSubmit}>
						<input
							required
							placeholder="Введите email"
							type="email"
						/>
						<input
							required
							placeholder="Введите пароль"
							type="password"
						/>
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
