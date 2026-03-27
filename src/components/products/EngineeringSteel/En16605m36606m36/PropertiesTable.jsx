/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN16 (605M36)', c: '0.30-0.40', si: '0.10-0.35', mn: '1.30-1.80', mo: '0.20-0.35', p: '0.05 Max', s: '0.05 Max' }
  ];

  const equivalentsData = [
    { bs1991: '605M36', bs1955: 'EN16', aisi: '-', werkstoff: '1.7218 / 1.7220' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Data</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material specifications for IKT EN16 Steel (605M36)</p>
        </motion.div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Typical Chemical Composition (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-bold">Grade</th>
                  <th className="px-4 py-3 font-bold text-center">C%</th>
                  <th className="px-4 py-3 font-bold text-center">Si%</th>
                  <th className="px-4 py-3 font-bold text-center">Mn%</th>
                  <th className="px-4 py-3 font-bold text-center">Mo%</th>
                  <th className="px-4 py-3 font-bold text-center">P%</th>
                  <th className="px-4 py-3 font-bold text-center">S%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{chemicalData[0].grade}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].c}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].si}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].mn}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].mo}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].p}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Equivalents Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-bold">BS 970:1991</th>
                  <th className="px-4 py-3 font-bold text-center">BS 970:1955</th>
                  <th className="px-4 py-3 font-bold text-center">AISI/SAE</th>
                  <th className="px-4 py-3 font-bold text-center">Werkstoff</th>
                </tr>
              </thead>
              <tbody>
                {equivalentsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-left font-bold">{row.bs1991}</td>
                    <td className="px-4 py-4 text-center">{row.bs1955}</td>
                    <td className="px-4 py-4 text-center">{row.aisi}</td>
                    <td className="px-4 py-4 text-center">{row.werkstoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Availability Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-primary"></span> IKT Supply Capabilities
              </h3>
              <p className="text-gray-600 font-medium max-w-2xl">
                We specialize in supplying high-tensile <strong>EN16T Round Bars</strong>. All popular size ranges are kept in stock to meet immediate industrial demands.
              </p>
            </div>
            <div className="shrink-0 bg-primary/10 border border-primary/20 p-4 rounded-lg text-center">
              <p className="text-sm font-bold text-gray-900 uppercase">Service Offered</p>
              <p className="text-lg font-bold text-primary">Cut to Order</p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Contact IKT:</span> For specific diameter availability, custom dimensions, and the latest pricing on EN16 or EN16T round bars, please get in touch with our sales division.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}