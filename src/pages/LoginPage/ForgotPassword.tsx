import { FC } from "react";
import styles from "./LoginPage.module.scss";

interface ForgotPasswordProps {
	toggleForm: (isVisible: boolean) => void;
}

const ForgotPassword: FC<ForgotPasswordProps> = ({ toggleForm }) => {
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
			<input className={styles.submit} type="submit" value="Отправить" />
			<span
				onClick={() => toggleForm(false)}
				className={styles.forgotPassword}
			>
				Вернуться
			</span>
		</form>
	);
};

export default ForgotPassword;
