import axios from 'axios';

const url = 'http://localhost:1567/api/url';

// 🔗 POST: Create a short URL (with or without userId)
export const posttUrl = async (urlData) => {
  try {
    const response = await axios.post(`${url}/add-url`, urlData);
    return response.data;
  } catch (error) {
    console.error("Error creating short URL:", error.response?.data || error.message);
    throw error;
  }
};

// 🔁 GET: Retrieve original URL by short code
export const getShortUrl = async (shortCode) => {
  try {
    const response = await axios.get(`${url}/${shortCode}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving short URL:", error.response?.data || error.message);
    throw error;
  }
};
