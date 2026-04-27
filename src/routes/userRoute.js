import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.use(express.json());

const userControllerI = new userController();

router
  .get("/users", userControllerI.userGet)
  .post("/users", userControllerI.userPost)
  .put("/users/:id", userControllerI.userPut)
  .delete("/users/:id", userControllerI.userDelete);

export default router;
