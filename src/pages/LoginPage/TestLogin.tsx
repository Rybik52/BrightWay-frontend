import Button from "components/common/Button"
import { useKeycloak } from "@react-keycloak/web"
import styles from "pages/LoginPage/LoginPage.module.scss"
import { FormEvent } from "react"

const TestLogin = () => {
	const { keycloak } = useKeycloak()

	const handleLogin = (e: FormEvent) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={handleLogin} className={styles.form}>
			<h1>Вход в личный кабинет</h1>
			<div className={styles.form__inputs_container}>
				{!keycloak.authenticated && (
					<Button
						variant="contained"
						onClick={() => keycloak.login()}
					>
						Войти
					</Button>
				)}
			</div>
		</form>
	)
}

export default TestLogin
