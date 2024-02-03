import styles from "./Pagination.module.scss";
import Button from "../Button";
import { ArrowPrevIcon, ArrowNextIcon } from "assets/IconsComponent";

const index = () => {
	return (
		<div className={styles.wrapper}>
			<ArrowPrevIcon />
			<div className={styles.wrapper__buttons}>
				<Button variant="text">1</Button>
				<Button variant="light">2</Button>
				<Button variant="text">3</Button>
			</div>
			<ArrowNextIcon />
		</div>
	);
};

export default index;
