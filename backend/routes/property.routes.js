import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getPropertiesBySeller,
  searchPropertiesByLocation,
} from "../controllers/property.controllers.js";

import { verifyJWT } from "../middlewares/JWT_Verify.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Apply JWT verification middleware to all routes except get all and get by ID
router.use((req, res, next) => {
  if (req.path === "/" && req.method === "GET") {
    next();
  } else if (req.path.match(/^\/[a-fA-F0-9]{24}$/) && req.method === "GET") {
    next();
  } else if (req.path === "/search/location" && req.method === "GET") {
    next();
  } else {
    verifyJWT(req, res, next);
  }
});

// Create property route with image upload middleware
router.post(
  "/",
  upload.fields([{ name: "images", maxCount: 10 }]),
  createProperty
);

// Get all properties with optional filters
router.get("/", getAllProperties);

// Get property by ID
router.get("/:id", getPropertyById);

// Update property with image upload middleware
router.patch(
  "/:id",
  upload.fields([{ name: "images", maxCount: 10 }]),
  updateProperty
);

// Delete property
router.delete("/:id", deleteProperty);

// Get properties by seller
router.get("/seller/:sellerId", getPropertiesBySeller);

// Search properties by location
router.get("/search/location", searchPropertiesByLocation);

export default router;
