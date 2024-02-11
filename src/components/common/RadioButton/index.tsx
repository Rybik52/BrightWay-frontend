import { FC, InputHTMLAttributes } from "react";
import styles from "./RadioButton.module.scss";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Index: FC<RadioButtonProps> = ({ label, ...rest }) => {
	return (
		<label className={styles.label}>
			<input className={styles.input} type="radio" {...rest} />
			{label}
		</label>
	);
};

export default Index;
