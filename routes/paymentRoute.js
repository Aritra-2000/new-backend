import express from "express";
import { isAuthenticatd } from "../middlewares/Auth.js";
import { buySubscription, cancelSubscription, getRazorpayKey, paymentVerification } from "../controllers/paymentController.js";


const router = express.Router();

// Buy subscription
router.route("/subscribe").get(isAuthenticatd, buySubscription);


// Verify Payment and save referance in database
router.route("/paymentverification").post(isAuthenticatd, paymentVerification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorpayKey);

router.route("/subscribe/cancel").delete(isAuthenticatd, cancelSubscription)

export default router;