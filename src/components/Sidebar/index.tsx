import classnames from "classnames"
import { NavLink, useLocation } from "react-router-dom"

import {
	AvatarIcon,
	ExitIcon,
	ReportIcon,
	SettingsIcon,
	TasksIcon
} from "assets/IconsComponent"
import logo from "assets/brightTech.svg"
import UserInfo from "components/UserInfo"

import SpinLoader from "components/common/SpinLoader"
import { lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useGetSelfQuery } from "store/api"
import { selectUser, setUser } from "store/userSlice"
import ExitModal from "./ExitModal"
import NavItem from "./NavItem"
import styles from "./Sidebar.module.scss"
import { openModal } from "store/modalSlice"
interface INavItem {
	title: string
	icon: JSX.Element
	href: string
}

const UserNavItems: INavItem[] = [
	// {
	// 	title: "Личный кабинет",
	// 	icon: <HomeIcon />,
	// 	href: "/home",
	// },
	{
		title: "Отчеты",
		icon: <ReportIcon />,
		href: "/reports"
	},
	{
		title: "Задания",
		icon: <TasksIcon />,
		href: "/tasks"
	},
	// {
	// 	title: "Уведомления",
	// 	icon: <NoticeIcon />,
	// 	href: "/notices",
	// },
	{
		title: "Настройки",
		icon: <SettingsIcon />,
		href: "/settings"
	}
	// {
	// 	title: "Тех. поддержка",
	// 	icon: <HeadPhonesIcon />,
	// 	href: "/support",
	// },
]

const AdminNavItems: INavItem[] = [
	{
		title: "Отчеты",
		icon: <ReportIcon />,
		href: "/reports"
	},
	{
		title: "Задания",
		icon: <TasksIcon />,
		href: "/tasks"
	},
	{
		title: "Пользователи",
		icon: <AvatarIcon />,
		href: "/users"
	},
	// {
	// 	title: "Уведомления",
	// 	icon: <NoticeIcon />,
	// 	href: "/notices",
	// },
	{
		title: "Настройки",
		icon: <SettingsIcon />,
		href: "/settings"
	}
	// {
	// 	title: "Тех. поддержка",
	// 	icon: <HeadPhonesIcon />,
	// 	href: "/support",
	// },
]

const Index = () => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const { pathname } = useLocation()

	const handleOpenModal = () => {
		dispatch(openModal({ modalId: "ExitModal" }))
	}

	// ?INFO временно получение пользователя
	const { data, isLoading, isError } = useGetSelfQuery({})

	useEffect(() => {
		if (data) {
			dispatch(setUser(data))
		}

		if (isError) {
			dispatch(
				setUser({
					id: 1,
					fullName: "Тест Тестович",
					active: true,
					role: "ROLE_ADMIN",
					username: "test@gmail.com"
				})
			)
		}
	}, [data, dispatch, isError])

	let userView
	if (isLoading) {
		userView = <SpinLoader />
	} else if (user !== null) {
		userView = <UserInfo roles={user.roles} name={user.fullName} />
	} else {
		userView = <div>Не удалось загрузить пользователя</div>
	}

	return (
		<aside className={styles.wrapper}>
			<div className={styles.padding}>
				<img className={styles.logo} src={logo} alt="brightTech logo" />
				<div className={styles.user}>{userView}</div>
			</div>
			<div className={styles.nav_container}>
				<ul className={styles.nav_list}>
					{(user && user.roles[0] === "admins"
						? AdminNavItems
						: UserNavItems
					).map((item, index) => (
						<NavLink key={index} to={item.href}>
							<li
								className={classnames(styles.nav_list__item, {
									[styles.active]: pathname.startsWith(
										item.href
									)
								})}
							>
								<NavItem title={item.title} icon={item.icon} />
							</li>
						</NavLink>
					))}
				</ul>
				<ul className={styles.nav_list}>
					<button
						onClick={handleOpenModal}
						className={styles.nav_list__item}
					>
						<NavItem title="Выход" icon={<ExitIcon />} />
					</button>
				</ul>
			</div>
			<ExitModal />
		</aside>
	)
}

export default Index
export const Sidebar = lazy(() => import("components/Sidebar"))
