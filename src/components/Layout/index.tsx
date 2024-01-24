import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Sidebar from "components/Sidebar";

interface LayoutProps {
	children: ReactNode;
}

const Index: FC<LayoutProps> = ({ children }) => {
	const location = useLocation();

	const isLoginPage = location.pathname === "/login";

	if (isLoginPage) {
		return <div className={styles.container}>{children}</div>;
	}

	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Index;
