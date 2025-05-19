// components/Features.jsx
import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    description: "Get your shortened links instantly with our high-speed API.",
    icon: "⚡",
  },
  {
    title: "Secure & Reliable",
    description: "All links are encrypted and 99.9% uptime guaranteed.",
    icon: "🔒",
  },
  {
    title: "Analytics",
    description: "Track clicks and visitor data for your shortened links.",
    icon: "📊",
  },
];

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-800 mb-12"
      >
        Why Choose Short.ly?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;