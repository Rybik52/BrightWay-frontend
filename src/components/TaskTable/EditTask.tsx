import { FC, FormEvent, useState } from "react";
import DropDown from "components/common/DropDown";
import styles from "./Table.module.scss";
import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import RadioButton from "components/common/RadioButton";

interface EditTaskProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

const EditTask: FC<EditTaskProps> = ({ showModal, setShowModal }) => {
	const [type, setType] = useState("month");

	const handleTypeChange = (e: FormEvent<HTMLInputElement>) => {
		setType(e.currentTarget.value);
	};

	const years = [
		{ id: 1, value: "2021" },
		{ id: 2, value: "2022" },
		{ id: 3, value: "2023" },
	];

	const uploadReport = [
		{ id: 1, value: "Отчет о выбытии" },
		{ id: 2, value: "Отчет по ценам" },
		{ id: 3, value: "Отчет по движению" },
		{ id: 4, value: "Отчет по остаткам" },
	];

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Modal showModal={showModal} setShowModal={setShowModal}>
			<form onSubmit={handleSubmit} className={styles.modal}>
				<h3>Редактировать задание на одинарный отчет</h3>
				<DropDown title="Год*" items={years} />
				<div className={styles.modal__radios}>
					<RadioButton
						label="Месяц"
						value="month"
						onChange={handleTypeChange}
						checked={type === "month"}
					/>
					<RadioButton
						label="Неделя"
						value="week"
						onChange={handleTypeChange}
						checked={type === "week"}
					/>
				</div>
				<div className={styles.modal__inputs}>
					{type === "month" ? (
						<Input type="month" />
					) : (
						<Input type="week" />
					)}
					<Input type="text" placeholder="GTIN препарата*" />
					<Input type="text" placeholder="Партия препарата*" />
					<DropDown title="Отчет по выгрузке" items={years} />
					<DropDown title="Организация*" items={uploadReport} />
					<DropDown title="ЭЦП*" items={years} />
				</div>
				<div className={styles.modal__buttons}>
					<Button type="submit" variant="contained">
						Сохранить
					</Button>
					<Button
						type="button"
						onClick={() => setShowModal(false)}
						variant="outlined"
					>
						Отмена
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default EditTask;
