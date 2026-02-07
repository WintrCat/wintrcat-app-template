import express from "express";
import { createRequestHandler } from "@react-router/express";
import dotenv from "dotenv";
import cluster from "cluster";
import { cpus } from "os";

dotenv.config({ path: "../.env", quiet: true });

const port = new URL(process.env.ORIGIN || "").port || 8080;
const threads = Number(process.env.THREADS) || cpus().length;

async function main() {
    if (cluster.isPrimary) {
        for (let i = 0; i < threads; i++) cluster.fork();
        return;
    }

    const app = express();

    app.use("/", express.static("../client/build/client"));
    
    app.all("*any", createRequestHandler({
        build: () => import("../../client/build/server/index.js" as any)
    }));

    app.listen(port, () => {
        if (cluster.worker?.id != 1) return;

        console.log(
            `server running on port ${port}`
            + ` with ${threads} thread(s).`
        );
    });
}

main();