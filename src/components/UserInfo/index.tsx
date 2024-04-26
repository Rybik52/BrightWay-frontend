import { FC } from "react";

import AdminIco from "assets/Admin.svg";
import UserIco from "assets/User.svg";

import styles from "./UserStatus.module.scss";

interface UserInfoProps {
	role: "ROLE_ADMIN" | "ROLE_USER";
	name: string;
}

const index: FC<UserInfoProps> = ({ role, name }) => {
	const Icon = role === "ROLE_ADMIN" ? AdminIco : UserIco;
	const status = role === "ROLE_ADMIN" ? "Администратор" : "Пользователь";

	return (
		<div className={styles.wrapper}>
			<div className={styles.user_icon}>
				<img
					src={Icon}
					alt={role === "ROLE_ADMIN" ? "Admin icon" : "User icon"}
				/>
			</div>
			<div className={styles.text_container}>
				<span>{status}</span>
				<p>{name}</p>
			</div>
		</div>
	);
};

export default index;
