import express from "express";
import { login } from "../controllers/c_auth.js";

const router = express.Router();

router.post("/login", login);

export default router;