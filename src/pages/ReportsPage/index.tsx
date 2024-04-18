import styles from "./ReportsPage.module.scss";
import { Dashboard } from "superset-dashboard-sdk";
// import dp from "./dataProvider";

const Index = () => {
	return (
		<div>
			<h1>Отчеты</h1>
			<div className={styles.container}>
				<Dashboard
					uuid="b3df309f-2211-43dc-b519-af3327dcb9e1"
					domain="http://172.17.53.15:8088"
					guestToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJmaXJzdF9uYW1lIjoiYWRtaW4iLCJsYXN0X25hbWUiOiJhZG1pbiJ9LCJyZXNvdXJjZXMiOlt7InR5cGUiOiJkYXNoYm9hcmQiLCJpZCI6ImIzZGYzMDlmLTIyMTEtNDNkYy1iNTE5LWFmMzMyN2RjYjllMSJ9XSwicmxzX3J1bGVzIjpbeyJkYXRhc2V0IjowLCJjbGF1c2UiOiIifV0sImlhdCI6MTcxMjkxNTQ4NS45NzAyNTY4LCJleHAiOjE3MTI5MTU3ODUuOTcwMjU2OCwiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.uYTfs414JlSsjinN7L9RAPbu0vRJd8ZvSSW1wwiNxyE"
				/>
				{/* <iframe
					title="sales"
					src="http://172.17.53.15:8088/superset/dashboard/Sales/?standalone=1&show_filters=1&expand_filters=0"
				/> */}
			</div>
		</div>
	);
};

export default Index;
