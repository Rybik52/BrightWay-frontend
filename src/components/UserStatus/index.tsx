import styles from "./UserStatus.module.scss";
import UserIco from "assets/User.svg";
import AdminIco from "assets/Admin.svg";
import { FC } from "react";

interface UserStatusProps {
	isAdmin: boolean;
	name: string;
}

const index: FC<UserStatusProps> = ({ isAdmin, name }) => {
	const Icon = isAdmin ? AdminIco : UserIco;
	const status = isAdmin ? "Администратор" : "Пользователь";

	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
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
