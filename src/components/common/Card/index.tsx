import { FC, ReactNode } from "react";

import styles from "./Card.module.scss";

interface CardProps {
	children: ReactNode;
	title?: string;
}

const Index: FC<CardProps> = ({ children, title }) => {
	return (
		<div title={title} className={styles.wrapper}>
			<div className={styles.wrapper__children}>{children}</div>
		</div>
	);
};

export default Index;
