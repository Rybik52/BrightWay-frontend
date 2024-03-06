import Button from "components/common/Button";
import { FC } from "react";

interface FetchErrorProps {
	onClick: () => void;
	fetchName: string;
}

const FetchError: FC<FetchErrorProps> = ({ onClick, fetchName }) => {
	return (
		<div>
			<h3>Не удалось загрузить {fetchName}</h3>
			<Button onClick={onClick} variant="light">
				Повторить попутку
			</Button>
		</div>
	);
};

export default FetchError;
