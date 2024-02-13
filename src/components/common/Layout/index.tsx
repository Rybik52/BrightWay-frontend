import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<div className={styles.container}>
				<Outlet />
			</div>
		</div>
	);
};

export const PlainLayout: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};


// export const SettingsLayout = () => {
// 	return
// }