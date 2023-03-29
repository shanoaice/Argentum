import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import linariaPlugin from "@linaria/vite";

export default defineConfig({
	plugins: [solidPlugin(), linariaPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
