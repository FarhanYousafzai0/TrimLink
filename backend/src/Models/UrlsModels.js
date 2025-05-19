import mongoose from "mongoose";

const ShortUrlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      index: true, // Makes shortUrl queries faster
      unique: true, // Ensures no duplicates
    },
    clicks: {
      type: Number,
      default: 0,
      required: true,
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  
  },
  {
    timestamps: true, // ✅ Fixed typo: should be `timestamps`, not `timeStamps`
  }
);

export const ShortUrl = mongoose.model("ShortUrl", ShortUrlSchema);
