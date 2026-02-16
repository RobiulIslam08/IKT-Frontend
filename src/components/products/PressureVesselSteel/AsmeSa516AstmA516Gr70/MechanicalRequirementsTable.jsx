/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MechanicalRequirementsTable() {
  const brandColor = '#06afcf';

  // ইমেজ analysis করে প্রাপ্ত নতুন ভ্যালুগুলো
  const mechanicalData = [
    {
      property: 'Tensile Strength, MPa (ksi)',
      value: '485-620 (70-90)' //
    },
    {
      property: 'Yield Strength, min MPa (ksi)',
      value: '260 (38)' //
    },
    {
      property: 'Elongation min, % 200 mm (8 in)',
      value: '17' //
    },
    {
      property: 'Elongation min, % 50 mm (2 in)',
      value: '21' //
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
      className="w-full px-2 py-8 md:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6 md:mb-10">
        <motion.h1 
          className="text-2xl md:text-4xl font-bold text-gray-800"
          variants={itemVariants}
        >
          Mechanical requirements
        </motion.h1>
      </div>

      <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
        <table className="w-full min-w-[320px] md:min-w-[600px] border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-3 px-4 md:py-5 md:px-8 text-white font-bold text-left border-r border-white/20 w-2/3 text-[11px] md:text-base">
                Mechanical property
              </th>
              <th className="py-3 px-4 md:py-5 md:px-8 text-white font-bold text-center text-[11px] md:text-base">
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
                <td className="py-3 px-4 md:py-5 md:px-8 text-gray-700 font-medium border-r border-gray-100 text-[10px] md:text-sm">
                  {row.property}
                </td>
                <td className="py-3 px-4 md:py-5 md:px-8 text-center text-gray-800 font-semibold text-[10px] md:text-sm whitespace-nowrap">
                  {row.value}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Hint */}
      <div className="flex justify-center gap-4 mt-6 text-gray-400 md:hidden animate-pulse text-[10px]">
        <ChevronLeft size={14} /> Swipe to view mechanical values <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}