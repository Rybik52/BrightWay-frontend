import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import MainPage from "./pages/MainPage";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/main" element={<MainPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</BrowserRouter>
);
