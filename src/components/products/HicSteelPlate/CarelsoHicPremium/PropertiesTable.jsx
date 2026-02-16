/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const brandColor = '#06afcf';

  // ইমেজ (image_e896b9.png) থেকে প্রাপ্ত ডাটা
  const rangeData = [
    { thickness: '6/8/10/13/16/20/25/30/35/40mm', length: '12000mm', width: '2000/2500/3000mm' },
    { thickness: '45/50mm', length: '9000mm', width: '2500/3000mm' },
    { thickness: '55/60/65/70/75/80mm', length: '7000mm', width: '2000/2500mm' },
    { thickness: '90-200mm', length: '6000mm', width: '3000mm' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Our range...
        </motion.h1>
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-gray-600 font-bold text-sm md:text-lg uppercase tracking-wider">Grades</p>
          <p className="text-primary font-extrabold text-base md:text-2xl">ASME/ASTM SA/A 516 Grades 60/65/70</p>
          <p className="text-gray-400 text-[10px] md:text-sm italic">See table below for sizes.....</p>
        </motion.div>
      </div>

      {/* Table Section */}
      <div className="relative overflow-x-auto border border-gray-100 rounded-xl shadow-lg max-w-7xl mx-auto">
        <table className="w-full min-w-[600px] text-center border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-4 px-2 md:py-6 text-white font-bold text-[11px] md:text-lg border-r border-white/20 uppercase tracking-widest">Thickness</th>
              <th className="py-4 px-2 md:py-6 text-white font-bold text-[11px] md:text-lg border-r border-white/20 uppercase tracking-widest">Length</th>
              <th className="py-4 px-2 md:py-6 text-white font-bold text-[11px] md:text-lg uppercase tracking-widest">Width</th>
            </tr>
          </thead>
          <tbody>
            {rangeData.map((row, idx) => (
              <tr 
                key={idx} 
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors group"
              >
                <td className="py-5 px-2 md:py-8 font-bold text-gray-800 border-r border-gray-50 text-[10px] md:text-base">
                  {row.thickness}
                </td>
                <td className="py-5 px-2 md:py-8 text-gray-600 border-r border-gray-50 text-[10px] md:text-base group-hover:text-primary transition-colors">
                  {row.length}
                </td>
                <td className="py-5 px-2 md:py-8 text-gray-600 text-[10px] md:text-base group-hover:text-primary transition-colors">
                  {row.width}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Indicator */}
      <div className="flex justify-center items-center gap-2 mt-6 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view available sizes</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}