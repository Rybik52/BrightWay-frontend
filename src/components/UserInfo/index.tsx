import { FC } from "react"

import AdminIco from "assets/Admin.svg"
import UserIco from "assets/User.svg"

import styles from "./UserStatus.module.scss"

interface UserInfoProps {
	roles: ("admins" | "analytics")[]
	name: string
}

const index: FC<UserInfoProps> = ({ roles, name }) => {
	const Icon = roles[0] === "admins" ? AdminIco : UserIco
	const status = roles[0] === "admins" ? "Администратор" : "Пользователь"

	return (
		<div className={styles.wrapper}>
			<div className={styles.user_icon}>
				<img
					src={Icon}
					alt={roles[0] === "admins" ? "Admin icon" : "User icon"}
				/>
			</div>
			<div className={styles.text_container}>
				<span>{status}</span>
				<p>{name}</p>
			</div>
		</div>
	)
}

export default index
