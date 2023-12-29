import express from "express";
import { authorizedAdmin, isAuthenticatd } from "../middlewares/Auth.js";
import { contact, courserequest, dashboardStats } from "../controllers/otherController.js";

const router = express.Router();


// contact form
router.route("/contact").post(contact);

// course request
router.route("/courserequest").post(courserequest);

// Admin Dashboard
router.route("/admin/stats").get(isAuthenticatd, authorizedAdmin, dashboardStats);

export default router;