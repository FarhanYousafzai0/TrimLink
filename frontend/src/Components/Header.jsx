// components/Header.jsx
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 m-3 rounded-md to-blue-500 shadow-lg">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="container mx-auto px-4 py-6"
      >
        <div className="flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-white"
          >
            TrimLink
          </motion.h1>
          <nav>
            <ul className="flex space-x-6">
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#" className="text-white hover:text-blue-200">
                  Features
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#" className="text-white hover:text-blue-200">
                  Pricing
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="#" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;