import express from "express"
import verifyToken from "../middlewares/authMiddleware.js";
const router = express.Router()
import * as userController from '../controllers/userController.js'
import authorizeRoles from "../middlewares/roleMiddleware.js";

router.get("/", verifyToken, authorizeRoles("admin"), userController.getAllUsers);

router.get("/:id", userController.getUser);

router.post("/", userController.createUser);

router.put("/:id", userController.UpdateUser);

router.delete("/:id", userController.deleteUser);

export default router;