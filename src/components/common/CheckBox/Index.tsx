import { FC, InputHTMLAttributes, forwardRef, useId } from "react";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}
const Index: FC<CheckBoxProps> = forwardRef<HTMLInputElement, CheckBoxProps>(
	({ label, ...rest }, ref) => {
		const id = useId();

		return (
			<div className={styles.wrapper}>
				<input
					{...rest}
					className={styles.input}
					type="checkbox"
					name={label}
					id={id}
					ref={ref}
				/>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			</div>
		);
	}
);

export default Index;
