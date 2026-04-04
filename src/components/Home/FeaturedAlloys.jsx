/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const alloys = [
  { number: "22", symbol: "Ti", name: "Titanium", weight: "47.867", to: "titanium" },
  { number: "24", symbol: "Cr", name: "Stainless Steel", weight: "51.996", to: "cr" },
  { number: "28", symbol: "Ni", name: "Nickel Alloys", weight: "58.693", to: "NickelAlloys" },
  { number: "26", symbol: "Fe", name: "Iron", weight: "55.845", to: "Fe" },
  { number: "29", symbol: "Cu", name: "Copper Based", weight: "29.985", to: "Cu" },
  { number: "13", symbol: "Al", name: "Aluminium", weight: "26.982", to: "Al" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FeaturedAlloys() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Featured alloys
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {alloys.map((alloy) => (
            <Link key={alloy.symbol} to={alloy.to} className="block">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -5
                }}
                className="bg-white border-2 border-gray-200 p-6 cursor-pointer transition-colors hover:border-[#408ccb] group"
              >
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-400 group-hover:text-[#408ccb] transition-colors">
                    {alloy.number}
                  </span>
                </div>

                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center py-4"
                >
                  <span className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 group-hover:text-[#408ccb] transition-colors">
                    {alloy.symbol}
                  </span>
                </motion.div>

                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                    {alloy.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {alloy.weight}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
