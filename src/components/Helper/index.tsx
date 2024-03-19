import { HelpIcon } from "assets/IconsComponent";
import { FC, useEffect, useRef, useState, LegacyRef } from "react";
import styles from "./Helper.module.scss";
import classNames from "classnames";

interface HelperProps {
	title: string;
	description: string;
	disable?: boolean;
	variant?: "deleted" | "blocked";
}

const Index: FC<HelperProps> = ({ title, description, disable, variant }) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			menuRef.current &&
			!menuRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const descriptionStyle = {
		[styles.description]: true,
		[styles.hidden]: !isOpen,
	};

	const variantStyle = {
		[styles.deleted]: variant === "deleted",
		[styles.blocked]: variant === "blocked",
	};

	return (
		<button
			ref={menuRef as LegacyRef<HTMLButtonElement>}
			onClick={() => setIsOpen(true)}
			disabled={disable}
			className={styles.wrapper}
		>
			<HelpIcon className={classNames(variantStyle)} />
			<span className={classNames(variantStyle)}>{title}</span>
			<div className={classNames(descriptionStyle)}>{description}</div>
		</button>
	);
};

export default Index;
