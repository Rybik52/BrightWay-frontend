import styles from "components/Tables/Table.module.scss"
import Button from "components/common/Button"
// import Input from "components/common/Input";
import Modal from "components/common/Modal"
import RadioButton from "components/common/RadioButton"
import WeekPicker from "components/common/WeekPicker"
import { FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useAddQueueMutation } from "store/api"
import { closeModal } from "store/modalSlice"
import MonthDropDown from "../dropdowns/MonthDropDown"
import OrgDropDown from "../dropdowns/OrgDropDown"
import YearsDropDown from "../dropdowns/YearsDropDown"
import { RootState } from "store/rootState"
import ReportsDropDown from "../dropdowns/ReportsDropDown"

interface IFormState {
	year: number | null
	month: number | null
	week?: number | null
	type: string
	gtin: string | null
	batch: string | null
	orgId: number | null
}

const EditTaskModal = () => {
	const [AddTask] = useAddQueueMutation()
	const dispatch = useDispatch()
	const data = useSelector(
		(state: RootState) => state.modal["EditAndCreateTaskModal"]?.data
	)
	const [type, setType] = useState("month")
	const [dropdownKey, setDropdownKey] = useState<number>(0)

	const initialFormState: IFormState = {
		year: data?.year ?? null,
		month: data?.month ?? null,
		type: data?.type ?? "",
		gtin: data?.gtin ?? "",
		batch: data?.batch ?? "",
		orgId: null
	}
	const [form, setForm] = useState<IFormState>(initialFormState)
	const isFormValid = form.year && form.month && form.type && form.orgId

	const handleCloseModal = () => {
		dispatch(closeModal({ modalId: "EditAndCreateTaskModal" }))
		setForm({
			year: null,
			month: null,
			type: "",
			gtin: "",
			batch: "",
			orgId: null
		})
		setDropdownKey((prevKey) => prevKey + 1)
	}

	useEffect(() => {
		if (data) {
			setForm((prevForm) => ({
				...prevForm,
				year: data.year ?? null,
				month: data.month ?? null,
				type: data.type ?? "",
				gtin: data.gtin ?? "",
				batch: data.batch ?? ""
			}))
		}
	}, [data])

	const handleTypeChange = (e: FormEvent<HTMLInputElement>) => {
		setType(e.currentTarget.value)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		if (isFormValid) {
			AddTask(form)
			handleCloseModal()
		}
	}

	return (
		<Modal modalTitle="EditAndCreateTaskModal">
			<form onSubmit={handleSubmit} className={styles.modal}>
				{data === undefined ? (
					<h3>Создать задание</h3>
				) : (
					<h3>Редактировать задание на одинарный отчет</h3>
				)}

				<YearsDropDown
					key={`years-${dropdownKey}`}
					selectedItem={form.year}
					onChange={(year: number | null) => {
						setForm({ ...form, year })
					}}
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
							key={`months-${dropdownKey}`}
							selectedItem={form.month}
							onChange={(month: number | null) => {
								setForm({ ...form, month })
							}}
						/>
					) : (
						<WeekPicker />
					)}
					{/* <Input
						type="text"
						value={form.gtin ?? ""}
						placeholder="GTIN препарата*"
						onChange={(e) =>
							setForm({ ...form, gtin: e.target.value })
						}
					/>
					<Input
						type="text"
						value={form.batch ?? ""}
						placeholder="Партия препарата*"
						onChange={(e) =>
							setForm({ ...form, batch: e.target.value })
						}
					/> */}

					<ReportsDropDown
						key={`reports-${dropdownKey}`}
						selectedItem={form.type}
						onChange={(type: string) => {
							setForm({ ...form, type })
						}}
					/>
					<OrgDropDown
						key={`org-${dropdownKey}`}
						selectedItem={form.orgId}
						onChange={(orgId: number | null) =>
							setForm({ ...form, orgId })
						}
					/>
				</div>
				<div className={styles.modal__buttons}>
					<Button
						disabled={!isFormValid}
						type="submit"
						variant="contained"
					>
						Сохранить
					</Button>
					<Button
						type="button"
						onClick={handleCloseModal}
						variant="outlined"
					>
						Отмена
					</Button>
				</div>
			</form>
		</Modal>
	)
}

export default EditTaskModal
