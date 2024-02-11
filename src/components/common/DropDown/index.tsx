import { FC, useEffect, useRef, useState } from "react";
import styles from "./DropDown.module.scss";
import Chevron from "assets/chevron-down.svg?react";
import classNames from "classnames";

export interface DropDownItem {
	id: number;
	value: string;
}

interface DropDownProps {
	title: string;
	items: DropDownItem[];
	multiple?: boolean;
	onChange?: (selectedItems: DropDownItem[]) => void;
	isValidated?: boolean;
}

const Index: FC<DropDownProps> = ({
	title,
	items,
	multiple,
	onChange,
	isValidated,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItems, setSelectedItems] = useState<DropDownItem[]>([]);
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

	const toggle = () => setIsOpen(!isOpen);

	const handleOnClick = (item: DropDownItem) => {
		let newSelectedItems: DropDownItem[];
		if (multiple) {
			// Множественный выбор
			const isSelected = isItemInSelection(item);
			if (isSelected) {
				// Если элемент уже выбран, убираем его из списка выбранных
				newSelectedItems = selectedItems.filter(
					(current) => current.id !== item.id
				);
			} else {
				// Если элемент не выбран, добавляем его в список выбранных
				newSelectedItems = [...selectedItems, item];
			}
		} else {
			// Одиночный выбор
			newSelectedItems = [item];
		}
		setSelectedItems(newSelectedItems);
		if (onChange) {
			onChange(newSelectedItems);
		}
	};

	const isItemInSelection = (item: DropDownItem) =>
		selectedItems.some((current) => current.id === item.id);

	const activeStyle = (item: DropDownItem) => {
		if (isItemInSelection(item)) {
			return `${styles.dd_list__item} ${styles.dd_list__item__selected}`;
		}
		return styles.dd_list__item;
	};

	const displayText =
		selectedItems.length > 0
			? selectedItems.map((item: DropDownItem) => item.value).join(", ")
			: title;

	const wrapperStyle = {
		[styles.dd_wrapper]: true,
		[styles.error]: isValidated,
	};

	const listStyle = {
		[styles.dd_list]: true,
		[styles.dd_list__open]: isOpen,
	};

	return (
		<div
			className={classNames(wrapperStyle)}
			tabIndex={0}
			role="button"
			ref={dropDownRef}
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
			<ul className={classNames(listStyle)}>
				{items.map((item) => (
					<li key={item.id} className={activeStyle(item)}>
						<button
							type="button"
							onClick={() => handleOnClick(item)}
						>
							{item.value}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Index;
