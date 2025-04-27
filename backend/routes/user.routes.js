import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateProfilePicture,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account-details").post(verifyJWT, updateAccountDetails);
router.route("/update-profile-picture").post(verifyJWT, updateProfilePicture);

// File upload routes
router.post(
  "/avatar",
  verifyJWT,
  upload.single("avatar"),
  updateProfilePicture
);

router.post(
  "/cover-image",
  verifyJWT,
  upload.single("coverImage"),
  updateProfilePicture
);

export default router;

