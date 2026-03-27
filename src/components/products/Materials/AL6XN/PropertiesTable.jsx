/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a]">Properties Table</h2>
            <div className="w-1 h-6 bg-primary rounded-full"></div>
          </div>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8 text-center text-gray-500 font-medium">
            Detailed properties data available upon request. Please contact IKT for full technical specifications and material certifications.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
