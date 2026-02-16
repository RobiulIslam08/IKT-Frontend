/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecifications() {
  const brandColor = '#06afcf';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="w-full px-4 py-12 md:px-8 bg-white space-y-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Properties - Chemical Analysis (UNS S31254) */}
      <section>
        <div className="text-center mb-10">
          <motion.h1 className="text-3xl md:text-5xl font-bold  mb-4" variants={itemVariants}>
            Properties
          </motion.h1>
          <motion.p className="text-gray-500 text-sm italic" variants={itemVariants}>
            Chemical analysis
          </motion.p>
        </div>

        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[900px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                {['Standard', 'Grade', 'C', 'Mn', 'Cr', 'Ni', 'Mo'].map((h, i) => (
                  <th key={i} className="py-4 text-white font-bold border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-700">
                <td className="py-6 border-r border-gray-100 font-medium">ASTM A240/A240M</td>
                <td className="py-6 border-r border-gray-100 font-bold">UNS S31254</td>
                <td className="py-6 border-r border-gray-100">{'<0.020'}</td>
                <td className="py-6 border-r border-gray-100">{'<1'}</td>
                <td className="py-6 border-r border-gray-100">19.5 – 20.5</td>
                <td className="py-6 border-r border-gray-100">17.5 – 18.5</td>
                <td className="py-6 last:border-0">6.0 – 6.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Mechanical Properties (UNS S31254) */}
      <section>
        <motion.p className="text-center text-gray-500 text-sm italic mb-8" variants={itemVariants}>
          Mechanical properties
        </motion.p>
        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[700px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                {['Grade', 'Yield MPA', 'Tensile MPA', 'Elongation % (50mm)'].map((h, i) => (
                  <th key={i} className="py-4 text-white font-bold border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-700">
                <td className="py-6 border-r border-gray-100 font-bold tracking-wider">UNS S31254</td>
                <td className="py-6 border-r border-gray-100 font-medium">300 min</td>
                <td className="py-6 border-r border-gray-100 font-medium">650 – 850</td>
                <td className="py-6 last:border-0 font-medium">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Composition Details (Thickness Based) */}
     

      {/* Mobile Indicator */}
      <div className="flex justify-center gap-4 text-gray-400 md:hidden animate-pulse text-xs">
        <ChevronLeft size={16} /> Swipe to view detailed specifications <ChevronRight size={16} />
      </div>
    </motion.div>
  );
}