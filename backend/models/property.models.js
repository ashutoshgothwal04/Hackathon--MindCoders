import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLength: 1000,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      default: 0.0,
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one image is required",
      },
    },
    address: {
      flatNo: {
        type: String,
        required: true,
        trim: true,
      },
      buildingName: {
        type: String,
        required: true,
        trim: true,
      },
      colony: {
        type: String,
        required: true,
        trim: true,
      },
      nearByLocation: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      pincode: {
        type: String,
        required: true,
        trim: true,
        validate: {
          validator: function (v) {
            return /^\d{6}$/.test(v);
          },
          message: "Pincode must be 6 digits",
        },
      },
    },
   
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        // required: true,
        validate: {
          validator: function (v) {
            return (
              v.length === 2 &&
              v[0] >= -180 &&
              v[0] <= 180 && // longitude
              v[1] >= -90 &&
              v[1] <= 90
            ); // latitude
          },
          message: "Invalid coordinates",
        },
      },
    },
    propertyType: {
      type: String,
      required: true,
      enum: ["residential", "commercial", "industrial", "agricultural", "land"],
      default: "residential",
    },
    propertySize: {
      type: Number,
      required: true,
      min: 0,
    },
    propertyAge: {
      type: Number,
      min: 0,
    },
    propertyCondition: {
      type: String,
      enum: ["new", "good", "needs_repair", "under_construction"],
      default: "good",
    },
    status: {
      type: String,
      enum: ["available", "pending", "sold"],
      default: "available",
    },
    amenities: [
      {
        type: String,
        trim: true,
      },
    ],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create a 2dsphere index for geospatial queries
propertySchema.index({ location: "2dsphere" });

// Create compound indexes for common queries
propertySchema.index({ city: 1, price: 1 });
propertySchema.index({ seller: 1, status: 1 });

export const Property = mongoose.model("Property", propertySchema);
