import express from "express";
import { createUser } from "../controller/usercntrl.js";
const router=express.Router()
router.post("/register",createUser)

export default router;