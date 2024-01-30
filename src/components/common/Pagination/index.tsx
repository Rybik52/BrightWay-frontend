import styles from "./Pagination.module.scss";
import Button from "../Button";
import { PrevArrowIcon } from "assets/prevArrowIcon";
import { NextArrowIcon } from "assets/NextArrowIcon";

const index = () => {
	return (
		<div className={styles.wrapper}>
			<PrevArrowIcon />
			<div className={styles.wrapper__buttons}>
				<Button variant="text">1</Button>
				<Button variant="light">2</Button>
				<Button variant="text">3</Button>
			</div>
			<NextArrowIcon />
		</div>
	);
};

export default index;
