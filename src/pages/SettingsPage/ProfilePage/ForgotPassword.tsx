import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import Card from "components/common/Card";
import Input from "components/common/Input";
import Button from "components/common/Button";

import NewPassword from "./NewPassword";
import styles from "./ProfilePage.module.scss";

const ForgotPassword = () => {
	const [accepted, setAccepted] = useState(false);

	type Inputs = {
		password: string;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setAccepted(!accepted);
		console.log(data);
	};

	if (accepted) {
		return <NewPassword />;
	}

	return (
		<div className={styles.forgot_password}>
			<h3>Смена пароля</h3>
			<div className={styles.forgot_password__container}>
				<Card>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.forgot_password__container__item_form}
					>
						<p
							className={
								styles.forgot_password__container__item_p
							}
						>
							Для подтверждения личности введите предыдущий пароль
						</p>
						<div
							className={
								styles.forgot_password__container__item_form__wrapper
							}
						>
							<Input
								{...register("password", {
									required: "Это обязательное поле*",
								})}
								placeholder="Введите пароль"
								type="password"
								isValidated={!!errors.password}
							/>
							<div
								className={
									styles.forgot_password__container__item_form__info
								}
							>
								{errors.password && (
									<span>{errors.password.message}</span>
								)}
								<button>Не помню пароль</button>
							</div>
							<Button type="submit" variant="contained">
								Подтвердить
							</Button>
						</div>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default ForgotPassword;
