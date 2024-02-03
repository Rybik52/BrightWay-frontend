import { useState } from "react";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { LockIcon } from "assets/IconsComponent";

import ForgotPassword from "./ForgotPassword";
import styles from "./ProfilePage.module.scss";

const index = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	if (isVisible) {
		return <ForgotPassword />;
	}

	return (
		<div className={styles.wrapper}>
			<div>
				<h3>Данные пользователя</h3>
				<p>Вы можете поменять ФИО, email, пароль при необходимости</p>
			</div>
			<div className={styles.cards_container}>
				<Card>
					<form
						onSubmit={handleFormSubmit}
						className={styles.cards_container__card_form}
					>
						<Input
							label="Ваше ФИО"
							type="name"
							placeholder="Иванов Александр Михайлович"
						/>
						<Input
							label="Ваш email"
							type="email"
							placeholder="Ваш email"
						/>
						<Button type="submit" variant="contained">
							Сохранить
						</Button>
					</form>
				</Card>
				<Card>
					<div className={styles.cards_container__card}>
						<LockIcon />
						<div
							className={styles.cards_container__change_password}
						>
							<h3>Поменять пароль</h3>
							<p>
								Для смены пароля нужно отправить запрос
								администратору
							</p>
						</div>
						<Button
							onClick={() => setIsVisible(!isVisible)}
							variant="outlined"
						>
							Сменить пароль
						</Button>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default index;
