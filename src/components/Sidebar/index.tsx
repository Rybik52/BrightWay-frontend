import classnames from "classnames";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "assets/brightTech.svg";
import UserStatus from "components/UserStatus";
import {
	ExitIcon,
	HeadPhonesIcon,
	HomeIcon,
	NoticeIcon,
	ReportIcon,
	SettingsIcon,
	TasksIcon,
	UserIcon,
} from "assets/IconsComponent";

import NavItem from "./NavItem";
import styles from "./Sidebar.module.scss";
import { useEffect, useState } from "react";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { useGetUserByUsernameQuery } from "store/api";
import { useDispatch, useSelector } from "react-redux";
import {
	selectUser,
	selectLoading,
	selectError,
	setUser,
} from "store/userSlice";

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
		icon: <UserIcon />,
		href: "/notices",
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
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const [showModal, setShowModal] = useState(false);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handelExit = () => {
		setShowModal(!showModal);
	};

	// ?INFO временно получение пользователя
	const { data, isError, isLoading } =
		useGetUserByUsernameQuery("admin@admin.ru");

	useEffect(() => {
		if (data) {
			dispatch(setUser(data));
		}
	}, [data, dispatch]);

	let navItemsToRender: INavItem[] = [];
	if (user !== null) {
		if (user.role === "ROLE_ADMIN") {
			navItemsToRender = AdminNavItems;
		} else {
			navItemsToRender = UserNavItems;
		}
	}

	if (loading || isLoading) {
		return <div>Loading...</div>;
	}

	if (error || isError) {
		return <div>Error: {error ?? "An error occurred"}</div>;
	}

	return (
		<aside className={styles.wrapper}>
			<div className={styles.padding}>
				<img className={styles.logo} src={logo} alt="brightTech logo" />
				<div className={styles.user}></div>
				{user !== null ? (
					<UserStatus role={user.role} name={user.fullName} />
				) : (
					<div>Не удалось загрузить пользователя</div>
				)}
			</div>
			<div className={styles.nav_container}>
				<ul className={styles.nav_list}>
					{navItemsToRender.map((item, index) => (
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
			<Modal exitButton showModal={showModal} setShowModal={setShowModal}>
				<div className={styles.modal_exit}>
					<h3>Выйти из аккаунта?</h3>
					<div className={styles.modal_exit__buttons}>
						<Button
							variant="contained"
							onClick={() => {
								navigate("/login");
							}}
						>
							Выйти
						</Button>
						<Button
							variant="outlined"
							style={{ color: "gray", borderColor: "gray" }}
							onClick={() => {
								setShowModal(!showModal);
							}}
						>
							Отмена
						</Button>
					</div>
				</div>
			</Modal>
		</aside>
	);
};

export default Index;
