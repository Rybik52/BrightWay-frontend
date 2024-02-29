import { FC, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ArrowRightIcon, PencilIcon, TrashIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import Pagination from "components/common/Pagination";
import ProcessBar from "components/common/ProcessBar";
import { RootState } from "store/rootState";
import { deleteTask, setData } from "store/tasksSlice";

import { useGetQueueDataQuery } from "store/api";
import DeleteTaskModal from "./DeleteTaskModal";
import EditTask from "./EditTask";
import styles from "./Table.module.scss";
import { getMonthName } from "./utils";
interface TableProps {
	isPagination?: boolean;
}

const Index: FC<TableProps> = ({ isPagination }) => {
	const dispatch = useDispatch();
	const [deletedRows, setDeletedRows] = useState<number[]>([]);
	const tasks = useSelector((state: RootState) => state.tasks.data);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const handleDelete = (id: number) => {
		setShowDeleteModal(true);
		setDeletedRows([...deletedRows, id]);

		setInterval(() => {
			dispatch(deleteTask(id));
		}, 200);
	};

	const { data, isError, isLoading } = useGetQueueDataQuery({});

	useEffect(() => {
		if (data) {
			dispatch(setData(data));
		}
	}, [data, dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {isError} "An error occurred"</div>;
	}

	return (
		<>
			<DeleteTaskModal
				showModal={showDeleteModal}
				setShowModal={setShowDeleteModal}
			/>

			<EditTask
				showModal={showEditModal}
				setShowModal={setShowEditModal}
			/>

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
						{tasks.map((item) => (
							<tr
								className={
									deletedRows.includes(item.id)
										? styles.deleting
										: ""
								}
								key={item.id}
							>
								<td>
									{getMonthName(item.month)} {item.year}
								</td>
								<td>{item.week ?? "-"}</td>
								<td>{item.gtin === "" ? "-" : item.gtin}</td>
								<td>{item.batch === "" ? "-" : item.batch}</td>
								<td>{item.type}</td>
								<td>2w</td>
								<td className={styles.table__progress}>
									<ProcessBar percent={item.progress} />
									<span>
										<Button
											title="Редактировать задание"
											onClick={() =>
												setShowEditModal(true)
											}
											variant="text"
										>
											<PencilIcon />
										</Button>
										<Button
											title="Удалить задание"
											onClick={() =>
												handleDelete(item.id)
											}
											variant="text"
										>
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
