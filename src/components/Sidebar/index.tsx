import styles from "./Sidebar.module.scss";
import UserStatus from "components/UserStatus";
import NavItem from "./NavItem";
import { NavLink, useLocation } from "react-router-dom";

import logo from "assets/brightTech.svg";
import { HomeIcon } from "assets/navIcons/HomeIcon";
import { NoticeIcon } from "assets/navIcons/NoticeIcon";
import { TasksIcon } from "assets/navIcons/TasksIcon";
import { ReportIcon } from "assets/navIcons/ReportIcon";
import { SettingsIcon } from "assets/navIcons/SettingsIcon";
import { HeadphonesIcon } from "assets/navIcons/HeadphonesIcon";
import { ExitIcon } from "assets/navIcons/ExitIcon";

const index = () => {
	const location = useLocation();
	const NavItems = [
		{
			title: "Личный кабинет",
			icon: <HomeIcon />,
			href: "/dashboard",
		},
		{
			title: "Уведомления",
			icon: <NoticeIcon />,
			href: "/notices",
		},
		{
			title: "Задания",
			icon: <TasksIcon />,
			href: "/tasks",
		},
		{
			title: "Отчеты",
			icon: <ReportIcon />,
			href: "/reports",
		},
		{
			title: "Настройки",
			icon: <SettingsIcon />,
			href: "/settings",
		},

		{
			title: "Тех. поддержка",
			icon: <HeadphonesIcon />,
			href: "/support",
		},
	];

	return (
		<aside className={styles.wrapper}>
			<div className={styles.padding}>
				<img className={styles.logo} src={logo} alt="brightTech logo" />
				<div className={styles.user}></div>
				<UserStatus
					isAdmin={false}
					name={"Иванов Александр Михайлович"}
				/>
			</div>
			<div className={styles.nav_container}>
				<ul className={styles.nav_list}>
					{NavItems.map((item, index) => (
						<li
							key={index}
							className={`${styles.nav_list__item} ${
								location.pathname === item.href && styles.active
							}`}
						>
							<NavLink to={item.href}>
								<NavItem title={item.title} icon={item.icon} />
							</NavLink>
						</li>
					))}
				</ul>
				<ul className={styles.nav_list}>
					<li className={styles.nav_list__item}>
						<NavItem title="Выход" icon={<ExitIcon />} />
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default index;
