import classnames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

import logo from "assets/brightTech.svg";
import UserStatus from "components/UserStatus";
import {
	AvatarIcon,
	ExitIcon,
	HeadPhonesIcon,
	HomeIcon,
	NoticeIcon,
	ReportIcon,
	SettingsIcon,
	TasksIcon,
} from "assets/IconsComponent";

import NavItem from "./NavItem";
import styles from "./Sidebar.module.scss";
import { useEffect, useState } from "react";
import { useGetUserByUsernameQuery } from "store/api";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "store/userSlice";
import SpinLoader from "components/common/SpinLoader";
import ExitModal from "./ExitModal";
interface INavItem {
	title: string;
	icon: JSX.Element;
	href: string;
}

const UserNavItems: INavItem[] = [
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
		icon: <HeadPhonesIcon />,
		href: "/support",
	},
];

const AdminNavItems: INavItem[] = [
	{
		title: "Пользователи",
		icon: <AvatarIcon />,
		href: "/users",
	},
	{
		title: "Уведомления",
		icon: <NoticeIcon />,
		href: "/notices",
	},
	{
		title: "Настройки",
		icon: <SettingsIcon />,
		href: "/settings",
	},
	{
		title: "Тех. поддержка",
		icon: <HeadPhonesIcon />,
		href: "/support",
	},
];

const Index = () => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { pathname } = useLocation();
	const handelExit = () => {
		setShowModal(!showModal);
	};

	// ?INFO временно получение пользователя
	const { data, isLoading, isError } =
		useGetUserByUsernameQuery("admin@admin.ru");

	useEffect(() => {
		if (data) {
			dispatch(setUser(data));
		}

		if (isError) {
			dispatch(
				setUser({
					id: 1,
					fullName: "Тест Тестович",
					active: true,
					role: "ROLE_ADMIN",
					username: "test@gmail.com",
				})
			);
		}
	}, [data, dispatch, isError]);

	let userView;
	if (isLoading) {
		userView = <SpinLoader />;
	} else if (user !== null) {
		userView = <UserStatus role={user.role} name={user.fullName} />;
	} else {
		userView = <div>Не удалось загрузить пользователя</div>;
	}

	return (
		<aside className={styles.wrapper}>
			<div className={styles.padding}>
				<img className={styles.logo} src={logo} alt="brightTech logo" />
				<div className={styles.user}>{userView}</div>
			</div>
			<div className={styles.nav_container}>
				<ul className={styles.nav_list}>
					{(user && user.role === "ROLE_ADMIN"
						? AdminNavItems
						: UserNavItems
					).map((item, index) => (
						<NavLink key={index} to={item.href}>
							<li
								className={classnames(styles.nav_list__item, {
									[styles.active]: pathname.startsWith(
										item.href
									),
								})}
							>
								<NavItem title={item.title} icon={item.icon} />
							</li>
						</NavLink>
					))}
				</ul>
				<ul className={styles.nav_list}>
					<button
						onClick={handelExit}
						className={styles.nav_list__item}
					>
						<NavItem title="Выход" icon={<ExitIcon />} />
					</button>
				</ul>
			</div>
			<ExitModal showModal={showModal} setShowModal={setShowModal} />
		</aside>
	);
};

export default Index;
