import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode;
	variant: "outlined" | "contained" | "light" | "text";
}

const index: FC<ButtonProps> = ({ children, variant, ...rest }) => {
	const buttonClasses = {
		[styles.button]: true,
		[styles.outlined]: variant === "outlined",
		[styles.contained]: variant === "contained",
		[styles.light]: variant === "light",
		[styles.text]: variant === "text",
	};

	return (
		<button className={classNames(buttonClasses)} {...rest}>
			{children}
		</button>
	);
};

export default index;
