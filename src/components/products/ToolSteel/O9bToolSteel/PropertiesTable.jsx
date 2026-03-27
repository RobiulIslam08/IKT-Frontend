/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { grade: '09B Tool Steel', din: 'DIN 1.2510', type: 'Oil Hardening Carbon Manganese Tool Steel' }
  ];

  const formsData = [
    { profile: 'Flats', process: 'Cut directly from plate to bespoke dimensions', finish: 'Pre-machined Economizer or Black' },
    { profile: 'Squares', process: 'Cut directly from plate to bespoke dimensions', finish: 'Pre-machined Economizer or Black' },
    { profile: 'Rounds', process: 'Standard and bespoke cut-to-length available', finish: 'Standard Mill Finish' }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Specifications & Stock Profile</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT 09B Tool Steel supply details and equivalent grades</p>
        </motion.div>

        {/* Equivalents Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Grade Equivalents</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">IKT Grade</th>
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Equivalent Standard</th>
                  <th className="px-6 py-4 text-left font-bold">Material Classification</th>
                </tr>
              </thead>
              <tbody>
                {equivalentsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                    <td className="px-6 py-4 text-left border-r border-gray-100">{row.din}</td>
                    <td className="px-6 py-4 text-left">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Available Supply Forms Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Supply Profiles & Finishes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Steel Profile</th>
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Manufacturing / Cutting Process</th>
                  <th className="px-6 py-4 text-left font-bold">Available Finishes</th>
                </tr>
              </thead>
              <tbody>
                {formsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.profile}</td>
                    <td className="px-6 py-4 text-left border-r border-gray-100">{row.process}</td>
                    <td className="px-6 py-4 text-left">{row.finish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer Note / Delivery */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery:</span> 
            As premium tool steel suppliers, we deliver stock cut to your exact required sizes. Data sheets and typical analysis for 09B are available upon request. Call now to place your order for rapid dispatch.
          </p>
       
        </motion.div>

      </motion.div>
    </section>
  );
}