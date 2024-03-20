import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public/Logeo")));
app.use(indexRoutes);

export default app;
