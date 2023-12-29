import express from "express";
import { addToplaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture, updateUserRole } from "../controllers/userController.js";
import { authorizedAdmin, isAuthenticatd } from "../middlewares/Auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload,register)

router.route("/login").post(login)

router.route("/logout").get(logout)

router.route("/me").post(isAuthenticatd,getMyProfile).delete(isAuthenticatd,deleteMyProfile)

router.route("/changepassword").put(isAuthenticatd,changePassword)

router.route("/updateprofile").put(isAuthenticatd,updateProfile)

router.route("/updateprofilepicture").put(isAuthenticatd,singleUpload,updateProfilePicture)

router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);

router.route("/addtoplaylist").post(isAuthenticatd,addToplaylist);

router.route("/removefromplaylist").delete(isAuthenticatd,removeFromPlaylist);


router.route("/admin/users").get(isAuthenticatd,authorizedAdmin,getAllUsers)

router.route("/admin/user/:id").put(isAuthenticatd,authorizedAdmin,updateUserRole).delete(isAuthenticatd,authorizedAdmin,deleteUser)



export default router;

