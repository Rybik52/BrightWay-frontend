import { FC, ReactNode } from "react";

import styles from "./Card.module.scss";

interface CardProps {
	icon: ReactNode;
	children: ReactNode;
	title: string;
}

const Index: FC<CardProps> = ({ icon, title, children }) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.icon}>{icon}</span>
			<div className={styles.title}>{title}</div>
			<div className={styles.button}>{children}</div>
		</div>
	);
};

export default Index;
