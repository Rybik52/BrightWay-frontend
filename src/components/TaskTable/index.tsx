import { FC } from "react";
import styles from "./Table.module.scss";

import ProcessBar from "components/common/ProcessBar";
import Button from "components/common/Button";
import Pagination from "components/common/Pagination";

import TrashIcon from "assets/CardsIcons/TrashIcon";
import PencilIcon from "assets/CardsIcons/PencilIcon";
import ArrowRightIcon from "assets/ArrowRightIcon";

const formatDate = (dateString: number): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};
	const date = new Date(dateString);
	const formattedDate = date.toLocaleDateString("ru", options);
	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

interface TableProps {
	isPagination?: boolean;
}

const index: FC<TableProps> = ({ isPagination }) => {
	const mokeDate = [
		{
			id: 1,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 40,
		},
		{
			id: 2,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 100,
		},
		{
			id: 3,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 65,
		},
		{
			id: 4,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 5,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 6,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 7,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 8,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 9,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
		{
			id: 10,
			date: Date.now(),
			week: "16.11-23.11",
			gtin: "GTIN",
			party: "Партия",
			type: "Отчет по выбытию ЛП",
			dateOfCreate: Date.now(),
			process: 20,
		},
	];

	return (
		<>
			<div className={styles.table_wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Месяц, год</th>
							<th>Неделя</th>
							<th>GTIN</th>
							<th>Партия</th>
							<th>Тип отчета</th>
							<th>Создан</th>
							<th>Прогресс</th>
						</tr>
					</thead>
					<tbody>
						{mokeDate.map((item) => (
							<tr key={item.id}>
								<td>{formatDate(item.date)}</td>
								<td>{item.week}</td>
								<td>{item.gtin}</td>
								<td>{item.party}</td>
								<td>{item.type}</td>
								<td>
									{new Date(
										item.dateOfCreate
									).toLocaleDateString("ru")}
								</td>
								<td className={styles.table__progress}>
									<ProcessBar percent={item.process} />
									<span>
										<Button variant="text">
											<PencilIcon />
										</Button>
										<Button variant="text">
											<TrashIcon />
										</Button>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isPagination ? (
				<Pagination />
			) : (
				<Button
					style={{ marginTop: "1.5rem", alignSelf: "start" }}
					variant="light"
				>
					Смотреть все <ArrowRightIcon />
				</Button>
			)}
		</>
	);
};

export default index;
