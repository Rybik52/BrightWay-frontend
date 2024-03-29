import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		PropsWithChildren {
	variant: "outlined" | "contained" | "light" | "text" | "cancel";
}

const index: FC<ButtonProps> = ({ children, variant, ...rest }) => {
	const buttonClasses = {
		[styles.button]: true,
		[styles.outlined]: variant === "outlined",
		[styles.contained]: variant === "contained",
		[styles.light]: variant === "light",
		[styles.text]: variant === "text",
		[styles.cancel]: variant === "cancel",
	};

	return (
		<button className={classNames(buttonClasses)} {...rest}>
			{children}
		</button>
	);
};

export default index;
