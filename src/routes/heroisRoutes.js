import express from "express";

import { getAllHerois } from "../controllers/heroisController.js";

const router = express.Router();

router.get("/", getAllHerois);
router.get("/:id", getHeroiById);

export default router;