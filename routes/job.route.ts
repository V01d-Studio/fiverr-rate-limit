import express from "express";
import { methodNotAllowed } from "../utils/functions";
import { categorize } from "../controllers/job.controller";

const router = express.Router();

router.route("/").get(categorize).all(methodNotAllowed);

export default router;
