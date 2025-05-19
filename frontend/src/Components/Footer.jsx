// components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Short.ly</h2>
            <p className="text-gray-400 mt-2">
              The modern URL shortener for your business
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Terms
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Privacy
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Contact
            </motion.a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Short.ly. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;