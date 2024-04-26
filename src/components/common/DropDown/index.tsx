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
	selectedItem?: DropDownItem | null;
}

const Index: FC<DropDownProps> = ({
	title,
	items,
	multiple,
	onChange,
	isValidated,
	// selectedItem,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItems, setSelectedItems] = useState<DropDownItem[]>([]);

	const dropDownRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	if (selectedItem) {
	// 		setSelectedItems([selectedItem]);
	// 	} else {
	// 		setSelectedItems([]);
	// 	}
	// }, [selectedItem]);

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
			const isSelected = isItemInSelection(item);
			if (isSelected) {
				newSelectedItems = selectedItems.filter(
					(current) => current.id !== item.id
				);
			} else {
				newSelectedItems = [...selectedItems, item];
			}
		} else {
			newSelectedItems = [item];
		}
		setSelectedItems(newSelectedItems);
		if (onChange) {
			onChange(newSelectedItems);
		}
		if (!multiple) {
			setIsOpen(false);
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
		selectedItems.length > 0 ? (
			selectedItems.map((item: DropDownItem) => item.value).join(", ")
		) : (
			<span className={styles.dd_header__placeholder}>{title}</span>
		);

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
			role="open-dropdown"
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
