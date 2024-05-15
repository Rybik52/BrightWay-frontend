import Button from "components/common/Button"
import { useKeycloak } from "@react-keycloak/web"
import styles from "pages/LoginPage/LoginPage.module.scss"
import { FormEvent } from "react"
import SpinLoader from "components/common/SpinLoader"
import { useNavigate } from "react-router-dom"

const TestLogin = () => {
	const { keycloak, initialized } = useKeycloak()
	const navigate = useNavigate()

	const handleLogin = (e: FormEvent) => {
		e.preventDefault()
		keycloak.login()
	}

	if (!initialized) {
		return <SpinLoader />
	}

	if (keycloak.authenticated || initialized) {
		navigate("/home")
	}

	return (
		<form onSubmit={handleLogin} className={styles.form}>
			<h1>Вход в личный кабинет</h1>
			<div className={styles.form__inputs_container}>
				{!keycloak.authenticated && (
					<Button variant="contained" type="submit">
						Войти
					</Button>
				)}
			</div>
		</form>
	)
}

export default TestLogin
