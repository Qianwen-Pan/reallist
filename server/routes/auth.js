import express from "express";
// import * as auth from "../controller/auth";
import { welcome } from "../controller/auth.js";

const router = express.Router();

router.get("/", welcome);

export default router;