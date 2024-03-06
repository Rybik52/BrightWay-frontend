import styles from "./Loader.module.scss";

const Index = () => {
	return (
		<div className={styles.loader_container}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default Index;
