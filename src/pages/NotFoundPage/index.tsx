import Button from "components/common/Button";
import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

const index = () => {
	return (
		<div className={styles.wrapper}>
			<h1>404</h1>
			<div className={styles.info}>
				<h2>Такой страницы нет</h2>
				<p>
					Возможно страница была удалена, или вы набрали неверный
					адрес
				</p>
				<NavLink to="/">
					<Button variant="contained">Вернуться на главную</Button>
				</NavLink>
			</div>
		</div>
	);
};

export default index;
