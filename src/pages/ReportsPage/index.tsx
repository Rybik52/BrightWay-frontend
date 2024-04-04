import styles from "./ReportsPage.module.scss";

const Index = () => {
	return (
		<div>
			<h1>Отчеты</h1>
			<div className={styles.container}>
				<iframe
					title="sales"
					src="https://analytics.velpharm.group/superset/dashboard/Sales?standalone=1&show_filters=1&expand_filters=0"
				/>
			</div>
		</div>
	);
};

export default Index;
