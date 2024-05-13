import { useState } from "react"

import logo from "assets/brightTech.svg"

// import LoginForm from "./LoginForm"
import styles from "./LoginPage.module.scss"
import ForgotPassword from "./ForgotPassword"
import TestLogin from "pages/LoginPage/TestLogin.tsx"

const Index = () => {
	const [showForgotPassword, setShowForgotPassword] = useState(false)

	return (
		<div className={styles.wrapper}>
			<a href="/">
				<img className={styles.logo} src={logo} alt="brightTech logo" />
			</a>
			<div className={styles.container}>
				{showForgotPassword ? (
					<ForgotPassword toggleForm={setShowForgotPassword} />
				) : (
					// <LoginForm toggleForm={setShowForgotPassword} />
					<TestLogin />
				)}
			</div>
		</div>
	)
}

export default Index
