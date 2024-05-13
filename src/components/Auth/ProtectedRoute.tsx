import { useKeycloak } from "@react-keycloak/web"
import { FC, PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
	const { keycloak } = useKeycloak()
	const navigate = useNavigate()

	const isLoggedIn = keycloak.authenticated
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/")
		}
	}, [isLoggedIn, navigate])

	return children
}

export default PrivateRoute
