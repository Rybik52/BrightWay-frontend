import { FC, useEffect, useRef } from "react";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import CloseIcon from "assets/close.svg?react";

import styles from "./Modal.module.scss";

interface ModalProps {
	exitButton?: boolean;
	goBack?: boolean; // Параметр который позволяет вернуться на предыдущую страницу при закрытии модального окна
	children: React.ReactNode;
	showModal: boolean;
	setShowModal: (isVisible: boolean) => void;
}

const Index: FC<ModalProps> = ({
	children,
	showModal,
	setShowModal,
	exitButton,
	goBack,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const modalStyles = { [styles.wrapper]: true, [styles.hidden]: !showModal };
	const navigate = useNavigate();

	const handleClose = () => {
		setShowModal(!showModal);
		goBack && navigate(-1);
	};

	const handleKeyDown = (
		e: KeyboardEvent,
		focusableElements: NodeListOf<HTMLElement>
	) => {
		if (e.key === "Tab") {
			e.preventDefault();

			const activeElement = document.activeElement;
			const currentIndex = Array.from(focusableElements).findIndex(
				(element) => element === activeElement
			);

			if (e.shiftKey) {
				const previousElement =
					currentIndex === 0
						? focusableElements[focusableElements.length - 1]
						: focusableElements[currentIndex - 1];
				previousElement.focus();
			} else {
				const nextElement =
					currentIndex === focusableElements.length - 1
						? focusableElements[0]
						: focusableElements[currentIndex + 1];
				nextElement.focus();
			}
		}
	};

	useEffect(() => {
		if (!showModal) return;

		const handleKeyDownWrapper = (e: KeyboardEvent) => {
			const focusableElements = modalRef.current?.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			) as NodeListOf<HTMLElement>;

			if (focusableElements) {
				handleKeyDown(e, focusableElements);
			}
		};

		window.addEventListener("keydown", handleKeyDownWrapper);

		return () => {
			window.removeEventListener("keydown", handleKeyDownWrapper);
		};
	}, [showModal]);

	return (
		<div className={classNames(modalStyles)} ref={modalRef}>
			<div className={styles.content}>
				{exitButton && (
					<button className={styles.close} onClick={handleClose}>
						<CloseIcon />
					</button>
				)}
				{children}
			</div>
		</div>
	);
};

export default Index;
