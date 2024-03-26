import { FC } from "react";
import styles from "../Table.module.scss";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { openModal } from "store/modalSlice";
import { IUserStatusState } from "store/userSlice";

interface ActionsMenuProps {
	UserId: number;
	active: boolean;
	role: string;
	name: string;
	state: IUserStatusState;
}

const ActionsMenu: FC<ActionsMenuProps> = ({
	UserId,
	state,
	role,
	name,
	active,
}) => {
	const listClass = classNames(styles.actions_list, {
		[styles.active]: active,
	});

	const dispatch = useDispatch();
	const handleOpenModalWithData = (id: string) => {
		dispatch(
			openModal({
				modalId: id,
				data: {
					UserId,
					state,
					role,
					name,
				},
			})
		);
	};

	if (state.isDeleted) {
		return (
			<ul className={listClass}>
				<li>
					<button
						onClick={() => handleOpenModalWithData("DeleteModal")}
					>
						Восстановить
					</button>
				</li>
				<li>
					<button
						onClick={() =>
							handleOpenModalWithData("ChangeUserPasswordModal")
						}
					>
						Сменить пароль
					</button>
				</li>
				<li>
					<button
						onClick={() => handleOpenModalWithData("AdminModal")}
					>
						{role === "ROLE_USER"
							? "Убрать админа"
							: "Назначить админом"}
					</button>
				</li>
			</ul>
		);
	}

	return (
		<ul className={listClass}>
			<li>
				<button onClick={() => handleOpenModalWithData("BlockModal")}>
					{state.isBlocked ? "Разблокировать" : "Заблокировать"}
				</button>
			</li>
			<li>
				<button onClick={() => handleOpenModalWithData("DeleteModal")}>
					Удалить
				</button>
			</li>
			<li>
				<button
					onClick={() =>
						handleOpenModalWithData("ChangeUserPasswordModal")
					}
				>
					Сменить пароль
				</button>
			</li>
			<li>
				<button onClick={() => handleOpenModalWithData("AdminModal")}>
					{role === "ROLE_USER"
						? "Назначить админом"
						: "Убрать админа"}
				</button>
			</li>
		</ul>
	);
};

export default ActionsMenu;
