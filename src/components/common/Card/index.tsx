import { FC, ReactNode } from "react";

import styles from "./Card.module.scss";

interface CardProps {
	children: ReactNode;
}

const Index: FC<CardProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper__children}>{children}</div>
		</div>
	);
};

export default Index;
