import { FC } from "react";

import { useDispatch } from "react-redux";

import { ArrowRightIcon, PencilIcon, TrashIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import Pagination from "components/common/Pagination";
import ProcessBar from "components/common/ProcessBar";
import { ITasksItem } from "store/tasksSlice";

import SpinLoader from "components/common/SpinLoader";
import { useGetQueueAllQuery } from "store/api";
import styles from "../Table.module.scss";
import DeleteTaskModal from "./modals/DeleteTaskModal";
import EditTask from "./modals/EditAndCreateTaskModal";
import { getMonthName } from "./utils";
import FetchError from "../FetchError";
import { openModal } from "store/modalSlice";
import ReportType from "./ReportType";
import { format } from "date-fns";

interface TableProps {
	isPagination?: boolean;
}

const Index: FC<TableProps> = ({ isPagination }) => {
	const dispatch = useDispatch();

	const handleEdit = (item: ITasksItem) => {
		dispatch(openModal({ modalId: "EditAndCreateTaskModal", data: item }));
	};

	const handleDelete = (id: number) => {
		dispatch(openModal({ modalId: "DeleteTaskModal", data: id }));
	};

	const { data, isError, isLoading, refetch } = useGetQueueAllQuery({});

	if (isLoading) {
		return <SpinLoader />;
	}

	if (isError) {
		return <FetchError fetchName="задания" onClick={refetch} />;
	}

	const tasksElements = data.map((item: ITasksItem) => (
		<tr
			// className={deletedRows.includes(item.id) ? styles.deleting : ""}
			key={item.id}
		>
			<td>
				{getMonthName(item.month)} {item.year}
			</td>
			<td>{item.week ?? "-"}</td>
			<td>{item.gtin === "" ? "-" : item.gtin}</td>
			<td>{item.batch === "" ? "-" : item.batch}</td>
			<td>
				<ReportType type={item.type} />
			</td>
			<td
				title={`Задание создано: ${format(
					item.createDate,
					"dd.MM.yyyy HH:mm:ss"
				)}`}
			>
				{format(item.createDate, "dd.MM.yyyy")}
			</td>
			<td className={styles.table__progress}>
				<ProcessBar percent={item.progress} />
				<span>
					<Button
						disabled={!item.isDeletable}
						title="Редактировать задание"
						onClick={() => handleEdit(item)}
						variant="text"
					>
						<PencilIcon />
					</Button>
					<Button
						disabled={!item.isDeletable}
						title="Удалить задание"
						onClick={() => handleDelete(item.id)}
						variant="text"
					>
						<TrashIcon />
					</Button>
				</span>
			</td>
		</tr>
	));

	return (
		<>
			<DeleteTaskModal />
			<EditTask />

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
					<tbody>{tasksElements}</tbody>
				</table>
			</div>
			{isPagination ? (
				<Pagination />
			) : (
				<Button
					style={{ marginTop: "1.5rem", alignSelf: "flex-start" }}
					variant="light"
				>
					Смотреть все <ArrowRightIcon />
				</Button>
			)}
		</>
	);
};

export default Index;
