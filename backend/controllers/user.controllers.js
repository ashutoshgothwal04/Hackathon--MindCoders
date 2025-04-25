import { User } from "../models/user.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js"; // Assuming you have this utility


// Generate access and refresh tokens
const generateAccessAndRefreshToken = async (user) => {
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

// Register new user
const registerUser = async (req, res) => {
  const { fullName, email, username, password, phone } = req.body;

  if (!fullName || !email || !username || !password || !phone) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) return res.status(400).json({ msg: "User already exists" });

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  const user = await User.create({ fullName, email, username, password, phone, avatar: avatar?.url, coverImage: coverImage?.url });
  const createdUser = await User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) return res.status(400).json({ msg: "User creation failed" });

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);

  res.status(201).json({
    success: true,
    msg: "User created successfully",
    user: createdUser,
    accessToken,
    refreshToken,
  });
};

// Login user
const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) return res.status(400).json({ success: false, msg: "Username or email is required" });

  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user || !(await user.isPasswordCorrect(password)))
    return res.status(400).json({ success: false, msg: "Invalid credentials" });

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  res
    .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
    .cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
    .status(200)
    .json({ success: true, msg: "Logged in successfully", user: loggedInUser, accessToken, refreshToken });
};

// Logout user
const logoutUser = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findByIdAndUpdate(userId, { $unset: { refreshToken: 1 } }, { new: true });
  if (!user) return res.status(400).json({ success: false, msg: "User not found" });

  return res
    .clearCookie("accessToken", { httpOnly: true, secure: true })
    .clearCookie("refreshToken", { httpOnly: true, secure: true })
    .status(200)
    .json({ success: true, msg: "Logged out successfully" });
};

// Refresh access token
const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  if (!incomingRefreshToken) return res.status(401).json({ msg: "Unauthorized request" });

  try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id);
    if (!user || incomingRefreshToken !== user.refreshToken)
      return res.status(400).json({ msg: "Invalid or expired refresh token" });

    const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(user);

    res
      .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
      .cookie("refreshToken", newRefreshToken, { httpOnly: true, secure: true })
      .status(200)
      .json(new ApiResponse(200, { accessToken, refreshToken: newRefreshToken }, "Token refreshed"));
  } catch (error) {
    return res.status(400).json({ msg: "Invalid refresh token" });
  }
};

// Change password
const changeCurrentPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user?._id);
  if (!(await user.isPasswordCorrect(oldPassword))) return res.status(400).json({ msg: "Invalid old password" });

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });
  return res.status(200).json({ msg: "Password changed successfully" });
};

// Get current user
const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user?._id).select("-password -refreshToken");
  if (!user) return res.status(400).json({ msg: "User not found" });

  return res.status(200).json({ success: true, msg: "User fetched successfully", user });
};

// Update account details
const updateAccountDetails = async (req, res) => {
  const { fullName, email } = req.body;
  if (!fullName || !email) return res.status(400).json({ msg: "All fields are required" });

  const user = await User.findByIdAndUpdate(req.user?._id, { $set: { fullName, email } }, { new: true }).select("-password");
  return res.status(200).json({ msg: "Account details updated", user });
};

// Update profile picture
const updateProfilePicture = async (req, res) => {
  try {
    const avatarLocalPath = req.file?.path;
    if (!avatarLocalPath) return res.status(400).json({ success: false, msg: "Avatar file is required" });

    const user = await User.findById(req.user?._id);
    if (!user) return res.status(404).json({ success: false, msg: "User not found" });

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar?.url) return res.status(400).json({ success: false, msg: "Avatar upload failed" });

    if (user.avatar) {
      const oldAvatarPublicId = user.avatar.split("/").pop().split(".")[0];
      await deleteFromCloudinary(oldAvatarPublicId);
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, { $set: { avatar: avatar.url } }, { new: true }).select("-password -refreshToken");
    return res.status(200).json({ success: true, msg: "Avatar updated", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ success: false, msg: "Error updating avatar", error: error.message });
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateProfilePicture,
};
