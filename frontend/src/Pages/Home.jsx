import React from 'react'
import ShortenerForm from '../Components/ShortenerForm'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <Toaster position="top-center" />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <ShortenerForm />
        <Features />
      </motion.main>
      <Footer />
    </div>
    </>
  )
}

export default Home
