import UsersTable from "components/Tables/Users";
import Button from "components/common/Button";
import styles from "./UserPage.module.scss";
import { useGetQueueDataQuery } from "store/api";
import { useState } from "react";
import AddUserModal from "./AddUserModal";

const Index = () => {
	const { isError, isLoading } = useGetQueueDataQuery({});
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className={styles.header}>
				<h1>Список пользователей</h1>
				<Button
					onClick={() => setShowModal(!showModal)}
					// disabled={isLoading || isError}
					variant="light"
				>
					Добавить пользователя +
				</Button>
			</div>
			<UsersTable />
			<AddUserModal showModal={showModal} setShowModal={setShowModal} />
		</>
	);
};

export default Index;
