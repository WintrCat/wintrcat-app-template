import express from "express";
import dotenv from "dotenv";
import cluster from "cluster";
import { cpus } from "os";

dotenv.config({ path: "../.env", quiet: true });

const port = new URL(process.env.BACKEND_ORIGIN || "").port || 8080;
const threads = Number(process.env.THREADS) || cpus().length;

async function main() {
    if (cluster.isPrimary) {
        for (let i = 0; i < threads; i++) cluster.fork();
        return;
    }

    const app = express();

    app.get("/api/example", (req, res) => {
        res.send("elephant");
    });

    app.listen(port, () => {
        if (cluster.worker?.id != 1) return;

        console.log(
            "backend server running on port "
            + `${port} with ${threads} thread(s).`
        );
    });
}

main();