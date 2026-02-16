/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      grade: '316',
      c: '0.04',
      cr: '17.2',
      ni: '10.1',
      mo: '2.1',
      pren: '–',
      proofStress: '260',
      tensile: '520 – 555',
      elongation: '40'
    },
    {
      grade: '316L',
      c: '0.02',
      cr: '17.2',
      ni: '10.1',
      mo: '2.1',
      pren: '–',
      proofStress: '260',
      tensile: '520 – 555',
      elongation: '40'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="w-full px-4 py-12 md:px-6 md:py-16 lg:px-8 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        variants={itemVariants}
      >
        Properties
      </motion.h1>

      <div className="relative w-full overflow-x-auto">
        <motion.div
          className="min-w-full"
          variants={itemVariants}
        >
          <table className="w-full border-collapse bg-white">
            {/* Header */}
            <thead>
              <tr className="border-b" style={{ borderColor: '#e5e7eb' }}>
                {/* Main Headers */}
                <th
                  colSpan="1"
                  className="px-3 sm:px-4 md:px-6 py-4 text-left text-sm sm:text-base font-bold"
                  style={{ backgroundColor: '#06afcf', color: 'white' }}
                >
                  Grade
                </th>
                <th
                  colSpan="4"
                  className="px-3 sm:px-4 md:px-6 py-4 text-center text-sm sm:text-base font-bold"
                  style={{ backgroundColor: '#06afcf', color: 'white', borderLeft: '1px solid rgba(255,255,255,0.2)' }}
                >
                  Chemical Analysis (%)
                </th>
                <th
                  colSpan="1"
                  className="px-3 sm:px-4 md:px-6 py-4 text-center text-sm sm:text-base font-bold"
                  style={{ backgroundColor: '#06afcf', color: 'white', borderLeft: '1px solid rgba(255,255,255,0.2)' }}
                >
                  PREN
                </th>
                <th
                  colSpan="3"
                  className="px-3 sm:px-4 md:px-6 py-4 text-center text-sm sm:text-base font-bold"
                  style={{ backgroundColor: '#06afcf', color: 'white', borderLeft: '1px solid rgba(255,255,255,0.2)' }}
                >
                  Mechanical Properties
                </th>
              </tr>

              {/* Sub Headers */}
              <tr className="border-b" style={{ borderColor: '#e5e7eb' }}>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-700"></th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  C
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Cr
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Ni
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Mo
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}></th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Proof Stress
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Tensile
                </th>
                <th className="px-3 sm:px-4 md:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                  Elongation
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, index) => (
                <motion.tr
                  key={index}
                  className="border-b"
                  style={{ borderColor: '#e5e7eb' }}
                  variants={itemVariants}
                >
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base font-semibold text-gray-800">
                    {row.grade}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.c}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.cr}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.ni}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.mo}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.pren}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.proofStress}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.tensile}
                  </td>
                  <td className="px-3 sm:px-4 md:px-6 py-4 text-sm sm:text-base text-center text-gray-700" style={{ borderLeft: '1px solid #e5e7eb' }}>
                    {row.elongation}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
}
