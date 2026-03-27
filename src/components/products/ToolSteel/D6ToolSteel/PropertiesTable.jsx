/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const executionData = [
    { feature: 'Machining Allowance', spec: 'Pre-machined with standard oversized allowances' },
    { feature: 'Surface Finish', spec: 'Ground / Fine Milled Execution' },
    { feature: 'Surface Roughness', spec: 'Maximum 3.2 µm' },
    { feature: 'End Preparation', spec: 'Both bar ends precision saw cut' },
    { feature: 'Packaging & Protection', spec: 'Rust protected, securely wrapped in VCI-paper' },
    { feature: 'Available Lengths', spec: 'Sold in 500 mm or 1000 mm standard lengths' }
  ];

  const toleranceData = [
    { dimension: 'Thickness', tolerance: '-0.00 / +0.20 mm' },
    { dimension: 'Width', tolerance: '-0.00 / +0.40 mm' },
    { dimension: 'Square', tolerance: '+0.40 / +0.40 mm' },
    { dimension: 'Length', tolerance: '+5.00 / +30.00 mm' }
  ];

  // Specific Pre-machined Thicknesses & Widths for D6 Economizer
  const availableThicknesses = [
    "5.2", "6.2", "8.2", "8.4", "10.4", "12.4", "15.4", "16.4", "20.4", "25.4", "30.4", "32.4", "40.4", "50.4"
  ];

  const availableWidths = [
    "12.4", "16.4", "20.4", "25.4", "30.4", "32.4", "40.4", "50.4", "60.4", "63.4", "80.4", "100.4", "125.4", "150.4", "160.4", "175.4", "200.4", "250.4", "300.4"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tolerances & Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT Pre-machined D6 Economizer delivery data</p>
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
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> D6 Economizer Dimension Matrix
            </h3>
            <p className="text-gray-700 font-medium">All dimensions feature a precise +0.4mm allowance to ensure you have exactly the required material for your final machining phase.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
             {/* Thicknesses */}
             <div>
               <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">Available Thicknesses (mm)</h4>
               <div className="flex flex-wrap gap-2">
                  {availableThicknesses.map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 font-bold rounded-md shadow-sm cursor-default hover:bg-primary/5 transition-colors">
                      {item}
                    </span>
                  ))}
               </div>
             </div>

             {/* Widths */}
             <div>
               <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide">Available Widths (mm)</h4>
               <div className="flex flex-wrap gap-2">
                  {availableWidths.map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-300 text-gray-800 font-bold rounded-md shadow-sm cursor-default hover:bg-primary/5 transition-colors">
                      {item}
                    </span>
                  ))}
               </div>
             </div>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mt-6 ">* Please consult IKT Sales for the exact intersection availability of specific thicknesses and widths.</p>
        </motion.div>

        {/* Footer Note with KSA modifications */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery in KSA:</span> 
            As leading tool steel suppliers in Saudi Arabia, we deliver stock cut-to-size as required. Call our technical team now at <span className="font-bold">+966-13-3444036</span> to place your order for rapid dispatch.
          </p>
      
        </motion.div>

      </motion.div>
    </section>
  );
}