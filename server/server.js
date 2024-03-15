
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


const db_url = process.env.DATABASE;
mongoose.connect(db_url).then(console.log("database connected")).catch((err) => console.log(err));

app.use("/api", authRoute);

app.listen(8000, () => console.log("server runing"))