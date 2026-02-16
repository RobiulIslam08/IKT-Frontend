/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableEn890ql() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Composition Data
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'B', 'Cr', 'Cu', 'Mo', 'N', 'Nb', 'Ni', 'Ti', 'V', 'Zr'],
    values: ['0.20', '0.80', '1.70', '0.020', '0.010', '0.005', '1.50', '0.50', '0.70', '0.015', '0.06', '2.0', '0.05', '0.12', '0.15']
  };

  // Section 2: Mechanical Properties Data
  const mechanicalData = [
    { thickness: '3mm to 50mm', yield: '890', tensile: '940 – 1000', elongation: '11', impact: '30 @ -40° C' },
    { thickness: '50mm to 100mm', yield: '830', tensile: '880 – 1100', elongation: '11', impact: '30 @ -40° C' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Properties (Chemical Composition) Section */}
      <section>
        <div className="text-center mb-6">
          <motion.h1 className="text-3xl md:text-5xl font-bold  mb-4" variants={itemVariants}>
            Properties
          </motion.h1>
          <motion.div variants={itemVariants} className="space-y-1">
            <p className="text-gray-700 text-[10px] md:text-base font-semibold uppercase tracking-wider">
              Chemical Composition – EN10025 S890QL
            </p>
            <p className="text-gray-500 text-[9px] md:text-sm italic">
              Content % (ladle analysis), maximum
            </p>
          </motion.div>
        </div>

        <div className="relative border border-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-center border-collapse">
              <thead>
                <tr style={{ backgroundColor: brandColor }}>
                  {chemicalData.headers.map((h, i) => (
                    <th key={i} className="py-3 px-1 md:py-5 text-white font-bold text-[10px] md:text-sm border-r border-white/20 last:border-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium">
                <tr className="bg-white">
                  {chemicalData.values.map((v, i) => (
                    <td key={i} className="py-4 px-1 border-r border-gray-100 last:border-0 text-[10px] md:text-sm">
                      {v}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mechanical Properties Section */}
      <section>
        <div className="text-center mb-8">
          <motion.h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight" variants={itemVariants}>
            Mechanical properties – EN10025 S890QL.
          </motion.h2>
        </div>

        <div className="relative border border-gray-100 rounded-lg shadow-sm overflow-hidden max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-center border-collapse">
              <thead>
                <tr style={{ backgroundColor: brandColor }}>
                  <th className="py-4 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base whitespace-nowrap">Plate thickness mm</th>
                  <th className="py-4 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base whitespace-nowrap">Yield strength Reh (MPa)</th>
                  <th className="py-4 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base whitespace-nowrap">Tensile strength Rm (MPa)</th>
                  <th className="py-4 px-2 text-white font-bold border-r border-white/20 text-[11px] md:text-base whitespace-nowrap">Elongation A5 % minimum</th>
                  <th className="py-4 px-2 text-white font-bold text-[11px] md:text-base whitespace-nowrap">Impact strength J, minimum</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium italic">
                {mechanicalData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-2 border-r border-gray-100 text-[10px] md:text-sm">{row.thickness}</td>
                    <td className="py-5 px-2 border-r border-gray-100 text-[10px] md:text-sm">{row.yield}</td>
                    <td className="py-5 px-2 border-r border-gray-100 text-[10px] md:text-sm">{row.tensile}</td>
                    <td className="py-5 px-2 border-r border-gray-100 text-[10px] md:text-sm">{row.elongation}</td>
                    <td className="py-5 px-2 text-[10px] md:text-sm">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* মোবাইল ইন্ডিকেটর */}
      <div className="flex justify-center items-center gap-2 mt-6 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full specification</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}