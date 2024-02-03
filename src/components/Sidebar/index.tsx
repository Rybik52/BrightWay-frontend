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
} from "assets/IconsComponent";

import NavItem from "./NavItem";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import Modal from "components/common/Modal";
import Button from "components/common/Button";

const Index = () => {
	const [showModal, setShowModal] = useState(false);
	const { pathname } = useLocation();
	const navigate = useNavigate();
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
			icon: <HeadPhonesIcon />,
			href: "/support",
		},
	];

	const handelExit = () => {
		setShowModal(!showModal);
	};

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
					<li onClick={handelExit} className={styles.nav_list__item}>
						<NavItem title="Выход" icon={<ExitIcon />} />
					</li>
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
