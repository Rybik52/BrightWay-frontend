import styles from "./Sidebar.module.scss";
import UserStatus from "components/UserStatus";
import NavItem from "./NavItem";
import { NavLink, useLocation } from "react-router-dom";

import logo from "assets/brightTech.svg";
import { HomeIcon } from "assets/NavIcons/HomeIcon";
import { NoticeIcon } from "assets/NavIcons/NoticeIcon";
import { TasksIcon } from "assets/NavIcons/TasksIcon";
import { ReportIcon } from "assets/NavIcons/ReportIcon";
import { SettingsIcon } from "assets/NavIcons/SettingsIcon";
import { HeadphonesIcon } from "assets/NavIcons/HeadphonesIcon";
import { ExitIcon } from "assets/NavIcons/ExitIcon";

const Index = () => {
	const location = useLocation();
	const NavItems = [
		{
			title: "Личный кабинет",
			icon: <HomeIcon />,
			href: "/home",
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
						<NavLink key={index} to={item.href}>
							<li
								className={`${styles.nav_list__item} ${
									location.pathname === item.href
										? styles.active
										: ""
								}`}
							>
								<NavItem title={item.title} icon={item.icon} />
							</li>
						</NavLink>
					))}
				</ul>
				<ul className={styles.nav_list}>
					<li className={styles.nav_list__item}>
						<NavLink to="/login">
							<NavItem title="Выход" icon={<ExitIcon />} />
						</NavLink>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Index;
