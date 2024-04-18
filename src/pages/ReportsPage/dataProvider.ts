import { DefaultDataProvider } from "superset-dashboard-sdk";

const dp = new DefaultDataProvider("172.17.53.14:8088", {
	username: "admin",
	password: "admin",
});

export default dp;
