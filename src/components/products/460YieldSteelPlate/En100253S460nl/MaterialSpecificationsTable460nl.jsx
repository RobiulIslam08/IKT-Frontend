/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTable460nl() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Requirements Data
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'Al total', 'N', 'Cr', 'Cu', 'Mo', 'Nb', 'Ni', 'Ti', 'V', 'Nb+Ti+V', 'Mo+Cr'],
    values: ['0.20', '0.60', '1.10 - 1.70', '0.025', '0.010', '0.020 min', '0.025', '0.30', '0.55', '0.10', '0.05', '0.80', '0.03', '0.20', '0.22', '0.30']
  };

  // Section 2: Tensile Requirements Data
  const tensileData = [
    { thickness: 'up to 16mm', yield: '460', tensile: '540 - 720', elong: '17' },
    { thickness: '16mm to 40mm', yield: '445', tensile: '540 - 720', elong: '17' },
    { thickness: 'over 40mm to 63mm', yield: '430', tensile: '540 - 720', elong: '17' },
    { thickness: 'over 63mm to 80mm', yield: '410', tensile: '540 - 720', elong: '17' },
    { thickness: 'over 80mm to 100mm', yield: '400', tensile: '540 - 720', elong: '17' },
    { thickness: 'over 100mm to 150mm', yield: '380', tensile: '510 - 710', elong: '17' },
    { thickness: 'over 150mm to 200mm', yield: '370', tensile: '510 - 710', elong: '17' }
  ];

  // Section 3 & 4: Impact Energy Values (Longitudinal & Transverse)
  const impactLongitudinal = ['27 J min', '31 J min', '40 J min', '47 J min', '51 J min', '55 J min', '63 J min'];
  const impactTransverse = ['16 J min', '20 J min', '22 J min', '27 J min', '32 J min', '36 J min', '42 J min'];
  const impactTemps = ['-60°C', '-50°C', '-40°C', '-30°C', '-20°C', '0°C', '+20°C'];

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
      {/* 1. Properties - Chemical Requirements */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Properties</h2>
          <p className="text-[10px] md:text-sm text-gray-500 font-bold mt-2 uppercase">Chemical Requirements</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[1100px] text-center text-[10px] md:text-[11px]">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 font-bold">
              <tr>
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 last:border-0">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Tensile Requirements */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">Tensile Requirements</h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-4 border-r border-white/20">Yield strength (MPA) min</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile strength (MPA)</th>
                <th className="py-3 px-4 last:border-0">Elongation min</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-4 border-r border-gray-100 ">{row.thickness}</td>
                  <td className="py-4 px-4 border-r border-gray-100 ">{row.yield}</td>
                  <td className="py-4 px-4 border-r border-gray-100 ">{row.tensile}</td>
                  <td className="py-4 px-4 last:border-0">{row.elong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 & 4. Impact Energy Values (Longitudinal & Transverse Combined) */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800">Impact energy values for the normalised condition</h2>
          <p className="text-[14px] text-gray-600 ">Longitudinal & Transverse</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[800px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white font-bold">
                <th className="py-3 px-2 border-r border-white/20">Test Temp (°C)</th>
                {impactTemps.map((temp, i) => (
                  <th key={i} className="py-3 px-2 border-r border-white/20 last:border-0">{temp}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-50 bg-gray-50/50">
                <td className="py-4 font-medium border-r border-gray-100  uppercase tracking-tighter">Longitudinal</td>
                {impactLongitudinal.map((val, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 last:border-0 font-medium">{val}</td>
                ))}
              </tr>
              <tr>
                <td className="py-4 font-medium border-r border-gray-100  uppercase tracking-tighter">Transverse</td>
                {impactTransverse.map((val, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 last:border-0 font-medium">{val}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase">Swipe to view full table data</span>
        <ChevronRight size={14} />
      </div>

    </motion.div>
  );
}