import express from "express";

const app = express();

app.get("/", (req: any, res: any) => res.json({ status: "UP" }));

app.listen(80, () => console.log("Running server"));