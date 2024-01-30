import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode;
	variant: "outlined" | "contained" | "light" | "text";
}

const index: FC<ButtonProps> = ({ children, variant, ...rest }) => {
	let buttonClass;

	switch (variant) {
		case "outlined":
			buttonClass = styles.outlined;
			break;
		case "contained":
			buttonClass = styles.contained;
			break;
		case "light":
			buttonClass = styles.light;
			break;
		default:
			buttonClass = styles.text;
	}

	return (
		<button className={`${styles.button} ${buttonClass}`} {...rest}>
			{children}
		</button>
	);
};

export default index;
