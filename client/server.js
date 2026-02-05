import express from "express";
import { createRequestHandler } from "@react-router/express";

const app = express();

app.use("/", express.static("./public"));

app.all("*any", createRequestHandler({
    build: () => import("./build/server/index.js")
}));

const port = 3000;
app.listen(port, () => {
    console.log(`frontend server running on ${port}.`);
});