import { HelpIcon } from "assets/IconsComponent";
import { FC, useState } from "react";
import styles from "./Helper.module.scss";
import classNames from "classnames";

interface HelperProps {
	title: string;
	description: string;
	disable?: boolean;
}

const index: FC<HelperProps> = ({ title, description, disable }) => {
	const [isOpen, setIsOpen] = useState(false);
	const descriptionStyle = {
		[styles.description]: true,
		[styles.hidden]: isOpen,
	};
	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			disabled={disable}
			className={styles.wrapper}
		>
			<HelpIcon />
			<span>{title}</span>
			<div className={classNames(descriptionStyle)}>{description}</div>
		</button>
	);
};

export default index;
