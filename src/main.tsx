import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ReactKeycloakProvider } from "@react-keycloak/web"

import { store } from "store/store"

import ProtectedRoute from "components/Auth/ProtectedRoute"
import { MainLayout, PlainLayout } from "components/common/Layout"
import NotFoundPage from "pages/NotFoundPage"
import { createRoot } from "react-dom/client"

import { Suspense } from "react"
import "./index.css"
import {
	DigitalSignaturePage,
	HomePage,
	NoticesPage,
	OrganizationsPage,
	ProfilePage,
	ReportsPage,
	SettingsPage,
	SupportPage,
	TasksPage,
	UsersPage
} from "./pages"
import Loader from "components/common/Loader"
import keycloak from "./Keycloak.ts"
import LoginPage from "pages/LoginPage"

const router = createBrowserRouter([
	{
		path: "/login",
		element: (
			<PlainLayout>
				<LoginPage />
			</PlainLayout>
		)
	},
	{
		path: "*",
		element: (
			<PlainLayout>
				<NotFoundPage />
			</PlainLayout>
		)
	},
	{
		path: "/",
		element: (
			<PlainLayout>
				<LoginPage />
			</PlainLayout>
		)
	},
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<MainLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: "/home",
				element: <HomePage />
			},
			{ path: "/reports", element: <ReportsPage /> },
			{ path: "/notices", element: <NoticesPage /> },
			{ path: "/tasks", element: <TasksPage /> },
			{ path: "/users", element: <UsersPage /> },
			{
				path: "/settings",
				element: <SettingsPage />,
				children: [
					{ path: "profile", element: <ProfilePage /> },
					{ path: "organizations", element: <OrganizationsPage /> },
					{
						path: "digitalSignature",
						element: <DigitalSignaturePage />
					}
				]
			},
			{ path: "support", element: <SupportPage /> }
		]
	}
])

createRoot(document.getElementById("root")!).render(
	<ReactKeycloakProvider
		initOptions={{ onLoad: "login-required" }}
		authClient={keycloak}
	>
		<Suspense fallback={<Loader />}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</Suspense>
	</ReactKeycloakProvider>
)
