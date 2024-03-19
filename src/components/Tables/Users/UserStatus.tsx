import Helper from "components/Helper";
import { format } from "date-fns/format";
import { FC } from "react";
import { IUserStatusState } from "store/userSlice";

interface IUserStatusStateProps {
	state: IUserStatusState;
}

const UserStatus: FC<IUserStatusStateProps> = ({ state }) => {
	const formatDate = (data: string): string => {
		return format(new Date(data), "dd.MM.yyyy HH:mm");
	};

	if (state.status === "deleted") {
		return (
			<Helper
				variant="deleted"
				title="Удален"
				description={`Пользователь был удалён администратором ${formatDate(
					state.status_time ?? ""
				)}`}
			/>
		);
	}

	if (state.status === "blocked") {
		return (
			<Helper
				variant="blocked"
				title="Заблокирован"
				description={`Пользователь заблокирован администратором ${formatDate(
					state.status_time ?? ""
				)}`}
			/>
		);
	}

	return (
		<>
			{state.lastActivity && (
				<span>
					Был на сайте
					<br /> {formatDate(state.lastActivity)}
				</span>
			)}
		</>
	);
};

export default UserStatus;
