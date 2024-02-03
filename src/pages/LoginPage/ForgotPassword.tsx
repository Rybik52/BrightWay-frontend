import { FC } from "react";
import styles from "./LoginPage.module.scss";
import Button from "components/common/Button";
import Input from "components/common/Input";

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
				<Input required placeholder="Введите email*" type="email" />
			</div>
			<Button
				style={{ alignSelf: "center", marginTop: "2.5rem" }}
				variant="contained"
				type="submit"
			>
				Отправить
			</Button>
			<button
				onClick={() => toggleForm(false)}
				className={styles.forgotPassword}
			>
				Вернуться
			</button>
		</form>
	);
};

export default ForgotPassword;
