/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MechanicalRequirementsTable() {
  const brandColor = '#06afcf';

  const mechanicalData = [
    {
      property: 'Tensile Strength, MPa (ksi)',
      value: '450-585 (65-85)'
    },
    {
      property: 'Yield Strength, min MPa (ksi)',
      value: '240 (35)'
    },
    {
      property: 'Elongation min, %200 mm (8 in)',
      value: '19'
    },
    {
      property: 'Elongation, % 50mm (2in)',
      value: '23'
    }
  ];

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
      className="w-full px-4 py-12 md:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-10">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-800"
          variants={itemVariants}
        >
          Mechanical requirements
        </motion.h1>
      </div>

      <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-5 px-8 text-white font-bold text-left border-r border-white/20 w-2/3">
                Mechanical properties
              </th>
              <th className="py-5 px-8 text-white font-bold text-center">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {mechanicalData.map((row, idx) => (
              <motion.tr 
                key={idx}
                variants={itemVariants}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-5 px-8 text-gray-700 font-medium border-r border-gray-100">
                  {row.property}
                </td>
                <td className="py-5 px-8 text-center text-gray-700 font-medium">
                  {row.value}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Hint */}
      <div className="flex justify-center gap-4 mt-6 text-gray-400 md:hidden animate-pulse text-xs">
        <ChevronLeft size={16} /> Swipe to view mechanical values <ChevronRight size={16} />
      </div>
    </motion.div>
  );
}