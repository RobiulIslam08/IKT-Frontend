/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTable460n() {
  const brandColor = '#06afcf';

  // ইমেজ (image_e97b37.png) থেকে প্রাপ্ত ডাটা
  const impactData = [
    {
      direction: 'Longitudinal',
      m50: '-',
      m40: '-',
      m20: '40 J min',
      m10: '43 J min',
      zero: '47 J min',
      plus20: '55 J min'
    },
    {
      direction: 'Transverse',
      m50: '-',
      m40: '-',
      m20: '20 J min',
      m10: '24 J min',
      zero: '27 J min',
      plus20: '31 J min'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-6">
        <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-800" variants={itemVariants}>
          Properties
        </motion.h1>
        <p className="text-[10px] md:text-sm text-gray-500 font-semibold mt-2  uppercase">
          Impact energy values for the normalised condition
        </p>
      </div>

      <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
        <table className="w-full min-w-[600px] text-center border-collapse">
          <thead>
            <tr style={{ backgroundColor: brandColor }}>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">Direction</th>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">-50°C</th>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">-40°C</th>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">-20°C</th>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">-10°C</th>
              <th className="py-3 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base">0°C</th>
              <th className="py-3 px-2 text-white font-bold text-[11px] md:text-base">+20°C</th>
            </tr>
          </thead>
          <tbody>
            {impactData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-2 font-bold text-gray-800 border-r border-gray-100 text-[10px] md:text-sm bg-gray-50/30 ">
                  {row.direction}
                </td>
                <td className="py-4 px-2 text-gray-600 border-r border-gray-100 text-[10px] md:text-sm">{row.m50}</td>
                <td className="py-4 px-2 text-gray-600 border-r border-gray-100 text-[10px] md:text-sm">{row.m40}</td>
                <td className="py-4 px-2 text-gray-700 border-r border-gray-100 text-[10px] md:text-sm font-medium">{row.m20}</td>
                <td className="py-4 px-2 text-gray-700 border-r border-gray-100 text-[10px] md:text-sm font-medium">{row.m10}</td>
                <td className="py-4 px-2 text-gray-700 border-r border-gray-100 text-[10px] md:text-sm font-medium">{row.zero}</td>
                <td className="py-4 px-2 text-gray-700 text-[10px] md:text-sm font-bold">{row.plus20}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* মোবাইল ইউজারদের জন্য স্ক্রল ইন্ডিকেটর */}
      <div className="flex justify-center items-center gap-2 mt-4 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full data</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}