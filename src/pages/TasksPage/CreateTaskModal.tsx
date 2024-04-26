import Button from "components/common/Button";
import Input from "components/common/Input";
import Modal from "components/common/Modal";

const CreateTaskModal = () => {
	return (
		<Modal modalTitle="CreateTaskModal" exitButton>
			<h2>Создать задание</h2>
			<form>
				<Input type="year" placeholder="Год" />
				<Button type="submit" variant="contained">
					Создать
				</Button>
			</form>
		</Modal>
	);
};

export default CreateTaskModal;
