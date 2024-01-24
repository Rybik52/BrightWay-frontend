import { FC, ReactNode } from "react";
import styles from "./Sidebar.module.scss";

interface NavItemProps {
	title: string;
	icon: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ title, icon }) => {
	return (
		<div className={styles.nav_item}>
			<div className={styles.nav_item__icon}>{icon}</div>
			<span>{title}</span>
		</div>
	);
};

export default NavItem;
