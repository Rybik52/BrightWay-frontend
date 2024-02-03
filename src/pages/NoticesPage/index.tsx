import { Link } from "react-router-dom";

import Card from "components/common/Card";
import { ArrowRightIcon } from "assets/IconsComponent";

import styles from "./NoticesPage.module.scss";

const index = () => {
	return (
		<>
			<h1>Уведомления</h1>
			<div className={styles.wrapper}>
				{[...Array(7)].map((_, index) => (
					<Card key={index}>
						<span className={styles.date}>12:30 13.11.2023</span>
						<h3 className={styles.title}>
							Сбой в функционале формирования выгрузок данных и
							отображения данных в пользовательском интерфейсе по
							выбытиям устранен
						</h3>
						<p className={styles.text}>
							09.10.2023-10.10.2023 был сбой в функционале
							формирования выгрузок данных и отображения данных в
							пользовательском интерфейсе по выбытиям
						</p>
						<Link to="" className={styles.link}>
							Перейти <ArrowRightIcon />
						</Link>
					</Card>
				))}
			</div>
		</>
	);
};

export default index;
