// components/ShortenerForm.jsx
import { motion, AnimatePresence } from "framer-motion";
import ResultDisplay from "./ResultDisplay";

const ShortenerForm = () => {
  // These would normally come from state/hooks
  const loading = false;
  const shortenedUrl = ""; // Set to a dummy value like "https://short.ly/abc123" to see the result display

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

        <form className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              placeholder="Enter your long URL here..."
              className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="px-8 py-4 rounded-lg cursor-pointer font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg"
            >
              Shorten URL
            </motion.button>
          </div>
        </form>

        {/* Loading state example */}
        {/* <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled
              className="px-8 py-4 rounded-lg font-semibold text-white bg-gray-400 cursor-not-allowed transition-all shadow-lg"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            </motion.button> */}

        <AnimatePresence>
          {shortenedUrl && (
            <ResultDisplay 
              shortenedUrl={shortenedUrl} 
              originalUrl="https://example.com/very/long/url/to/be/shortened" 
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ShortenerForm;