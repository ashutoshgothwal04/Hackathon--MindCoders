import { Property } from "../models/property.models.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/cloudinary.js";

// Create a new property
export const createProperty = async (propertyData, imageFiles, sellerId) => {
  try {
    // Upload images to Cloudinary
    const imageUrls = [];
    if (imageFiles) {
      for (const file of imageFiles) {
        const result = await uploadOnCloudinary(file.path);
        if (result) {
          imageUrls.push(result.secure_url);
        }
      }
    }

    // Create property with image URLs
    const property = await Property.create({
      ...propertyData,
      images: imageUrls,
      seller: sellerId,
    });

    return property;
  } catch (error) {
    throw new Error(`Error creating property: ${error.message}`);
  }
};

// Get all properties with optional filters
export const getAllProperties = async (filters = {}) => {
  try {
    const query = {};

    // Apply filters
    if (filters.city) {
      query["address.city"] = { $regex: filters.city, $options: "i" };
    }

    if (filters.minPrice || filters.maxPrice) {
      query.price = {};
      if (filters.minPrice) query.price.$gte = filters.minPrice;
      if (filters.maxPrice) query.price.$lte = filters.maxPrice;
    }

    if (filters.propertyType) {
      query.propertyType = filters.propertyType;
    }

    if (filters.status) {
      query.status = filters.status;
    }

    // Pagination
    const page = parseInt(filters.page) || 1;
    const limit = parseInt(filters.limit) || 10;
    const skip = (page - 1) * limit;

    // Sorting
    const sortBy = filters.sortBy || "createdAt";
    const sortOrder = filters.sortOrder === "asc" ? 1 : -1;

    const properties = await Property.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit)
      .populate("seller", "username fullName email");

    const total = await Property.countDocuments(query);

    return {
      properties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    throw new Error(`Error fetching properties: ${error.message}`);
  }
};

// Get a property by ID
export const getPropertyById = async (id) => {
  try {
    const property = await Property.findById(id).populate(
      "seller",
      "username fullName email"
    );

    if (!property) {
      throw new Error("Property not found");
    }

    return property;
  } catch (error) {
    throw new Error(`Error fetching property: ${error.message}`);
  }
};

// Update a property
export const updateProperty = async (id, propertyData, imageFiles) => {
  try {
    const property = await Property.findById(id);

    if (!property) {
      throw new Error("Property not found");
    }

    // Upload new images if provided
    if (imageFiles && imageFiles.length > 0) {
      const imageUrls = [];
      for (const file of imageFiles) {
        const result = await uploadOnCloudinary(file.path);
        if (result) {
          imageUrls.push(result.secure_url);
        }
      }

      // Delete old images from Cloudinary
      for (const imageUrl of property.images) {
        await deleteFromCloudinary(imageUrl);
      }

      propertyData.images = imageUrls;
    }

    // Update property
    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      { $set: propertyData },
      { new: true }
    ).populate("seller", "username fullName email");

    return updatedProperty;
  } catch (error) {
    throw new Error(`Error updating property: ${error.message}`);
  }
};

// Delete a property
export const deleteProperty = async (id) => {
  try {
    const property = await Property.findById(id);

    if (!property) {
      throw new Error("Property not found");
    }

    // Delete images from Cloudinary
    for (const imageUrl of property.images) {
      await deleteFromCloudinary(imageUrl);
    }

    // Delete property
    await Property.findByIdAndDelete(id);

    return { message: "Property deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting property: ${error.message}`);
  }
};

// Get properties by seller
export const getPropertiesBySeller = async (sellerId) => {
  try {
    const properties = await Property.find({ seller: sellerId }).populate(
      "seller",
      "username fullName email"
    );

    return properties;
  } catch (error) {
    throw new Error(`Error fetching properties by seller: ${error.message}`);
  }
};

// Search properties by location
export const searchPropertiesByLocation = async (longitude, latitude, maxDistance = 10000) => {
  try {
    const properties = await Property.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: maxDistance, // in meters
        },
      },
    }).populate("seller", "username fullName email");

    return properties;
  } catch (error) {
    throw new Error(`Error searching properties by location: ${error.message}`);
  }
};

// Export all functions as a context object
export const propertyContext = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  getPropertiesBySeller,
  searchPropertiesByLocation,
}; 