import { Router } from "express";
import adminRoute from "./adminRoute.js";
import userRoute from "./userRoute.js";

const router = Router();

router.use(adminRoute);
router.use(userRoute);

export { adminRoute, userRoute };
export default router;
