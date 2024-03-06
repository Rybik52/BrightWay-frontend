import Button from "components/common/Button";
import DropDown, { DropDownItem } from "components/common/DropDown";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import RadioButton from "components/common/RadioButton";
import WeekPicker from "components/common/WeekPicker";
import { FC, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/rootState";
import styles from "../Table.module.scss";

interface EditTaskProps {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
}

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

const EditTask: FC<EditTaskProps> = ({ showModal, setShowModal }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState("month");
	const [form, setForm] = useState({
		year: "",
		type: "month",
		gtin: "",
		batch: "",
		organizations: "",
		digitalSignatures: "",
	});

	const digitalSignatures = useSelector(
		(state: RootState) => state.digitalSignatures.data
	);

	const organizations = useSelector(
		(state: RootState) => state.organizations.data
	);

	const organizationsTitles: DropDownItem[] = organizations.map((item) => ({
		id: item.id,
		value: item.organizationTitle,
	}));

	const ownersNames: DropDownItem[] = digitalSignatures.map((item) => ({
		id: item.id,
		value: item.ownerName,
	}));

	const handleTypeChange = (e: FormEvent<HTMLInputElement>) => {
		setType(e.currentTarget.value);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		(e.target as HTMLFormElement).reset();
		console.log(form);
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
						<Input
							type="month"
							placeholder="Месяц"
							title="Выбор Месяца"
						/>
					) : (
						<WeekPicker
							onClick={() => setIsOpen(!isOpen)}
							isOpen={isOpen}
						/>
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
					<DropDown
						title="Организация*"
						items={organizationsTitles}
					/>
					<DropDown title="ЭЦП*" items={ownersNames} />
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
