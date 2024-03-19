import Button from "components/common/Button";
import Modal from "components/common/Modal";
import DropDown from "components/common/DropDown";
import styles from "./TasksPage.module.scss";
import CheckBox from "components/common/CheckBox/Index";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { DaysOfWeek } from "./DaysOfWeek";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "store/modalSlice";

interface Inputs {
	daysOfWeek: DaysOfWeek;
	report: string;
	time: string;
}

const EditSchedule = () => {
	const dispatch = useDispatch();

	const { handleSubmit, control, reset } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		dispatch(openModal({ modalId: "EditScheduleModal" }));
		reset();
	};

	const reports = [
		{ id: 1, value: "2" },
		{ id: 2, value: "3" },
		{ id: 3, value: "4" },
	];

	const time = [
		{ id: 1, value: "10:00" },
		{ id: 2, value: "11:00" },
		{ id: 3, value: "12:00" },
		{ id: 4, value: "13:00" },
		{ id: 5, value: "14:00" },
		{ id: 6, value: "15:00" },
		{ id: 7, value: "16:00" },
		{ id: 8, value: "17:00" },
		{ id: 9, value: "18:00" },
		{ id: 10, value: "19:00" },
	];

	return (
		<Modal modalTitle="EditScheduleModal">
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h3>Редактировать задание по расписанию</h3>
				<div className={styles.form__row}>
					<div>
						<p className={styles.header}>Отчеты в сутки</p>
						<DropDown title="Отчеты в сутки" items={reports} />
					</div>
					<div>
						<p className={styles.header}>Время</p>
						<DropDown title="Время" items={time} />
					</div>
				</div>
				<div className={styles.from__schedule}>
					<p className={styles.header}>Расписание</p>
					<div className={styles.grid}>
						{Object.values(DaysOfWeek).map((day, index) => (
							<Controller
								key={index}
								control={control}
								name={
									day.split(" ")[1] as
										| "time"
										| "daysOfWeek"
										| "report"
								}
								render={({ field }) => (
									<CheckBox
										label={day.split(" ")[1]}
										{...field}
									/>
								)}
							/>
						))}
					</div>
				</div>
				<div className={styles.form__row}>
					<Button type="submit" variant="contained">
						Сохранить
					</Button>
					<Button
						type="button"
						onClick={() =>
							dispatch(
								closeModal({ modalId: "EditScheduleModal" })
							)
						}
						variant="cancel"
					>
						Отменить
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default EditSchedule;
