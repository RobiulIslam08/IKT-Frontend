/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const brandColor = '#06afcf';

  // ইমেজ (image_e91237.png) থেকে প্রাপ্ত ডাটা
  const class1Plates = [
    { grade: '2, 12', tensile: '380 - 550', yield: '230 min', elong: '22% min', reduction: '-' },
    { grade: '11', tensile: '415 - 585', yield: '240 min', elong: '22% min', reduction: '-' },
    { grade: '22, 21, 5, 9', tensile: '415 - 585', yield: '205 min', elong: '18% min', reduction: '40% min' },
    { grade: '21L, 22L', tensile: '415 - 585', yield: '205 min', elong: '18% min', reduction: '40% min' },
  ];

  const class2Plates = [
    { grade: '2', tensile: '485 - 620', yield: '310 min', elong: '22% min', reduction: '-' },
    { grade: '11', tensile: '515 - 690', yield: '310 min', elong: '22% min', reduction: '-' },
    { grade: '12', tensile: '450 - 585', yield: '275 min', elong: '22% min', reduction: '-' },
    { grade: '22, 21, 5, 9', tensile: '515 - 690', yield: '310 min', elong: '18% min', reduction: '40% min' },
    { grade: '91', tensile: '585 - 760', yield: '415 min', elong: '18% min', reduction: '-' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const tableHeaderStyle = { backgroundColor: brandColor };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">Properties</h1>
      </div>

      {/* Class 1 Plates Table */}
      <section className="space-y-4">
        <h2 className="text-center py-2 bg-gray-100 text-gray-700 font-bold text-xs md:text-base border-y border-gray-200 uppercase tracking-widest">
          Class 1 Plates
        </h2>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={tableHeaderStyle}>
              <tr className="text-white uppercase font-bold">
                <th className="py-3 px-2 border-r border-white/20">Grade</th>
                <th className="py-3 px-2 border-r border-white/20">Tensile (MPa)</th>
                <th className="py-3 px-2 border-r border-white/20">Yield (MPa)</th>
                <th className="py-3 px-2 border-r border-white/20">Elong. (50mm)</th>
                <th className="py-3 px-2 last:border-0">Reduc'n of Area</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {class1Plates.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 border-r border-gray-100 italic bg-gray-50/30">{row.grade}</td>
                  <td className="py-4 border-r border-gray-100">{row.tensile}</td>
                  <td className="py-4 border-r border-gray-100">{row.yield}</td>
                  <td className="py-4 border-r border-gray-100">{row.elong}</td>
                  <td className="py-4">{row.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Class 2 Plates Table */}
      <section className="space-y-4">
        <h2 className="text-center py-2 bg-gray-100 text-gray-700 font-bold text-xs md:text-base border-y border-gray-200 uppercase tracking-widest">
          Class 2 Plates
        </h2>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={tableHeaderStyle}>
              <tr className="text-white uppercase font-bold">
                <th className="py-3 px-2 border-r border-white/20">Grade</th>
                <th className="py-3 px-2 border-r border-white/20">Tensile (MPa)</th>
                <th className="py-3 px-2 border-r border-white/20">Yield (MPa)</th>
                <th className="py-3 px-2 border-r border-white/20">Elong. (50mm)</th>
                <th className="py-3 px-2 last:border-0">Reduc'n of area</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {class2Plates.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 border-r border-gray-100 italic bg-gray-50/30">{row.grade}</td>
                  <td className="py-4 border-r border-gray-100">{row.tensile}</td>
                  <td className="py-4 border-r border-gray-100">{row.yield}</td>
                  <td className="py-4 border-r border-gray-100">{row.elong}</td>
                  <td className="py-4">{row.reduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Hint */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full data</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}