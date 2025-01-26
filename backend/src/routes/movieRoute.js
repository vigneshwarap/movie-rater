import express from "express"
const router = express.Router()
import * as movieController from '../controllers/movieController.js';

router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovie);

router.post("/", movieController.createMovie);

export default router;