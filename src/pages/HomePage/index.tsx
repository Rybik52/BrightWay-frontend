import Card from "components/Card";
import styles from "./HomePage.module.scss";
import FlashDriveIcon from "assets/CardsIcons/FlashDriveIcon";
import BankIcon from "assets/CardsIcons/BankIcon";
import ListIcon from "assets/CardsIcons/ListIcon";

const Index = () => {
	return (
		<div className={styles.cards_container}> 
			<Card title="Электронная подпись" icon={<FlashDriveIcon />}>
				<button className={styles.button}>Перейти</button>
			</Card>
			<Card title="Мои организации" icon={<BankIcon />}>
				<button className={styles.button}>Перейти</button>
			</Card>
			<Card title="Мои отчеты" icon={<ListIcon />}>
				<button className={styles.button}>Перейти</button>
			</Card>
		</div>
	);
};

export default Index;
