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
  const { data: dashboardURL, isLoading: urlIsLoading } =
    useGetDashboardURLQuery({});

  const { data: dashboardsUID, isLoading: dashboardsUIDIsLoading } =
    useGetDashboardsUIDQuery({});

  const { data: guestToken, isLoading: guestTokenIsLoading } =
    useGetGuestTokenQuery({});

  if (urlIsLoading && dashboardsUIDIsLoading && guestTokenIsLoading) {
    return <SpinLoader />;
  }

  return (
    <div>
      <h1>Отчеты</h1>
      <div className={styles.container}>
        <Dashboard
          uuid={dashboardsUID}
          domain={dashboardURL}
          guestToken={guestToken}
        />
      </div>
    </div>
  );
};

export default Index;
