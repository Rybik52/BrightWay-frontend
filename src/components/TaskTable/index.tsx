import { FC, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store/rootState";
import Button from "components/common/Button";
import { deleteTask } from "store/tasksSlice";
import ProcessBar from "components/common/ProcessBar";
import Pagination from "components/common/Pagination";
import { ArrowRightIcon, PencilIcon, TrashIcon } from "assets/IconsComponent";

import EditTask from "./EditTask";
import { formatDate } from "./utils";
import DeleteTaskModal from "./DeleteTaskModal";
import styles from "./Table.module.scss";
interface TableProps {
	isPagination?: boolean;
}

const Index: FC<TableProps> = ({ isPagination }) => {
	const dispatch = useDispatch();
	const [deletedRows, setDeletedRows] = useState<number[]>([]);
	const data = useSelector((state: RootState) => state.tasks.data);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const handleDelete = (id: number) => {
		setShowDeleteModal(true);
		setDeletedRows([...deletedRows, id]);

		setInterval(() => {
			dispatch(deleteTask(id));
		}, 200);
	};

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
						{data.map((item) => (
							<tr
								className={
									deletedRows.includes(item.id)
										? styles.deleting
										: ""
								}
								key={item.id}
							>
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
