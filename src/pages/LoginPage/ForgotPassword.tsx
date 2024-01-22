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
			<div className={styles.input}>
				<input required placeholder="Введите email*" type="email" />
			</div>
			<button type="submit">Отправить</button>
		</form>
	);
};

export default ForgotPassword;
