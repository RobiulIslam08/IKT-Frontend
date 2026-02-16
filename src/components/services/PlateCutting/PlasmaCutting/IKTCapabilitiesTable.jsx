/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IKTCapabilitiesTable() {
  const brandColor = '#06afcf';

  // Point-wise simplified data
  const capabilities = [
    { dimension: 'Thickness', capability: 'Up to 45mm' },
    { dimension: 'Width', capability: 'Up to 4 metres' },
    { dimension: 'Length', capability: 'Up to 24 metres' }
  ];

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">
          Capabilities of <span style={{ color: brandColor }}>IKT’s</span> Plasma Cutting Services
        </h2>
      </div>

      <div className="overflow-hidden border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
        <table className="w-full text-center text-[10px] md:text-sm">
          <thead style={{ backgroundColor: brandColor }}>
            <tr className="text-white uppercase font-bold">
              <th className="py-3 border-r border-white/20">Dimension</th>
              <th className="py-3">Capability</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 font-medium">
            {capabilities.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 border-r border-gray-100 bg-gray-50/30">{item.dimension}</td>
                <td className="py-4 italic">{item.capability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}