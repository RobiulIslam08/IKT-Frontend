/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import image from "../../../../assets/application.jpg";

export default function Applications() {
  const applications = [
    "Chemical Processing Equipment",
    "General High-Performance Applications",
    "Heat Exchangers and Process Vessels",
    "Offshore and Marine Structures",
    "Power Generation Equipment",
    "High-Purity and Specialty Applications",
    "Corrosion-Resistant Fabrications"
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Common Applications</h2>
              </div>
              <div className="w-16 h-1 bg-linear-to-r from-primary to-primary/30 rounded-full"></div>
            </div>
            <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 mb-8">
              {applications.map((app, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <ChevronRight className="w-3 h-3 text-primary" />
                  </motion.div>
                  <span className="text-base font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">{app}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
              <button className="group relative px-6 py-3 bg-primary text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></motion.div>
                <span className="relative flex items-center gap-2">
                  REQUEST A QUOTE FROM IKT
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group flex items-center justify-center"
          >
            <div className="w-full h-72 md:h-[380px] lg:h-[400px] xl:h-[430px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Carbon Steel Material Applications"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
