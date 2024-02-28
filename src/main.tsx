import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "store/store";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import TasksPage from "pages/TasksPage";
import NoticesPage from "pages/NoticesPage";
import ReportsPage from "pages/ReportsPage";
import { createRoot } from "react-dom/client";
import NotFoundPage from "pages/NotFoundPage";
import SettingsPage from "pages/SettingsPage";
import ProfilePage from "pages/SettingsPage/ProfilePage";
import ProtectedRoute from "components/Auth/ProtectedRoute";
import { MainLayout, PlainLayout } from "components/common/Layout";
import OrganizationsPage from "pages/SettingsPage/OrganizationsPage";
import DigitalSignaturePage from "pages/SettingsPage/DigitalSignaturePage";

import "./index.css";
import SupportPage from "pages/SupportPage";
import CustomProvider from "rsuite/esm/CustomProvider/CustomProvider";
import { ruRU } from "rsuite/esm/locales";

const router = createBrowserRouter([
	{
		path: "/login",
		element: (
			<PlainLayout>
				<LoginPage />
			</PlainLayout>
		),
	},
	{
		path: "*",
		element: (
			<PlainLayout>
				<NotFoundPage />
			</PlainLayout>
		),
	},
	{
		path: "/",
		element: (
			<PlainLayout>
				<LoginPage />
			</PlainLayout>
		),
	},
	{
		path: "",
		element: (
			<ProtectedRoute>
				<MainLayout />
			</ProtectedRoute>
		),
		children: [
			{ path: "/home", element: <HomePage /> },
			{ path: "/notices", element: <NoticesPage /> },
			{ path: "/tasks", element: <TasksPage /> },
			{ path: "/reports", element: <ReportsPage /> },
			{
				path: "/settings",
				element: <SettingsPage />,
				children: [
					{ path: "profile", element: <ProfilePage /> },
					{ path: "organizations", element: <OrganizationsPage /> },
					{
						path: "digitalSignature",
						element: <DigitalSignaturePage />,
					},
				],
			},
			{ path: "support", element: <SupportPage /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<CustomProvider locale={ruRU}>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</CustomProvider>
);
