import { propertyContext } from "../contexts/property.context.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const propertyData = req.body;
    const imageFiles = req.files?.images;
    const sellerId = req.user._id;

    const property = await propertyContext.createProperty(
      propertyData,
      imageFiles,
      sellerId
    );

    return res.status(201).json({
      success: true,
      msg: "Property created successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error creating property",
    });
  }
};

// Get all properties with optional filters
export const getAllProperties = async (req, res) => {
  try {
    const filters = req.query;
    const result = await propertyContext.getAllProperties(filters);

    return res.status(200).json({
      success: true,
      msg: "Properties fetched successfully",
      ...result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error fetching properties",
    });
  }
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyContext.getPropertyById(id);

    return res.status(200).json({
      success: true,
      msg: "Property fetched successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error fetching property",
    });
  }
};

// Update a property
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const imageFiles = req.files?.images;
    const userId = req.user._id;

    const updatedProperty = await propertyContext.updateProperty(
      id,
      updateData,
      imageFiles,
      userId
    );

    return res.status(200).json({
      success: true,
      msg: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error updating property",
    });
  }
};

// Delete a property
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    await propertyContext.deleteProperty(id, userId);

    return res.status(200).json({
      success: true,
      msg: "Property deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error deleting property",
    });
  }
};

// Get properties by seller
export const getPropertiesBySeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const properties = await propertyContext.getPropertiesBySeller(sellerId);

    return res.status(200).json({
      success: true,
      msg: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error fetching properties by seller",
    });
  }
};

// Search properties by location
export const searchPropertiesByLocation = async (req, res) => {
  try {
    const { longitude, latitude, maxDistance } = req.query;
    
    if (!longitude || !latitude) {
      return res.status(400).json({
        success: false,
        msg: "Longitude and latitude are required",
      });
    }

    const properties = await propertyContext.searchPropertiesByLocation(
      Number(longitude),
      Number(latitude),
      maxDistance ? Number(maxDistance) : undefined
    );

    return res.status(200).json({
      success: true,
      msg: "Properties fetched successfully",
      properties,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: error.message || "Error searching properties by location",
    });
  }
};
