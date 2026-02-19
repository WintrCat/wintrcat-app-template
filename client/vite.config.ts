import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

dotenv.config({ path: "../.env", quiet: true });

const devOrigin = process.env.DEV_ORIGIN || "http://localhost:3000";

export default defineConfig({
    plugins: [reactRouter(), tsConfigPaths()],
    server: {
        port: Number(new URL(devOrigin).port) || 3000
    }
});