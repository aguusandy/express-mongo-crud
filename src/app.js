import express from "express";
import StructuresRouter from "../routes/structures.js";
import AlgorithmRouter from "../routes/algorithm.js";

const app = express();

app.use(express.json());
app.use(StructuresRouter);
app.use(AlgorithmRouter);

export default app;