import { FC, useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.scss";

import Chevron from "assets/chevron-down.svg?react";

interface DropDownItem {
	id: number;
	value: string;
}

interface DropDownProps {
	title: string;
	items: DropDownItem[];
	multiple?: boolean;
}

const DropDown: FC<DropDownProps> = ({ title, items, multiple }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<DropDownItem[]>([]);
	const toggle = () => setIsOpen(!isOpen);
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = (event: MouseEvent) => {
			if (!dropDownRef.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);

	const handleOnClick = (item: DropDownItem) => {
		if (multiple) {
			// Множественный выбор
			const isSelected = isItemInSelection(item);
			if (isSelected) {
				// Если элемент уже выбран, убираем его из списка выбранных
				setSelectedItem((prevSelection) =>
					prevSelection.filter((current) => current.id !== item.id)
				);
			} else {
				// Если элемент не выбран, добавляем его в список выбранных
				setSelectedItem((prevSelection) => [...prevSelection, item]);
			}
		} else {
			// Одиночный выбор
			setSelectedItem([item]);
		}
	};

	const isItemInSelection = (item: DropDownItem) =>
		selectedItem.some((current) => current.id === item.id);

	const activeStyle = (item: DropDownItem) => {
		if (isItemInSelection(item)) {
			return `${styles.dd_list__item} ${styles.dd_list__item__selected}`;
		}
		return styles.dd_list__item;
	};

	const displayText =
		selectedItem.length > 0
			? selectedItem.map((item: DropDownItem) => item.value).join(", ")
			: title;

	return (
		<div
			className={styles.dd_wrapper}
			tabIndex={0}
			ref={dropDownRef}
			role="button"
			onKeyDown={(e) => {
				e.key === "Enter" && toggle();
			}}
			aria-expanded={isOpen}
		>
			<div onClick={toggle} className={styles.dd_header}>
				<div className={styles.dd_header__title}>
					<p>{displayText}</p>
				</div>
				<div className={styles.dd_header__action}>
					{isOpen ? (
						<Chevron style={{ transform: "rotate(180deg)" }} />
					) : (
						<Chevron />
					)}
				</div>
			</div>
			{isOpen && (
				<ul className={styles.dd_list}>
					{items.map((item) => (
						<li
							key={item.id}
							className={activeStyle(item)}
							onClick={() => handleOnClick(item)}
						>
							<span>{item.value}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default DropDown;
