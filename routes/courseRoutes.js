import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeSubscribers, authorizedAdmin, isAuthenticatd } from "../middlewares/Auth.js";

const router = express.Router();

router.route("/course").get(getAllCourses);

router.route("/createcourse").post(isAuthenticatd,authorizedAdmin,singleUpload,createCourse);

router.route("/course/:id").get(isAuthenticatd,authorizeSubscribers,getCourseLectures).post(isAuthenticatd,authorizedAdmin,singleUpload,addLecture).delete(isAuthenticatd,authorizedAdmin,deleteCourse);

router.route("/lecture").delete(isAuthenticatd,authorizedAdmin,deleteLecture);

export default router;