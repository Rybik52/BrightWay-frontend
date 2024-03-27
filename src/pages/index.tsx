import { lazy } from "react";

export const HomePage = lazy(() => import("pages/HomePage"));
export const UsersPage = lazy(() => import("pages/UsersPage"));
export const TasksPage = lazy(() => import("pages/TasksPage"));
export const SupportPage = lazy(() => import("pages/SupportPage"));
export const NoticesPage = lazy(() => import("pages/NoticesPage"));
export const ReportsPage = lazy(() => import("pages/ReportsPage"));

// Настройки
export const SettingsPage = lazy(() => import("pages/SettingsPage"));
export const ProfilePage = lazy(() => import("pages/SettingsPage/ProfilePage"));
export const OrganizationsPage = lazy(
	() => import("pages/SettingsPage/OrganizationsPage")
);
export const DigitalSignaturePage = lazy(
	() => import("pages/SettingsPage/DigitalSignaturePage")
);
