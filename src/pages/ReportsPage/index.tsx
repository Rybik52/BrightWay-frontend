import styles from "./ReportsPage.module.scss";
import { Dashboard } from "superset-dashboard-sdk";
import {
	useGetDashboardsUIDQuery,
	useGetDashboardURLQuery,
	useGetGuestTokenQuery,
} from "store/api.ts";
import SpinLoader from "components/common/SpinLoader";
// import dp from "./dataProvider";

const Index = () => {
	const { data: dashboardURL, isLoading: urlLoading } =
		useGetDashboardURLQuery({});

	const { data: dashboardsUID, isLoading: uidLoading } =
		useGetDashboardsUIDQuery({});

	const { data: guestToken, isLoading: tokenLoading } = useGetGuestTokenQuery(
		{}
	);

	if (urlLoading || uidLoading || tokenLoading) {
		return <SpinLoader />;
	}

	return (
		<div>
			<h1>Отчеты</h1>
			<div className={styles.container}>
				<Dashboard
					uuid={dashboardsUID[0]}
					domain={dashboardURL?.host}
					guestToken={guestToken?.token}
				/>
			</div>
		</div>
	);
};

export default Index;
