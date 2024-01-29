import { FC, ReactNode } from "react";

import styles from "./Card.module.scss";

interface CardProps {
	icon?: ReactNode;
	children: ReactNode;
	title: string;
	date?: string;
}

const Index: FC<CardProps> = ({ icon, title, children, date }) => {
	return (
		<div className={styles.wrapper}>
			{ !!icon &&
				<span className={styles.icon}>{icon}</span>
			}
			{
				!!date &&
				<span>{date}</span>
			}
			<div className={styles.title}>{title}</div>
			<div className={styles.button}>{children}</div>
		</div>
	);
};

export default Index;
