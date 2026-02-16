/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const brandColor = '#06afcf';

  const compositionData = [
    { element: 'Carbon (max)', thickness: '12.5 mm and under', composition: '0.24', note: 'A, B, C' },
    { element: '', thickness: 'over 12.5 to 50 mm', composition: '0.26', note: 'A, B, C' },
    { element: '', thickness: 'over 50 to 100 mm', composition: '0.28', note: 'A, B, C' },
    { element: 'Manganese', thickness: '', composition: '0.85 – 1.20', note: 'A, C' },
    { element: '', thickness: '', composition: '0.79 – 1.30', note: 'B, C' },
    { element: 'Phosphorus (max)', thickness: '', composition: '0.025', note: 'A, B' },
    { element: 'Sulphur (max)', thickness: '', composition: '0.025', note: 'A, B' },
    { element: 'Silicon', thickness: '', composition: '0.15 – 0.40', note: 'A' },
    { element: '', thickness: '', composition: '0.13 – 0.45', note: 'B' },
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
      className="w-full px-4 py-12 md:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-10">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold  mb-4"
          variants={itemVariants}
        >
          Properties
        </motion.h1>
      </div>

      <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-md">
        <table className="w-full min-w-[800px] text-center border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-5 px-4 text-white font-bold border-r border-white/20">Element</th>
              <th className="py-5 px-4 text-white font-bold border-r border-white/20">Thickness</th>
              <th className="py-5 px-4 text-white font-bold border-r border-white/20">Composition (%)</th>
              <th className="py-5 px-4 text-white font-bold last:border-0">Note</th>
            </tr>
          </thead>
          <tbody>
            {compositionData.map((row, idx) => (
              <motion.tr 
                key={idx} 
                variants={itemVariants}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${row.element ? 'bg-gray-50/30' : 'bg-white'}`}
              >
                <td className="py-4 px-4 font-bold text-gray-800 border-r border-gray-100">
                  {row.element}
                </td>
                <td className="py-4 px-4 text-gray-600 border-r border-gray-100 italic">
                  {row.thickness || '—'}
                </td>
                <td className="py-4 px-4 text-gray-700 border-r border-gray-100 font-medium">
                  {row.composition}
                </td>
                <td className="py-4 px-4 text-gray-500 text-sm font-semibold">
                  {row.note}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Indicator */}
      <div className="flex justify-center gap-4 mt-6 text-gray-400 md:hidden animate-pulse text-xs">
        <ChevronLeft size={16} /> Swipe to see full composition details <ChevronRight size={16} />
      </div>
    </motion.div>
  );
}