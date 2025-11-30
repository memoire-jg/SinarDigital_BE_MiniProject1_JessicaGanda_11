import express from "express";
import { getFacts, createFacts, deleteFacts } from "../controllers/apiController.js";

const router = express.Router();

router.get("/facts", getFacts);
router.post("/facts", createFacts);
router.delete("/facts/:id", deleteFacts);

export default router;
