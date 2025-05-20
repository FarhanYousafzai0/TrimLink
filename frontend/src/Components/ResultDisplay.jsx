// components/ResultDisplay.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchOriginalUrl } from "../Features/UrlSlice";

const ResultDisplay = ({ shortenedUrl, originalUrl }) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    toast.success("Copied to clipboard!");

    // Dispatch the GET API call to fetch original URL based on shortened URL
    dispatch(fetchOriginalUrl(shortenedUrl));

    setTimeout(() => setCopied(false), 8000);
  };

  // Star animation component
  const Star = ({ initial, animate, delay }) => (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        delay,
        duration: 0.8,
        repeat: 1,
        repeatType: "reverse",
        ease: "easeOut",
      }}
      className="absolute w-2 h-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-200"
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg p-6 border ${
        copied
          ? "bg-gradient-to-r from-yellow-50 to-indigo-50 border-yellow-100"
          : "bg-gradient-to-r from-indigo-50 to-blue-50 border-blue-100"
      } relative overflow-hidden`}
    >
      {copied && (
        <>
          <Star
            initial={{ x: -10, y: -10, scale: 0 }}
            animate={{ x: 10, y: 10, scale: [1, 1.5, 1] }}
            delay={0.1}
          />
          <Star
            initial={{ x: 20, y: 5, scale: 0 }}
            animate={{ x: 30, y: 15, scale: [1, 1.8, 1] }}
            delay={0.3}
          />
          <Star
            initial={{ x: 40, y: -5, scale: 0 }}
            animate={{ x: 50, y: 5, scale: [1, 2, 1] }}
            delay={0.2}
          />
          <Star
            initial={{ x: -5, y: 20, scale: 0 }}
            animate={{ x: 5, y: 30, scale: [1, 1.7, 1] }}
            delay={0.4}
          />
        </>
      )}

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="overflow-hidden">
            <p className="text-sm text-gray-500 mb-1 truncate">Original URL:</p>
            <p className="text-gray-700 truncate">{originalUrl}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden">
              <p className="text-sm text-gray-500 mb-1">Shortened URL:</p>
              <a
                href={shortenedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium truncate"
              >
                {shortenedUrl}
              </a>
            </div>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg cursor-pointer font-medium relative overflow-hidden ${
                copied
                  ? "bg-gradient-to-r from-yellow-400 to-indigo-500 text-white shadow-lg shadow-yellow-200/50"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              } transition-all`}
            >
              {copied && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 10, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-white opacity-30 rounded-full"
                />
              )}
              {copied ? (
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  Copied! ✨
                </motion.span>
              ) : (
                "Copy"
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3 }}
        className={`h-1 mt-4 origin-left ${
          copied
            ? "bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-400"
            : "bg-gradient-to-r from-purple-400 to-blue-400"
        }`}
      />
    </motion.div>
  );
};

export default ResultDisplay;
