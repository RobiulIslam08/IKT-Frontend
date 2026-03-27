/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IKTOxyFuelCapabilities() {
  const brandColor = '#06afcf';

  // Simplified point-wise data for Oxy-fuel services
  const oxyFuelCapabilities = [
    { dimension: 'Thickness', capability: 'Up to 300mm' },
    { dimension: 'Width', capability: 'Up to 6.5 metres' },
    { dimension: 'Length', capability: 'Up to 18 metres' }
  ];

  return (
    <motion.div
      className="w-full px-2 py-8 md:px-8 bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">
          Capabilities of <span style={{ color: brandColor }}>IKT’s</span> Oxy-fuel Cutting Services
        </h2>
      </div>

      <div className="overflow-hidden border border-gray-100 rounded-xl shadow-md max-w-7xl mx-auto">
        <table className="w-full text-center text-[10px] md:text-sm">
          <thead style={{ backgroundColor: brandColor }}>
            <tr className="text-white uppercase font-bold tracking-widest">
              <th className="py-4 border-r border-white/20">Dimension</th>
              <th className="py-4">Capability</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium">
            {oxyFuelCapabilities.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-5 border-r border-gray-100 bg-gray-50/30 font-bold">{item.dimension}</td>
                <td className="py-5  text-gray-600">{item.capability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}