import express from "express"
const router = express.Router()
import * as movieController from '../controllers/movieController.js';
import {getAllComOfMovies, addMovieComment} from "../controllers/CommentController.js"
import verifyToken from "../middlewares/authMiddleware.js";
import authorizeRoles from "../middlewares/roleMiddleware.js";


// Movies
router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovie);

router.post("/", movieController.createMovie);

router.put("/:id", movieController.updateMovie);

router.delete("/:id", movieController.deleteMovie);

// Comments
router.get("/:id/comments", getAllComOfMovies)

router.post("/:id/comments", verifyToken, authorizeRoles("user"), addMovieComment)

export default router;