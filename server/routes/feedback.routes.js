import { Router } from "express";

import { createFeedback, getFeedback, updateFeedback, deleteFeedback, getFeedbacksByBusiness, getFeedbacksByUser } from "../controllers/feedback.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", verifyJWT, createFeedback);
router.put("/:id", verifyJWT, updateFeedback);
router.get("/:id", verifyJWT, getFeedback);
router.delete("/:id", verifyJWT, deleteFeedback);
router.get("/user/:userId", verifyJWT, getFeedbacksByUser);
router.get("/business/:businessId", verifyJWT, getFeedbacksByBusiness);

export default router;
