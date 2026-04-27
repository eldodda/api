import express from "express";
import adminController from "../controllers/adminController.js";

const router = express.Router();

router.use(express.json());

const adminControllerI = new adminController();

router
  .get("/admins", adminControllerI.adminGet)
  .post("/admins", adminControllerI.adminPost)
  .put("/admins/:id", adminControllerI.adminPut)
  .delete("/admins/:id", adminControllerI.adminDelete);

export default router;
