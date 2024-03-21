import { useGetUsersAllQuery } from "store/api";
import styles from "../Table.module.scss";

import UsersElements from "./UsersElements";
import BlockModal from "./modals/BlockModal";
import DeleteModal from "./modals/DeleteModal";
import AdminModal from "./modals/AdminModal";
import FetchError from "../FetchError";
import SpinLoader from "components/common/SpinLoader";

const Index = () => {
	const { data, isError, isLoading, refetch } = useGetUsersAllQuery({});

	// const data = [
	// 	{
	// 		id: 1,
	// 		fullName: "Иванов Иван Иванович",
	// 		username: "ivanov@gmail.com",
	// 		role: "ROLE_ADMIN",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 2,
	// 		fullName: "Петров Петр Петрович",
	// 		username: "petrov@gmail.com",
	// 		role: "ROLE_ADMIN",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "deleted",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 3,
	// 		fullName: "Петров Петр Петровичич",
	// 		username: "1petrov@gmail.com",
	// 		role: "ROLE_USER",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "blocked",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 4,
	// 		fullName: "Петров Петр Петровичич",
	// 		username: "1petrov@gmail.com",
	// 		role: "ROLE_USER",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "blocked",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 5,
	// 		fullName: "Петров Петр Петровичич",
	// 		username: "1petrov@gmail.com",
	// 		role: "ROLE_USER",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "blocked",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 6,
	// 		fullName: "Петров Петр Петровичич",
	// 		username: "1petrov@gmail.com",
	// 		role: "ROLE_USER",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "blocked",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// 	{
	// 		id: 7,
	// 		fullName: "Петров Петр Петровичич",
	// 		username: "1petrov@gmail.com",
	// 		role: "ROLE_USER",
	// 		state: {
	// 			lastActivity: "2021-09-01T00:00:00",
	// 			status: "blocked",
	// 			status_time: "2021-09-01T00:00:00",
	// 		},
	// 	},
	// ];

	if (isLoading) {
		return <SpinLoader />;
	}

	if (isError) {
		return <FetchError fetchName="пользователей" onClick={refetch} />;
	}

	return (
		<>
			<div className={styles.table_wrapper}>
				<table className={`${styles.table} ${styles.left}`}>
					<thead>
						<tr style={{ border: "none" }}>
							<th>ФИО</th>
							<th>Email</th>
							<th>Организация</th>
							<th>Статус</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<UsersElements data={data} />
					</tbody>
				</table>
			</div>
			<BlockModal />
			<DeleteModal />
			<AdminModal />
		</>
	);
};

export default Index;
