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

	if (state.isActive) {
		return (
			<Helper
				variant="deleted"
				title="Удален"
				description={`Пользователь был удалён администратором ${formatDate(
					state.statusTime ?? ""
				)}`}
			/>
		);
	}

	if (state.isBlocked) {
		return (
			<Helper
				variant="blocked"
				title="Заблокирован"
				description={`Пользователь заблокирован администратором ${formatDate(
					state.statusTime ?? ""
				)}`}
			/>
		);
	}

	return (
		<>
			{state.lastActivity === "now" && (
				<span style={{ color: "#a6d96a" }}>В сети</span>
			)}
		</>
	);
};

export default UserStatus;
