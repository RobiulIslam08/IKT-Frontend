/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableBS() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Composition Data
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'Cr', 'Cu', 'Mo', 'Ni'],
    values: ['0.25 max', '0.10 - 0.35', '0.60 - 1.40', '0.030 max', '0.030 max', '0.25 max', '0.30 max', '0.10 max', '0.30 max']
  };

  // Section 2: Tensile Requirements Data
  const tensileData = [
    { thickness: 'over 3mm to 16mm', tensile: '430 - 550 N/mm2', yield: '250 N/mm2 min', elongation: '23% min' },
    { thickness: 'over 16mm to 40mm', tensile: '430 - 550 N/mm2', yield: '240 N/mm2 min', elongation: '23% min' },
    { thickness: 'over 40mm to 63mm', tensile: '430 - 550 N/mm2', yield: '230 N/mm2 min', elongation: '22% min' },
    { thickness: 'over 63mm to 100mm', tensile: '430 - 550 N/mm2', yield: '220 N/mm2 min', elongation: '21% min' },
    { thickness: 'over 100mm to 150mm', tensile: '430 - 550 N/mm2', yield: '210 N/mm2 min', elongation: '21% min' }
  ];

  // Section 3: Min. Values for Proof Strength Data
  const proofStrengthData = [
    { thickness: '3mm to 16mm', t150: '222', t200: '215', t250: '192', t300: '161', t350: '153', t400: '148' },
    { thickness: 'over 16mm to 40mm', t150: '210', t200: '202', t250: '181', t300: '161', t350: '153', t400: '148' },
    { thickness: 'over 40mm to 63mm', t150: '200', t200: '192', t250: '178', t300: '161', t350: '153', t400: '148' },
    { thickness: 'over 63mm to 100mm', t150: '186', t200: '181', t250: '172', t300: '161', t350: '153', t400: '148' }
  ];

  return (
    <motion.div
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      {/* 1. Properties - Chemical Composition */}
      <section>
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Properties</h1>
          <p className="text-[10px] md:text-sm text-gray-500 ">Chemical composition (ladle analysis, %) of 161-430 steel.</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center text-[10px] md:text-sm border-collapse">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-700">
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-4 border-r border-gray-100 last:border-0 text-gray-700 font-medium">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Tensile Requirements */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Tensile requirements</h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Plate thickness</th>
                <th className="py-3 px-2 border-r border-white/20">Tensile RM</th>
                <th className="py-3 px-2 border-r border-white/20">Yield RE</th>
                <th className="py-3 px-2 last:border-0">Elong. A</th>
              </tr>
            </thead>
            <tbody>
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.thickness}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.tensile}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.yield}</td>
                  <td className="py-4 px-2 last:border-0 text-gray-700 font-medium">{row.elongation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Min. values for proof strength Rp0,2 (MPa) at elevated temperatures */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 px-4 leading-snug">
            Min. values for proof strength Rp0,2 (MPa) at elevated temperatures.
          </h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Thickness</th>
                <th className="py-3 px-2 border-r border-white/20">150°C</th>
                <th className="py-3 px-2 border-r border-white/20">200°C</th>
                <th className="py-3 px-2 border-r border-white/20">250°C</th>
                <th className="py-3 px-2 border-r border-white/20">300°C</th>
                <th className="py-3 px-2 border-r border-white/20">350°C</th>
                <th className="py-3 px-2 last:border-0">400°C</th>
              </tr>
            </thead>
            <tbody>
              {proofStrengthData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-2 border-r border-gray-100  bg-gray-50/30 whitespace-nowrap text-gray-700 font-medium">{row.thickness}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.t150}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.t200}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.t250}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.t300}</td>
                  <td className="py-4 px-2 border-r border-gray-100 text-gray-700 font-medium">{row.t350}</td>
                  <td className="py-4 px-2 last:border-0">{row.t400}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-tight">Swipe to view full data</span>
        <ChevronRight size={14} />
      </div>

    </motion.div>
  );
}