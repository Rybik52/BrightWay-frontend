import Card from "components/common/Card";
import TaskTable from "components/TaskTable";
import Button from "components/common/Button";
import {
	BankIcon,
	CalendarIcon,
	FileIcon,
	FlashDriveIcon,
	ListIcon,
} from "assets/IconsComponent";

import styles from "./HomePage.module.scss";

const Index = () => {
	// Переменная которая отвечает за показ таблицы
	const hasTasks = false;

	return (
		<>
			<div className={styles.cards_container}>
				<Card>
					<FlashDriveIcon />
					<h3 className={styles.cards_container__card_title}>
						Электронная подпись
					</h3>
					<Button variant="outlined">Перейти</Button>
				</Card>
				<Card>
					<BankIcon />
					<h3 className={styles.cards_container__card_title}>
						Мои организации
					</h3>
					<Button variant="outlined">Перейти</Button>
				</Card>
				<Card>
					<ListIcon />
					<h3 className={styles.cards_container__card_title}>
						Мои отчеты
					</h3>
					<Button disabled variant="outlined">
						Перейти
					</Button>
				</Card>
			</div>
			<div className={styles.tasks}>
				<h2>Мои задания</h2>
				{hasTasks ? (
					<TaskTable />
				) : (
					<div className={styles.cards_container}>
						<Card>
							<FileIcon />
							<h3 className={styles.cards_container__card_title}>
								Одинарное задание
							</h3>
							<Button variant="outlined">Создать +</Button>
						</Card>
						<Card>
							<CalendarIcon />
							<h3 className={styles.cards_container__card_title}>
								Задание по расписанию
							</h3>
							<Button variant="outlined">Создать +</Button>
						</Card>
					</div>
				)}
			</div>
		</>
	);
};

export default Index;
