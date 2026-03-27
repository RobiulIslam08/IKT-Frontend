/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  // Chemical Composition matching DC53 and D2 Supreme identically
  const chemicalData = [
    { grade: 'DC53® Steel', c: '0.95', si: '1.00', cr: '8.00', mo: '2.00', mn: '0.40', v: '0.30' },
    { grade: 'D2 Supreme™', c: '0.95', si: '1.00', cr: '8.00', mo: '2.00', mn: '0.40', v: '0.30' }
  ];

  // Hardness comparison
  const hardnessData = [
    { material: 'Standard D2 Steel', hrc: '55 - 62 HRC' },
    { material: 'D2 Supreme™ (DC53 Eq.)', hrc: '62 - 63 HRC' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Comparative data for IKT D2 Supreme™ and DC53®.</p>
        </motion.div>

        {/* Chemical Composition Comparison Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Chemical Composition Equivalence (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Grade Specification</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                  <th className="px-4 py-4 text-center font-bold">V%</th>
                </tr>
              </thead>
              <tbody>
                {chemicalData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.c}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.si}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.cr}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mo}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mn}</td>
                    <td className="px-4 py-4 text-center">{row.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Hardness Comparison Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md max-w-4xl">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Post Heat-Treatment Hardness Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material Selection</th>
                  <th className="px-6 py-4 text-center font-bold">Achievable Hardness (HRC)</th>
                </tr>
              </thead>
              <tbody>
                {hardnessData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.material}</td>
                    <td className="px-6 py-4 text-center font-bold">{row.hrc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Supply Profiling Box */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
           <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Custom Block Cutting Profile
           </h3>
           <p className="text-base font-medium text-gray-700 leading-relaxed">
             IKT supplies D2 Supreme™ strictly through custom cutting. Our advanced facility cuts flats and squares directly from massive structural blocks. This bespoke approach guarantees that we can supply precise dimensions tailored exactly to your die and mold manufacturing requirements, drastically reducing your setup and milling time.
           </p>
        </motion.div>

        {/* Footer Note & Contact with updated Saudi Number */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mb-4">
            <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
              <span className="font-bold text-gray-900 block mb-1">IKT Mold & Die Steel Delivery:</span> 
              Stock cut to size as required. Contact our expert team at <span className="font-bold">+966-13-3444036</span> to place your order for rapid dispatch. Data sheets and typical analysis are available upon request.
            </p>
      
          </div>
          <p className="text-xs text-gray-500 font-medium border-t border-gray-300 pt-3 text-center md:text-left">
            * DC53® is a registered trademark of Daido Steel Limited. IKT supplies D2 Supreme™ as an alternative equivalent grade.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}