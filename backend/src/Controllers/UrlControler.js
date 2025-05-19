import { nanoid } from "nanoid";
import { ShortUrl } from "../Models/UrlsModels.js";

export const postURL = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(url)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const shortCode = nanoid(7);

    const newShortUrl = new ShortUrl({
      fullUrl: url,
      shortUrl: shortCode
    });

    await newShortUrl.save();

      res.send( newShortUrl)
    
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Server error" });
  }
};
