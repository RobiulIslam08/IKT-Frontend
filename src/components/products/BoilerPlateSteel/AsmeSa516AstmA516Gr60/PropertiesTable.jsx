/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const brandColor = '#06afcf';

  // আপনার দেওয়া ডাটা অনুযায়ী অ্যারে
  const compositionData = [
    { element: 'Carbon (max)', thickness: '12.5mm and under', composition: '0.21', note: 'A, B, C' },
    { element: '', thickness: 'over 12.5mm to 50mm', composition: '0.23', note: 'A, B, C' },
    { element: '', thickness: 'over 50mm to 100mm', composition: '0.25', note: 'A, B, C' },
    { element: '', thickness: 'over 100mm', composition: '0.27', note: 'A, B, C' },
    { element: 'Manganese', thickness: '12.5mm and under', composition: '0.60 – 0.90', note: 'A, C, D' },
    { element: '', thickness: '12.5mm and under', composition: '0.55 – 0.98', note: 'B, C, D' },
    { element: '', thickness: 'over 12.5mm', composition: '0.85 – 1.20', note: 'A, C' },
    { element: '', thickness: 'over 12.5mm', composition: '0.79 – 1.30', note: 'B, C' },
    { element: 'Phosphorus (max)', thickness: '—', composition: '0.025', note: 'A, B' },
    { element: 'Sulphur (max)', thickness: '—', composition: '0.025', note: 'A, B' },
    { element: 'Silicon', thickness: '—', composition: '0.15 – 0.40', note: 'A' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.05 }
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
          className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-800"
          variants={itemVariants}
        >
          Properties
        </motion.h1>
      </div>

      <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-md">
        <table className="w-full min-w-[600px] text-center border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-3 px-2 md:py-5 md:px-4 text-white font-bold border-r border-white/20 text-[11px] md:text-base">Element</th>
              <th className="py-3 px-2 md:py-5 md:px-4 text-white font-bold border-r border-white/20 text-[11px] md:text-base">Thickness</th>
              <th className="py-3 px-2 md:py-5 md:px-4 text-white font-bold border-r border-white/20 text-[11px] md:text-base">Composition (%)</th>
              <th className="py-3 px-2 md:py-5 md:px-4 text-white font-bold last:border-0 text-[11px] md:text-base">Note</th>
            </tr>
          </thead>
          <tbody>
            {compositionData.map((row, idx) => (
              <motion.tr
                key={idx}
                variants={itemVariants}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${row.element ? 'bg-gray-50/30' : 'bg-white'}`}
              >
                <td className="py-3 px-2 md:py-4 md:px-4 font-medium text-gray-800 border-r border-gray-100 text-[10px] md:text-sm">
                  {row.element}
                </td>
                <td className="py-3 px-2 md:py-4 md:px-4 text-gray-700 font-medium border-r border-gray-100  text-[10px] md:text-sm">
                  {row.thickness}
                </td>
                <td className="py-3 px-2 md:py-4 md:px-4 text-gray-700 border-r border-gray-100 font-medium text-[10px] md:text-sm whitespace-nowrap">
                  {row.composition}
                </td>
                <td className="py-3 px-2 md:py-4 md:px-4 text-gray-700 font-medium text-[10px] md:text-sm">
                  {row.note}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Indicator */}
      <div className="flex justify-center gap-4 mt-6 text-gray-400 md:hidden animate-pulse text-[10px]">
        <ChevronLeft size={14} /> Swipe to view full composition details <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}