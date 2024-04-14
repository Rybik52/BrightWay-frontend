import Button from "components/common/Button";
import DropDown from "components/common/DropDown";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import RadioButton from "components/common/RadioButton";
import WeekPicker from "components/common/WeekPicker";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Table.module.scss";
import { closeModal } from "store/modalSlice";
import YearsDropDown from "./YearsDropDown";
import MonthDropDown from "./MonthDropDown";
import OrgDropDown from "./OrgDropDown";
import { useAddQueueMutation } from "store/api";

const uploadReport = [
	{ id: 1, value: "Отчет о выбытии" },
	{ id: 2, value: "Отчет по ценам" },
	{ id: 3, value: "Отчет по движению" },
	{ id: 4, value: "Отчет по остаткам" },
];

interface IFormState {
	year: number | undefined;
	month: number | undefined;
	week?: number | undefined;
	type: string;
	gtin: string;
	batch: string;
	orgId: number | undefined;
}

const EditTaskModal = () => {
	const [AddTask] = useAddQueueMutation();
	const dispatch = useDispatch();
	const [type, setType] = useState("month");

	const [form, setForm] = useState<IFormState>({
		year: 0,
		month: 0,
		type: "traffic",
		gtin: "",
		batch: "",
		orgId: 0,
	});

	const handleClose = () => {
		dispatch(closeModal({ modalId: "EditTaskModal" }));
	};

	const handleTypeChange = (e: FormEvent<HTMLInputElement>) => {
		setType(e.currentTarget.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// (e.target as HTMLFormElement).reset();
		AddTask(form);
		console.log(form);
	};

	return (
		<Modal modalTitle="EditTaskModal">
			<form onSubmit={handleSubmit} className={styles.modal}>
				<h3>Редактировать задание на одинарный отчет</h3>

				<YearsDropDown
					setSelectedItem={(yearObj) =>
						setForm({ ...form, year: yearObj?.id })
					}
				/>

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
						<MonthDropDown
							setSelectedItem={(monthObj) =>
								setForm({ ...form, month: monthObj?.id })
							}
						/>
					) : (
						<WeekPicker />
					)}
					<Input
						type="text"
						placeholder="GTIN препарата*"
						onChange={(e) =>
							setForm({ ...form, gtin: e.target.value })
						}
					/>
					<Input
						type="text"
						placeholder="Партия препарата*"
						onChange={(e) =>
							setForm({ ...form, batch: e.target.value })
						}
					/>
					<DropDown title="Отчет по выгрузке" items={uploadReport} />
					<OrgDropDown
						setSelectedItem={(orgObj) =>
							setForm({ ...form, orgId: orgObj?.id })
						}
					/>
					{/* <DropDown title="ЭЦП*" items={ownersNames} /> */}
				</div>
				<div className={styles.modal__buttons}>
					<Button type="submit" variant="contained">
						Сохранить
					</Button>
					<Button
						type="button"
						onClick={handleClose}
						variant="outlined"
					>
						Отмена
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default EditTaskModal;
