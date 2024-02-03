import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react",
		}),
	],
	resolve: {
		alias: {
			components: "/src/components",
			pages: "/src/pages",
			assets: "/src/assets",
			variables: "/src/variables",
		},
	},
});
