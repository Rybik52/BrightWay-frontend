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
		return null; // Или можно вернуть компонент-заглушку или другое значение по умолчанию
	}

	return (
		<div className={styles.process}>
			<div
				className={styles.process__bg}
				style={{ width: `${percent}%` }}
			>
				{percent === 100 ? "Завершено" : percent + "%"}
			</div>
		</div>
	);
};

export default index;
