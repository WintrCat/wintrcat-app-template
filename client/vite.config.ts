import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

dotenv.config({ path: "../.env", quiet: true });

const port = Number(
    new URL(process.env.DEV_ORIGIN || "").port
) || 3000;

export default defineConfig({
    plugins: [reactRouter(), tsConfigPaths()],
    server: { port }
});