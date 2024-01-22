import { createRoot } from "react-dom/client";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { App } from "./components/App";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const isAuthenticated = () => {
	// Здесь может быть ваша логика проверки аутентификации
	// Верните true, если пользователь аутентифицирован, иначе false.
	return true;
};

const ProtectedRoute = ({ element }) => {
	// Проверяем, аутентифицирован ли пользователь
	return isAuthenticated() ? element : <Navigate to="/login" />;
};

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/login" element={<LoginPage />} />
			<Route
				path="/dashboard"
				element={<ProtectedRoute element={<MainPage />} />}
			/>
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	</BrowserRouter>
);
