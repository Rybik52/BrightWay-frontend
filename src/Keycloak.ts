import Keycloak from "keycloak-js"

const keycloak = new Keycloak({
	url: "http://localhost:8080/auth",
	realm: "mdlp",
	clientId: "mdlp-app"
})

export default keycloak
