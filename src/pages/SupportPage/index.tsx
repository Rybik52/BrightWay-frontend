import Button from "components/common/Button";
import Input from "components/common/Input";
import styles from "./SupportPage.module.scss";
import SuccessModal from "./SuccessModal";
import { useDispatch } from "react-redux";
import { openModal } from "store/modalSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorText from "components/common/ErrorText";

interface IFormInput {
	header: string;
	description: string;
}

const Index = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	const dispatch = useDispatch();

	const onSubmit: SubmitHandler<IFormInput> = () => {
		dispatch(openModal({ modalId: "SupportSuccessModal" }));
	};

	return (
		<>
			<h1>Тех. поддержка</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={styles.container}
			>
				<Input
					{...register("header", {
						required: "Заголовок это обязательное поле*",
					})}
					isValidated={!!errors.header}
					type="text"
					placeholder="Заголовок"
				/>
				{errors.header && (
					<ErrorText>{errors.header.message}</ErrorText>
				)}
				<textarea
					{...register("description", {
						required: "Описание это обязательное поле*",
					})}
					placeholder="Описание"
				/>
				{errors.description && (
					<ErrorText>{errors.description.message}</ErrorText>
				)}

				<Button type="submit" variant="contained">
					Отправить
				</Button>
			</form>
			<SuccessModal />
		</>
	);
};

export default Index;
