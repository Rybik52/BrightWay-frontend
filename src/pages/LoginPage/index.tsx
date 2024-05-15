import logo from "assets/brightTech.svg"

// import LoginForm from "./LoginForm"
import styles from "./LoginPage.module.scss"
import TestLogin from "pages/LoginPage/TestLogin.tsx"

const Index = () => {
	return (
		<div className={styles.wrapper}>
			<a href="/">
				<img className={styles.logo} src={logo} alt="brightTech logo" />
			</a>
			<div className={styles.container}>
				<TestLogin />
			</div>
		</div>
	)
}

export default Index
