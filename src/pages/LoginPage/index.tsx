import { useState } from "react";
import styles from "./LoginPage.module.scss";
import logo from "assets/brightTech.svg";

import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";

const Index = () => {
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	return (
		<div className={styles.wrapper}>
			<a href="/">
				<img className={styles.logo} src={logo} alt="brightTech logo" />
			</a>
			<div className={styles.container}>
				{showForgotPassword ? (
					<ForgotPassword />
				) : (
					<LoginForm toggleForm={setShowForgotPassword} />
				)}
			</div>
		</div>
	);
};

export default Index;
