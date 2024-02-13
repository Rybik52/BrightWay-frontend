import { FC } from "react";
import styles from "./Process.module.scss";

interface ProcessBarProps {
	percent: number;
}

const index: FC<ProcessBarProps> = ({ percent }) => {
	if (percent < 0 || percent > 100) {
		console.error(
			`Значение percent должно быть в диапазоне от 0 до 100. Сейчас percent = ${percent}`
		);
		return (
			<div className={styles.process}>
				<div
					className={styles.process__bg}
					style={{ width: `100%`, backgroundColor: "#ec4d3a" }}
				>
					Ошибка
				</div>
			</div>
		);
	}

	return (
		<div className={styles.process}>
			<div
				className={styles.process__bg}
				style={{ width: `${percent}%` }}
			>
				{percent === 100 ? "Завершено" : percent >= 30 && percent + "%"}
			</div>
		</div>
	);
};

export default index;
