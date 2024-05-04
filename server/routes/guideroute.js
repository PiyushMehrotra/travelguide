import express from "express";
import { createGuide,getallguide,getguide} from "../controller/guidecntrl.js";
const router = express.Router();
//CREATE
router.post("/createguide",createGuide);

//GET

router.get("/:id", getguide);
//GET ALL

router.get("/", getallguide);


export default router;
