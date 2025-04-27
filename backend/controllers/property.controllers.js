import { Property } from "../models/property.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const { title, description, price, address, location } = req.body;

    // Validate required fields
    if (!title || !description || !price || !address || !location) {
      return res.status(400).json({
        success: false,
        msg: "All required fields must be provided",
      });
    }

    // Handle image uploads
    const imageFiles = req.files?.images;
    if (!imageFiles || imageFiles.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "At least one image is required",
      });
    }

    const imageUrls = [];
    for (const file of imageFiles) {
      const uploadedImage = await uploadOnCloudinary(file.path);
      if (!uploadedImage?.url) {
        return res.status(400).json({
          success: false,
          msg: "Error uploading images",
        });
      }
      imageUrls.push(uploadedImage.url);
    }

    // Create property
    const property = await Property.create({
      title,
      description,
      price,
      images: imageUrls,
      address,
     
      location,
      seller: req.user._id,
    });

    return res.status(201).json({
      success: true,
      msg: "Property created successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error creating property",
      error: error.message,
    });
  }
};

// Get all properties with optional filters
export const getAllProperties = async (req, res) => {
  try {
    const {
      city,
      minPrice,
      maxPrice,
      sortBy = "createdAt",
      sortOrder = "desc",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    if (city) query.city = city;
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const properties = await Property.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("seller", "username fullName email");

    const totalProperties = await Property.countDocuments(query);

    return res.status(200).json({
      success: true,
      msg: "Properties fetched successfully",
      properties,
      totalProperties,
      currentPage: page,
      totalPages: Math.ceil(totalProperties / limit),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error fetching properties",
      error: error.message,
    });
  }
};

// Get a single property by ID
export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id).populate(
      "seller",
      "username fullName email"
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        msg: "Property not found",
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Property fetched successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error fetching property",
      error: error.message,
    });
  }
};

// Update a property
export const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, address, city, location } = req.body;

    // Check if property exists and belongs to the user
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({
        success: false,
        msg: "Property not found",
      });
    }

    if (property.seller.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        msg: "You are not authorized to update this property",
      });
    }

    // Handle image updates if new images are provided
    const imageFiles = req.files?.images;
    let imageUrls = property.images;

    if (imageFiles && imageFiles.length > 0) {
      // Delete old images from Cloudinary
      for (const imageUrl of property.images) {
        const publicId = imageUrl.split("/").pop().split(".")[0];
        await deleteFromCloudinary(publicId);
      }

      // Upload new images
      imageUrls = [];
      for (const file of imageFiles) {
        const uploadedImage = await uploadOnCloudinary(file.path);
        if (!uploadedImage?.url) {
          return res.status(400).json({
            success: false,
            msg: "Error uploading images",
          });
        }
        imageUrls.push(uploadedImage.url);
      }
    }

    // Update property
    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          description,
          price,
          images: imageUrls,
          address,
          city,
          location,
        },
      },
      { new: true }
    ).populate("seller", "username fullName email");

    return res.status(200).json({
      success: true,
      msg: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error updating property",
      error: error.message,
    });
  }
};

// Delete a property
export const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if property exists and belongs to the user
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({
        success: false,
        msg: "Property not found",
      });
    }

    if (property.seller.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        msg: "You are not authorized to delete this property",
      });
    }

    // Delete images from Cloudinary
    for (const imageUrl of property.images) {
      const publicId = imageUrl.split("/").pop().split(".")[0];
      await deleteFromCloudinary(publicId);
    }

    // Delete property
    await Property.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      msg: "Property deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error deleting property",
      error: error.message,
    });
  }
};

// Get properties by seller
export const getPropertiesBySeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const properties = await Property.find({ seller: sellerId })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("seller", "username fullName email");

    const totalProperties = await Property.countDocuments({ seller: sellerId });

    return res.status(200).json({
      success: true,
      msg: "Properties fetched successfully",
      properties,
      totalProperties,
      currentPage: page,
      totalPages: Math.ceil(totalProperties / limit),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error fetching properties",
      error: error.message,
    });
  }
};
