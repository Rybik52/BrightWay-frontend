import { FC } from "react";

import { useDispatch } from "react-redux";

import { ArrowRightIcon, PencilIcon, TrashIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import Pagination from "components/common/Pagination";
import ProcessBar from "components/common/ProcessBar";
import { ITasksItem } from "store/tasksSlice";

import SpinLoader from "components/common/SpinLoader";
import { useDeleteTaskFromQueueMutation, useGetQueueAllQuery } from "store/api";
import styles from "../Table.module.scss";
import DeleteTaskModal from "./DeleteTaskModal";
import EditTask from "./EditTaskModal";
import { getMonthName } from "./utils";
import FetchError from "../FetchError";
import { openModal } from "store/modalSlice";

interface TableProps {
	isPagination?: boolean;
}

const Index: FC<TableProps> = ({ isPagination }) => {
	const dispatch = useDispatch();
	const [Delete] = useDeleteTaskFromQueueMutation();
	// const [deletedRows, setDeletedRows] = useState<number[]>([]);

	const handleEdit = () => {
		dispatch(openModal({ modalId: "EditTaskModal" }));
	};

	const handleDelete = (id: number) => {
		dispatch(openModal({ modalId: "DeleteTaskModal" }));
		Delete(id);
		// setDeletedRows([...deletedRows, id]);
		// setInterval(() => {}, 200);
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
			<td>{item.type}</td>
			<td></td>
			<td className={styles.table__progress}>
				<ProcessBar percent={item.progress} />
				<span>
					<Button
						title="Редактировать задание"
						onClick={handleEdit}
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
