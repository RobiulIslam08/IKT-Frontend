/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UNSS32750FullSpecifications() {
  const brandColor = '#06afcf';

  const chemicalData = {
    title: "Properties",
    subtitle: "UNS S32750 Properties",
    description: "Chemical Analysis (% max or range).",
    headers: ['C', 'Mn', 'P', 'S', 'Si', 'Cr', 'Ni', 'Mo', 'N'],
    values: ['0.03', '1.20', '0.035', '0.02', '0.80', '24.0 – 26.0', '6.0 – 8.0', '3.0 – 5.0', '0.24 – 0.32']
  };

  const mechanicalData = {
    title: "Mechanical properties",
    headers: [
      { label: 'Tensile', unit: 'MPa min' },
      { label: 'Yield', unit: 'MPa min' },
      { label: 'Elongation', unit: '% min' },
      { label: 'Hardness', unit: 'Brinell max' }
    ],
    values: ['795', '550', '15.25%', '310']
  };

  const plateSizesData = [
    { thickness: '5', sizes: ['12000 x 2000', '-', '-'] },
    { thickness: '6', sizes: ['12000 x 2000', '12000 x 2500', '-'] },
    { thickness: '8', sizes: ['12000 x 2000', '12000 x 2500', '12000 x 3000'] },
    { thickness: '10', sizes: ['12000 x 2000', '12000 x 2500', '12000 x 3000'] },
    { thickness: '12', sizes: ['12000 x 2000', '12000 x 2500', '12000 x 3000'] },
    { thickness: '15', sizes: ['12000 x 2000', '12000 x 2500', '12000 x 3000'] },
    { thickness: '20', sizes: ['12000 x 2000', '-', '12000 x 3000'] },
    { thickness: '25', sizes: ['8000 x 2000', '-', '6000 x 3000'] },
    { thickness: '30', sizes: ['6000 x 2000', '-', '6000 x 3000'] },
    { thickness: '35', sizes: ['4000 x 2000', '-', '6000 x 3000'] },
    { thickness: '40', sizes: ['4000 x 2000', '-', '6000 x 3000'] },
    { thickness: '45', sizes: ['4000 x 2000', '-', '6000 x 3000'] },
    { thickness: '50', sizes: ['4000 x 2000', '-', '6000 x 3000'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="w-full px-4 py-12 md:px-8 bg-white space-y-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Chemical Analysis Table */}
      <section>
        <div className="text-center mb-10">
          <motion.h1 className="text-3xl md:text-5xl font-bold  mb-4" variants={itemVariants}>
            {chemicalData.title}
          </motion.h1>
          <motion.div variants={itemVariants} className="space-y-1">
            <p className="text-gray-700 font-semibold">{chemicalData.subtitle}</p>
            <p className="text-gray-500 text-sm ">{chemicalData.description}</p>
          </motion.div>
        </div>

        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-4 px-2 text-white font-bold border-r border-white/20 last:border-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-6 px-2 text-gray-700 border-r border-gray-100 last:border-0 font-medium">
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Mechanical Properties Table */}
      <section>
        <motion.h2 className="text-center text-2xl font-bold text-gray-800 mb-8" variants={itemVariants}>
          {mechanicalData.title}
        </motion.h2>
        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                {mechanicalData.headers.map((h, i) => (
                  <th key={i} className="py-4 px-2 text-white font-bold border-r border-white/20 last:border-0">
                    <div className="flex flex-col">
                      <span>{h.label}</span>
                      <span className="text-[10px] font-normal opacity-90 ">{h.unit}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                {mechanicalData.values.map((v, i) => (
                  <td key={i} className="py-8 px-2 text-gray-700 border-r border-gray-100 last:border-0 font-medium">
                    {v}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Plate Sizes Table */}
      <section>
        <motion.h2 className="text-center text-2xl font-bold text-gray-800 mb-8" variants={itemVariants}>
          Thickness and Plate Sizes
        </motion.h2>
        <div className="relative overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[900px] text-center border-collapse">
            <thead>
              <tr style={{ backgroundColor: brandColor }}>
                <th className="py-4 px-4 text-white font-bold border-r border-white/20">Thickness (mm)</th>
                <th className="py-4 px-4 text-white font-bold border-r border-white/20">Plate sizes (mm)</th>
                <th className="py-4 px-4 text-white font-bold border-r border-white/20">Plate sizes (mm)</th>
                <th className="py-4 px-4 text-white font-bold last:border-0">Plate sizes (mm)</th>
              </tr>
            </thead>
            <tbody>
              {plateSizesData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-bold text-gray-800 bg-gray-50/50 border-r border-gray-100">{row.thickness}</td>
                  {row.sizes.map((size, sIdx) => (
                    <td key={sIdx} className="py-4 px-4 text-gray-700 border-r border-gray-100 last:border-0">
                      {size}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scroll Indicator for Mobile */}
      <div className="flex justify-center gap-4 text-gray-400 md:hidden animate-pulse text-xs">
        <ChevronLeft size={16} /> Scroll to view full specifications <ChevronRight size={16} />
      </div>
    </motion.div>
  );
}