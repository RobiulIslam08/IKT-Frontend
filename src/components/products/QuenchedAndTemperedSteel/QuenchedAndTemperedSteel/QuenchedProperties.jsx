/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function QuenchedProperties() {
  const brandColor = '#06afcf';

 
  // Section 3: Size Range Data (image_d00166.png)
  const sizeRange = {
    thickness: '3mm to 250mm',
    widths: '2000mm, 2500mm, 3000mm',
    lengths: 'Up to 12000mm'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
   

      {/* 3. Size Range */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">Size Range</h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-xl shadow-md max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase font-bold tracking-widest">
                <th className="py-4 border-r border-white/20">Thicknesses</th>
                <th className="py-4 border-r border-white/20">Widths</th>
                <th className="py-4">Lengths</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr className="bg-gray-50/20">
                <td className="py-6 border-r border-gray-50 italic">{sizeRange.thickness}</td>
                <td className="py-6 border-r border-gray-50">{sizeRange.widths}</td>
                <td className="py-6">{sizeRange.lengths}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full UNS S31254 specifications</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}