import { DefaultDataProvider } from "superset-dashboard-sdk";

const dp = new DefaultDataProvider("http://v-sandbox-2:8088", {
	username: "admin",
	password: "admin",
});

export default dp;
