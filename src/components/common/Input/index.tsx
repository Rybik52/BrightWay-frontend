import { FC, forwardRef, InputHTMLAttributes, useState } from "react";

import EyeOpenedIcon from "assets/eye-opened.svg";
import EyeClosedIcon from "assets/eye-closed.svg";

import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	isValidated?: boolean;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ label, isValidated, type, ...rest }, ref) => {
		const [isFocused, setIsFocused] = useState(false);
		const [icon, setIcon] = useState(EyeClosedIcon);

		const [isVisible, setIsVisible] = useState(false);

		const handleToggle = () => {
			setIsVisible((prevVisible) => !prevVisible);
			setIcon((prevIcon) =>
				prevIcon === EyeClosedIcon ? EyeOpenedIcon : EyeClosedIcon
			);
		};

		const inputClasses = {
			[styles.input]: true,
			[styles.input_focused]: isFocused,
			[styles.input_validated]: isValidated,
		};

		return (
			<>
				{!!label && (
					<label className={styles.label} htmlFor={label}>
						{label}
					</label>
				)}
				<div className={classNames(inputClasses)}>
					<input
						id={label ?? undefined}
						{...rest}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						type={isVisible ? "text" : type}
						ref={ref}
					/>
					{type === "password" && (
						<span
							className={styles.eye}
							tabIndex={0}
							role="button"
							onKeyDown={handleToggle}
							onClick={handleToggle}
						>
							<img src={icon} alt={`Иконка ${icon}`} />
						</span>
					)}
				</div>
			</>
		);
	}
);

export default Input;
