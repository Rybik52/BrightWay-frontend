import styles from "./Sidebar.module.scss";
import UserStatus from "components/UserStatus";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

import Logo from "assets/brightTech.png";
import homeIcon from "assets/navIcons/home.svg";
import noticeIcon from "assets/navIcons/notice.svg";
import tasksIcon from "assets/navIcons/tasks.svg";
import reportIcon from "assets/navIcons/report.svg";
import settingsIcon from "assets/navIcons/settings.svg";
import supportIcon from "assets/navIcons/headphones.svg";
import exitIcon from "assets/navIcons/exit.svg";

const index = () => {
	const NavItems = [
		{
			title: "Личный кабинет",
			icon: homeIcon,
			href: "/",
		},
		{
			title: "Уведомления",
			icon: noticeIcon,
			href: "/",
		},
		{
			title: "Задания",
			icon: tasksIcon,
			href: "/",
		},
		{
			title: "Отчеты",
			icon: reportIcon,
			href: "/",
		},
		{
			title: "Настройки",
			icon: settingsIcon,
			href: "/",
		},

		{
			title: "Тех. поддержка",
			icon: supportIcon,
			href: "/",
		},
	];

	return (
		<aside className={styles.wrapper}>
			<img className={styles.logo} src={Logo} alt="brightTech logo" />
			<div className={styles.user}>
				<UserStatus
					isAdmin={true}
					name={"Иванов Александр Михайлович"}
				/>
			</div>
			<div className={styles.nav_container}>
				<ul className={styles.nav_list}>
					{NavItems.map((item, index) => (
						<li key={index} className={styles.nav_list__item}>
							<NavLink to={item.href}>
								<NavItem title={item.title} icon={item.icon} />
							</NavLink>
						</li>
					))}
				</ul>
				<ul className={styles.nav_list}>
					<li className={styles.nav_list__item + " nav_list__item_exit"}>
						<NavItem title="Выход" icon={exitIcon} />
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default index;
