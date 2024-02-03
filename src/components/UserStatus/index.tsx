import { FC } from "react";

import UserIco from "assets/user.svg";
import AdminIco from "assets/admin.svg";

import styles from "./UserStatus.module.scss";
interface UserStatusProps {
	isAdmin: boolean;
	name: string;
}

const index: FC<UserStatusProps> = ({ isAdmin, name }) => {
	const Icon = isAdmin ? AdminIco : UserIco;
	const status = isAdmin ? "Администратор" : "Пользователь";

	return (
		<div className={styles.wrapper}>
			<div className={styles.user_icon}>
				<img src={Icon} alt={isAdmin ? "Admin icon" : "User icon"} />
			</div>
			<div className={styles.text_container}>
				<span>{status}</span>
				<p>{name}</p>
			</div>
		</div>
	);
};

export default index;
