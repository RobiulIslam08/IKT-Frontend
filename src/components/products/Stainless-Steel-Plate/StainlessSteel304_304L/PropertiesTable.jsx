/* eslint-disable no-unused-vars */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertiesTable() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = [
    {
      grade: '304',
      c: '0.08',
      cr: '18.5',
      ni: '9',
      mo: '–',
      pren: '19',
      proofStress: '235',
      tensile: '530-730',
      elongation: '40'
    },
    {
      grade: '304L',
      c: '0.03',
      cr: '18.5',
      ni: '9',
      mo: '–',
      pren: '19',
      proofStress: '200',
      tensile: '500-700',
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
              <tr className="border-b border-gray-200">
                {/* Main Headers */}
                <th
                  colSpan="1"
                  className="px-2 md:px-4 py-4 text-left text-sm md:text-base font-semibold"
                  style={{ backgroundColor: '#06afcf', color: 'white' }}
                >
                  Grade
                </th>
                <th
                  colSpan="4"
                  className="px-2 md:px-4 py-4 text-center text-sm md:text-base font-semibold border-l border-gray-300"
                  style={{ backgroundColor: '#06afcf', color: 'white' }}
                >
                  Chemical analysis (%)
                </th>
                <th
                  colSpan="1"
                  className="px-2 md:px-4 py-4 text-center text-sm md:text-base font-semibold border-l border-gray-300"
                  style={{ backgroundColor: '#06afcf', color: 'white' }}
                >
                  PREN
                </th>
                <th
                  colSpan="3"
                  className="px-2 md:px-4 py-4 text-center text-sm md:text-base font-semibold border-l border-gray-300"
                  style={{ backgroundColor: '#06afcf', color: 'white' }}
                >
                  Mechanical properties
                </th>
              </tr>

              {/* Sub Headers */}
              <tr className="border-b border-gray-200">
                <th className="px-2 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-700 bg-gray-50"></th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  C
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Cr
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Ni
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Mo
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300"></th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Proof stress
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Tensile
                </th>
                <th className="px-2 md:px-4 py-3 text-center text-xs md:text-sm font-medium text-gray-700 bg-gray-50 border-l border-gray-300">
                  Elongation
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  variants={itemVariants}
                >
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base font-semibold text-gray-800">
                    {row.grade}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.c}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.cr}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.ni}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.mo}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.pren}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.proofStress}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
                    {row.tensile}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-sm md:text-base text-center text-gray-700 border-l border-gray-200">
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
