import { ArrowPrevIcon } from "assets/IconsComponent";
import Button from "components/common/Button";
import { FC, useEffect, useRef, useState } from "react";
import { IUser } from "store/userSlice";
import ActionsMenu from "./ActionsMenu";
import UserStatus from "./UserStatus";
import styles from "../Table.module.scss";

interface UsersElementsProps {
	data: IUser[];
}

const UsersElements: FC<UsersElementsProps> = ({ data }) => {
	const [openMenuId, setOpenMenuId] = useState<number | null>(null);

	const menuRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				setOpenMenuId(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleMenu = (id: number): void => {
		setOpenMenuId(openMenuId === id ? null : id);
	};

	return (
		<>
			{data.map((item) => (
				<tr
					key={item.id}
					style={{ position: "relative" }}
					title={
						item.role === "ROLE_ADMIN"
							? "Администратор"
							: "Пользователь"
					}
				>
					<td
						style={
							item.role === "ROLE_ADMIN"
								? { fontWeight: 700 }
								: undefined
						}
					>
						{item.fullName}
					</td>
					<td>{item.username}</td>
					<td className={styles.grey}>
						{item.organizations[0]?.title}
					</td>
					<td
						style={{ position: "relative" }}
						className={styles.grey}
					>
						<UserStatus state={item.state} />
					</td>
					<td className={styles.enter_button}>
						<Button variant="contained">Войти в аккаунт</Button>
					</td>
					<td className={styles.actions_button}>
						<Button
							variant="light"
							onClick={() => toggleMenu(item.id)}
						>
							<span>Действия</span>
							<ArrowPrevIcon
								style={{
									rotate:
										openMenuId === item.id
											? "90deg"
											: "-90deg",
								}}
							/>
						</Button>

						<ActionsMenu
							// ref={menuRef}
							UserId={item.id}
							role={item.role}
							name={item.fullName}
							state={item.state}
							active={openMenuId === item.id}
						/>
					</td>
				</tr>
			))}
		</>
	);
};

export default UsersElements;
