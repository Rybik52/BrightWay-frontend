import { FC } from "react";

import UserIco from "assets/user.svg";
import AdminIco from "assets/admin.svg";

import styles from "./UserStatus.module.scss";
interface UserStatusProps {
	role: "ROLE_ADMIN" | "ROLE_USER";
	name: string;
}

const index: FC<UserStatusProps> = ({ role, name }) => {
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
