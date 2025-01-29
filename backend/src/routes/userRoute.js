import express from "express"
const router = express.Router()
import * as userController from '../controllers/userController.js'

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUser);

router.post("/", userController.createUser);

router.put("/:id", userController.UpdateUser);

router.delete("/:id", userController.deleteUser);

export default router;