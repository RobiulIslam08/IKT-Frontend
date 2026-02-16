/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableHighYield() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Properties Data
  const chemicalData = {
    grade: 'S700MC',
    values: [
      { label: 'C max', val: '0.10' },
      { label: 'Si max', val: '0.20' },
      { label: 'Mn max', val: '2.10' },
      { label: 'P max', val: '0.02' },
      { label: 'S Max', val: '0.01' },
      { label: 'Al max', val: '0.015' }
    ]
  };

  // Section 2: Mechanical Properties Data
  const mechanicalData = {
    grade: 'S700MC',
    yield: '700',
    tensile: '750 - 930',
    elongation: '15',
    impactTemp: '-20',
    impactEnergy: '40',
    cevAverage: '0.37%',
    cevMaximum: '0.41%'
  };

  // Section 3: Size Range Data
  const sizeRange = {
    thicknesses: '3, 5, 5, 6, 8, 10, 12mm',
    widths: '1250mm & 1500mm',
    lengths: 'Up to 14m'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Chemical Properties */}
      <section>
        <motion.h2 variants={itemVariants} className="text-center text-xl md:text-2xl font-bold mb-6 text-gray-800">Chemical properties</motion.h2>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 border-r border-white/20">Steel grade</th>
                {chemicalData.values.map((item, i) => (
                  <th key={i} className="py-3 border-r border-white/20 last:border-0">{item.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold border-r border-gray-50">{chemicalData.grade}</td>
                {chemicalData.values.map((item, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 last:border-0">{item.val}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Mechanical Properties */}
      <section>
        <motion.h2 variants={itemVariants} className="text-center text-xl md:text-2xl font-bold mb-6 text-gray-800">Mechanical properties</motion.h2>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th rowSpan="2" className="py-3 border-r border-white/20">Steel grade</th>
                <th rowSpan="2" className="py-3 border-r border-white/20">Yield (min) MPA</th>
                <th rowSpan="2" className="py-3 border-r border-white/20">Tensile MPA</th>
                <th rowSpan="2" className="py-3 border-r border-white/20">Elongation (min) A5%</th>
                <th colSpan="2" className="py-2 border-r border-white/20 border-b">Impact strength (min) Longitudinal</th>
                <th colSpan="2" className="py-2">CEV %</th>
              </tr>
              <tr className="text-white">
                <th className="py-2 border-r border-white/20 bg-black/10">t degree C</th>
                <th className="py-2 border-r border-white/20 bg-black/10">Charpy V (J)</th>
                <th className="py-2 border-r border-white/20 bg-black/10">CEV average</th>
                <th className="py-2 bg-black/10">CEV maximum</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-50">
                <td className="py-4 font-bold border-r border-gray-50">{mechanicalData.grade}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.yield}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.tensile}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.elongation}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.impactTemp}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.impactEnergy}</td>
                <td className="py-4 border-r border-gray-50">{mechanicalData.cevAverage}</td>
                <td className="py-4">{mechanicalData.cevMaximum}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Size Range */}
      <section>
        <motion.h2 variants={itemVariants} className="text-center text-xl md:text-2xl font-bold mb-6 text-gray-800">Size range</motion.h2>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase tracking-wider">
                <th className="py-4 border-r border-white/20">Thicknesses</th>
                <th className="py-4 border-r border-white/20">Widths</th>
                <th className="py-4 last:border-0">Lengths</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr>
                <td className="py-6 border-r border-gray-50">{sizeRange.thicknesses}</td>
                <td className="py-6 border-r border-gray-50">{sizeRange.widths}</td>
                <td className="py-6">{sizeRange.lengths}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Hint */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full S700MC data</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}