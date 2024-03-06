import Button from "components/common/Button";
import styles from "../Table.module.scss";
import { ArrowPrevIcon } from "assets/IconsComponent";
import { useGetUsersAllQuery } from "store/api";
import FetchError from "../FetchError";
import SpinLoader from "components/common/SpinLoader";
import { IUser } from "store/userSlice";

const Index = () => {
	const { data, isError, isLoading, refetch } = useGetUsersAllQuery({});

	if (isLoading) {
		return <SpinLoader />;
	}

	if (isError) {
		return <FetchError fetchName="пользователей" onClick={refetch} />;
	}

	const usersElements = data.map((item: IUser) => (
		<tr key={item.id}>
			<td>{item.fullName}</td>
			<td>{item.username}</td>
			<td>ООО «Название компании»</td>
			<td>-</td>
			<td>
				<Button variant="contained" style={{ fontWeight: "normal" }}>
					Войти в аккаунт
				</Button>
			</td>
			<td>
				<Button
					variant="light"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<span>Действия</span>
					<ArrowPrevIcon
						style={{
							rotate: "-90deg",
							width: "25px",
							height: "25px",
						}}
					/>
				</Button>
			</td>
		</tr>
	));

	return (
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
				<tbody>{usersElements}</tbody>
			</table>
		</div>
	);
};

export default Index;
