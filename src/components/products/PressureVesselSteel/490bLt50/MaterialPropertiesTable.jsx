/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialPropertiesTable() {
  const brandColor = '#06afcf';

  const impactValues = [
    { temp: 'Room temp', value: '61J min' },
    { temp: '0°C', value: '55J min' },
    { temp: '-20°C', value: '45J min' },
    { temp: '-30°C', value: '41J min' },
    { temp: '-40°C', value: '31J min' },
    { temp: '-50°C', value: '27J min' },
  ];

  const tensileRequirements = [
    { thickness: 'over 3mm to 16mm', tensile: '490-610N/mm2', yield: '325N/mm2 min', elong: '21% min' },
    { thickness: 'over 16mm to 40mm', tensile: '490-610N/mm2', yield: '315N/mm2 min', elong: '21% min' },
    { thickness: 'over 40mm to 63mm', tensile: '490-610N/mm2', yield: '305N/mm2 min', elong: '20% min' },
    { thickness: 'over 63mm to 100mm', tensile: '490-610N/mm2', yield: '*', elong: '19% min' },
    { thickness: 'over 100mm to 150mm', tensile: '490-610N/mm2', yield: '*', elong: '19% min' },
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
      className="w-full px-2 py-8 md:px-8 bg-white space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Impact Values Section */}
      <section>
        <div className="text-center mb-6">
          <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4" variants={itemVariants}>Properties</motion.h1>
          <p className="text-[10px] md:text-sm text-gray-500 ">Minimum impact values for BS 1501 224 490B LT50</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {impactValues.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center border border-gray-100 rounded p-2 min-w-[70px] md:min-w-[100px] shadow-sm">
              <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">{item.temp}</span>
              <span className="text-[11px] md:text-sm font-semibold text-primary">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Tensile Requirements Table */}
      <section>
        <p className="text-center text-[10px] md:text-sm text-gray-500  mb-6">Please see below table detailing tensile requirements for BS 1501 224 490B LT50</p>
        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                <th className="py-3 px-2 md:py-5 text-white font-bold text-[11px] md:text-base border-r border-white/20">Plate thickness</th>
                <th className="py-3 px-2 md:py-5 text-white font-bold text-[11px] md:text-base border-r border-white/20">Tensile RM</th>
                <th className="py-3 px-2 md:py-5 text-white font-bold text-[11px] md:text-base border-r border-white/20">Yield RE</th>
                <th className="py-3 px-2 md:py-5 text-white font-bold text-[11px] md:text-base last:border-0">Elong.A</th>
              </tr>
            </thead>
            <tbody>
              {tensileRequirements.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 md:py-4  text-gray-700 font-medium border-r border-gray-100 text-[10px] md:text-sm">{row.thickness}</td>
                  <td className="py-3 px-2 md:py-4 font-medium text-gray-700 border-r border-gray-100 text-[10px] md:text-sm">{row.tensile}</td>
                  <td className="py-3 px-2 md:py-4 font-medium text-gray-700 border-r border-gray-100 text-[10px] md:text-sm">{row.yield}</td>
                  <td className="py-3 px-2 md:py-4 font-medium text-gray-700 text-[10px] md:text-sm">{row.elong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Indicator */}
      <div className="flex justify-center gap-2 text-gray-400 md:hidden animate-pulse text-[10px]">
        <ChevronLeft size={14} /> Swipe to view detailed requirements <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}