// components/ResultDisplay.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

const ResultDisplay = ({ shortenedUrl, originalUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-blue-100"
    >
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              } transition-all`}
            >
              {copied ? "Copied!" : "Copy"}
            </motion.button>
        
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mt-4 origin-left"
      />
    </motion.div>
  );
};

export default ResultDisplay;