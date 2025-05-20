import { nanoid } from "nanoid";
import { ShortUrl } from "../Models/UrlsModels.js";

// POST: Create Short URL
export const postURL = async (req, res) => {
  try {
    const { url, userId } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(url)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const shortCode = nanoid(7);

    const shortUrlData = {
      fullUrl: url,
      shortUrl: shortCode,
    };

    if (userId) {
      shortUrlData.user = userId;
    }

    const newShortUrl = new ShortUrl(shortUrlData);
    await newShortUrl.save();

    res.status(201).json({
  message: "Short URL created successfully",
  shortUrl: process.env.APP_URL + shortCode,
  fullUrl: url,
  shortLink: `${req.protocol}://${req.get("host")}/${shortCode}`, // Full short link
  user: userId || "Guest",
});

  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// GET: Redirect by Short URL
export const getShortUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await ShortUrl.findOneAndUpdate(
      { shortUrl: id },
      { $inc: { clicks: 1 } },
      { new: true }
    );

    if (url) {
      return res.redirect(url.fullUrl);
    } else {
      return res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    console.error("Error redirecting to full URL:", error);
    res.status(500).json({ error: "Server error" });
  }
};
