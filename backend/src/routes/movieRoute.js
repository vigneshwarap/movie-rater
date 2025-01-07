import express from "express"
const router = express.Router()
import * as movieController from '../controllers/movieController.js';

router.get("/", movieController.getAllMovies);

export default router;