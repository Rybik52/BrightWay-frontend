import UsersTable from "components/Tables/Users";
import Button from "components/common/Button";
import styles from "./UserPage.module.scss";
import { useGetUsersAllQuery } from "store/api";
import AddUserModal from "./AddUserModal";
import { useDispatch } from "react-redux";
import { openModal } from "store/modalSlice";

const Index = () => {
	const { isError, isLoading } = useGetUsersAllQuery({});
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		dispatch(
			openModal({
				modalId: "AddUserModal",
			})
		);
	};
	return (
		<>
			<div className={styles.header}>
				<h1>Список пользователей</h1>
				<Button
					onClick={handleOpenModal}
					disabled={isLoading || isError}
					variant="light"
				>
					Добавить пользователя +
				</Button>
			</div>
			<UsersTable />
			<AddUserModal />
		</>
	);
};

export default Index;
