import { motion, AnimatePresence } from "framer-motion";
import ResultDisplay from "./ResultDisplay";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateShortUrl } from "../Features/UrlSlice";

const ShortenerForm = () => {
  const [url, seturl] = useState("");

  const dispatch = useDispatch();
  const { urlError, urlLoading, shortUrl } = useSelector((state) => state.Url);

  const handleSumbiturl = (e) => {
    e.preventDefault();
    if (!url) return;
    dispatch(generateShortUrl({ url }));
  };

  // shortUrl here is an object from your backend response, so:
  // We need to pass shortLink and fullUrl to ResultDisplay
  const shortLink = shortUrl?.shortLink || "";
  const fullUrl = shortUrl?.fullUrl || url; // fallback to input if API response missing

  return (
    <section className="max-w-4xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Shorten Your Links
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Paste your long URL below to get a shortened version instantly
        </p>

        <form className="mb-8" onSubmit={handleSumbiturl}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              value={url}
              name="url"
              onChange={(e) => seturl(e.target.value)}
              placeholder="Enter your long URL here..."
              className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={urlLoading}
              className={`px-8 py-4 rounded-lg cursor-pointer font-semibold text-white ${
                urlLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              } transition-all shadow-lg`}
            >
              {urlLoading ? "Processing..." : "Shorten URL"}
            </motion.button>
          </div>
        </form>

        {urlError && <p className="text-red-600 text-center mb-4">{urlError}</p>}

        <AnimatePresence>
          {shortLink && (
            <ResultDisplay
              shortLink={shortLink}
              fullUrl={fullUrl}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ShortenerForm;
