import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

import Layout from "components/common/Layout";
import LoginPage from "pages/LoginPage";
import TasksPage from "pages/TasksPage";
import NoticesPage from "pages/NoticesPage";
import ReportsPage from "pages/ReportsPage";
import SupportPage from "pages/SupportPage";
import SettingsPage from "pages/SettingsPage";
import HomePage from "pages/HomePage";

import "./index.css";
import { FC } from "react";

interface ProtectedRouteProps {
	element: JSX.Element;
}

const isAuthenticated = () => {
	return true;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
	// Проверяем, аутентифицирован ли пользователь
	return isAuthenticated() ? element : <Navigate to="/login" />;
};

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Layout>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/home"
					element={<ProtectedRoute element={<HomePage />} />}
				/>
				<Route
					path="/notices"
					element={<ProtectedRoute element={<NoticesPage />} />}
				/>
				<Route
					path="/tasks"
					element={<ProtectedRoute element={<TasksPage />} />}
				/>
				<Route
					path="/reports"
					element={<ProtectedRoute element={<ReportsPage />} />}
				/>
				<Route
					path="/settings"
					element={<ProtectedRoute element={<SettingsPage />} />}
				/>
				<Route
					path="/support"
					element={<ProtectedRoute element={<SupportPage />} />}
				/>
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</Layout>
	</BrowserRouter>
);
