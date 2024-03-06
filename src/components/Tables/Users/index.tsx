import Button from "components/common/Button";
import styles from "../Table.module.scss";
import { ArrowPrevIcon } from "assets/IconsComponent";

const index = () => {
	const data = [
		{
			id: 1,
			fullName: "Михаил Михайлов Михайлович",
			username: "ivanov@mail.ru",
			org: "ООО «Название компании»",
			status: "Удален",
		},
		{
			id: 2,
			fullName: "Михаил Михайлов Михайлович",
			username: "ivanov@mail.ru",
			org: "ООО «Название компании»",
			status: "Удален",
		},
		{
			id: 3,
			fullName: "Михаил Михайлов Михайлович",
			username: "ivanov@mail.ru",
			org: "ООО «Название компании»",
			status: "Удален",
		},
		{
			id: 4,
			fullName: "Михаил Михайлов Михайлович",
			username: "ivanov@mail.ru",
			org: "ООО «Название компании»",
			status: "Удален",
		},
	];

	const usersElements = data.map((item) => (
		<tr key={item.id}>
			<td>{item.fullName}</td>
			<td>{item.username}</td>
			<td>{item.org}</td>
			<td>{item.status}</td>
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

export default index;
