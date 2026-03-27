/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const chemicalData = [
    { grade: 'C45U (1.1730)', c: '0.42-0.50', si: '0.15-0.40', mn: '0.60-0.80', p: '0.030 Max', s: '0.030 Max' }
  ];

  const executionData = [
    { feature: 'Thickness & Width Finish', spec: 'Ground / Fine Milled Execution' },
    { feature: 'Surface Roughness', spec: 'Maximum 3.2 µm' },
    { feature: 'End Preparation', spec: 'Both bar ends saw cut' },
    { feature: 'Packaging & Protection', spec: 'Rust protected, securely wrapped in VCI-paper' },
    { feature: 'Standard Lengths', spec: 'Sold in 500 mm or 1000 mm lengths' }
  ];

  const toleranceData = [
    { dimension: 'Thickness', tolerance: '-0.00 / +0.20 mm' },
    { dimension: 'Width', tolerance: '-0.00 / +0.40 mm' },
    { dimension: 'Square', tolerance: '+0.40 / +0.40 mm' },
    { dimension: 'Length', tolerance: '+5.00 / +30.00 mm' }
  ];

  // Summarized list of available thicknesses to prevent a massive sparse matrix rendering
  const availableThicknesses = [
    "4", "5", "6", "8", "10", "12", "15", "16", "20", "22", "25", "27", "30", "32", "36", "40", "46", "50", "56", "60", "63", "70", "76", "80", "90", "100", "120", "150"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT Pre-machined C45U Economizer data</p>
        </motion.div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Grade</th>
                  <th className="px-6 py-4 font-bold text-center border-r border-gray-100">C%</th>
                  <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Si%</th>
                  <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Mn%</th>
                  <th className="px-6 py-4 font-bold text-center border-r border-gray-100">P%</th>
                  <th className="px-6 py-4 font-bold text-center">S%</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{chemicalData[0].grade}</td>
                  <td className="px-6 py-4 text-center border-r border-gray-100">{chemicalData[0].c}</td>
                  <td className="px-6 py-4 text-center border-r border-gray-100">{chemicalData[0].si}</td>
                  <td className="px-6 py-4 text-center border-r border-gray-100">{chemicalData[0].mn}</td>
                  <td className="px-6 py-4 text-center border-r border-gray-100">{chemicalData[0].p}</td>
                  <td className="px-6 py-4 text-center">{chemicalData[0].s}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tolerances and Execution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Tolerances Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">Machining Tolerances</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Dimension</th>
                    <th className="px-6 py-4 font-bold text-left">Tolerance Range</th>
                  </tr>
                </thead>
                <tbody>
                  {toleranceData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.dimension}</td>
                      <td className="px-6 py-4 text-left">{row.tolerance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Execution Specs Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">Execution & Delivery Profile</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {executionData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3">{row.feature}</td>
                      <td className="px-6 py-4 text-left">{row.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Stock List Representation */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <div className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Economizer Stock Availability
            </h3>
            <p className="text-gray-700 font-medium">C45U pre-machined steel is stocked in a vast array of Widths (ranging from 10mm up to 505mm) across the following standard Thickness profiles.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">Available Thicknesses (mm)</h4>
            <div className="flex flex-wrap gap-3">
              {availableThicknesses.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-300 text-gray-800 font-bold rounded-md shadow-sm cursor-default hover:bg-primary/5 transition-colors">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium mt-4 ">* For exact width availability corresponding to a specific thickness, please contact our sales team.</p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery:</span>
            As premium tool steel suppliers, we deliver our C45U stock directly throughout the KSA. Call our technical team on <span className="font-bold">+966-13-3444036

            </span> to place your order for rapid dispatch.
          </p>

        </motion.div>

      </motion.div>
    </section>
  );
}