import { FC, PropsWithChildren } from "react";
import styles from "./ErrorText.module.scss";

const Index: FC<PropsWithChildren> = ({ children }) => {
	return <span className={styles.message}>{children}</span>;
};

export default Index;
