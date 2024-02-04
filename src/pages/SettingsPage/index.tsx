import { Link } from "react-router-dom";

import Card from "components/common/Card";
import {
	BankIcon,
	FlashDriveIcon,
	SettingsIcon,
	UserIcon,
} from "assets/IconsComponent";

import styles from "./SettingsPage.module.scss";

const Index = () => {
	const data = [
		{
			title: "Данные аккаунта",
			text: "ФИО, email, пароль",
			icon: <UserIcon />,
			link: "profile",
		},
		{
			title: "Мои организации",
			text: "Добавить, редактировать, удалить организацию",
			icon: <BankIcon />,
			link: "organizations",
		},
		{
			title: "Мои электронные подписи",
			text: "Просмотреть, удалить",
			icon: <FlashDriveIcon />,
			link: "",
		},
		{
			title: "Обратиться в тех. поддержку",
			text: "По вопросам можно обратиться в техническую поддержку BrightWay",
			icon: <SettingsIcon />,
			link: "mailto:support@brighttech.ru",
		},
	];
	return (
		<>
			<h1>Настройки</h1>
			<div className={styles.wrapper}>
				{data.map((item, index) => (
					<Link key={index} to={item.link}>
						<Card>
							<div className={styles.container}>
								{item.icon}
								<div className={styles.container__content}>
									<h3
										className={
											styles.container__content_title
										}
									>
										{item.title}
									</h3>
									<p
										className={
											styles.container__content_text
										}
									>
										{item.text}
									</p>
								</div>
							</div>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export default Index;
