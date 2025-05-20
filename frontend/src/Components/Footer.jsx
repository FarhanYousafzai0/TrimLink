// components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 m-3 rounded-md to-blue-500 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">TrimLink</h2>
            <p className="text-white mt-2">
            Power your brand with a sleek, reliable, and modern URL shortener
            </p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-text-white "
            >
              Terms
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-text-white "
            >
              Privacy
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className="text-text-white "
            >
              Contact
            </motion.a>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center text-white">
          <p>© {new Date().getFullYear()} Short.ly. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;