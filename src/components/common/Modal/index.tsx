import { FC, PropsWithChildren, useEffect, useRef } from "react";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import CloseIcon from "assets/close.svg?react";

import styles from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootState";
import { closeModal } from "store/modalSlice";

interface ModalProps extends PropsWithChildren {
	modalTitle: string;
	exitButton?: boolean;
	goBack?: boolean; // Параметр который позволяет вернуться на предыдущую страницу при закрытии модального окна
}

const Index: FC<ModalProps> = ({
	children,
	exitButton,
	goBack,
	modalTitle,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const modalRef = useRef<HTMLDivElement>(null);
	const isOpen = useSelector(
		(state: RootState) => state.modal[modalTitle]?.isOpen
	);

	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: modalTitle }));
		goBack && navigate(-1);
	};

	const modalStyles = {
		[styles.wrapper]: true,
		[styles.hidden]: !isOpen,
	};

	const contentStyles = {
		[styles.content]: true,
		[styles.hidden]: !isOpen,
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
		if (!isOpen) return;

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
	}, [isOpen]);

	return (
		<div className={classNames(modalStyles)} ref={modalRef}>
			<div className={classNames(contentStyles)}>
				{exitButton && (
					<button className={styles.close} onClick={handleCloseModal}>
						<CloseIcon />
					</button>
				)}
				{children}
			</div>
		</div>
	);
};

export default Index;
