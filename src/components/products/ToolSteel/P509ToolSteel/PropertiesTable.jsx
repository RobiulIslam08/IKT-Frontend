/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { grade: 'IKT PS09', din: 'DIN 1.2316', other: 'X38CrMo16' }
  ];

  const chemicalData = [
    { c: '0.33 - 0.45', si: '1.00 Max', cr: '15.50 - 17.50', mo: '0.80 - 1.30', mn: '0 - 1.50', p: '0.03 Max', s: '0.03 Max', ni: '1.00 Max' }
  ];

  const supplyData = [
    { condition: 'Pre-Hardened (Standard)', hardness: '~300 HB', formats: 'Rounds, Flats, Plate' },
    { condition: 'Pre-Hardened (High-Spec)', hardness: '~340 HB', formats: 'Rounds, Flats, Plate' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Stock Profile</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT PS09 (1.2316) chemical properties and KSA availability.</p>
        </motion.div>

        {/* Equivalents & Supply Condition Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Grade Equivalents</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">IKT Grade</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN Standard</th>
                    <th className="px-6 py-4 text-center font-bold">Material Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100">{row.din}</td>
                      <td className="px-6 py-4 text-center">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Supply Condition Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Delivery Condition Profile</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Delivery State</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Brinell Hardness</th>
                    <th className="px-6 py-4 text-center font-bold">Stock Forms</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.condition}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100">{row.hardness}</td>
                      <td className="px-6 py-4 text-center">{row.formats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                  <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                  <th className="px-4 py-4 text-center font-bold">Ni%</th>
                </tr>
              </thead>
              <tbody>
                {chemicalData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.c}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.si}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.cr}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mo}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.mn}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.p}</td>
                    <td className="px-4 py-4 text-center border-r border-gray-100">{row.s}</td>
                    <td className="px-4 py-4 text-center">{row.ni}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer Note & Contact with Saudi Context */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Mould Steel Suppliers (KSA):</span> 
            Delivering PS09 plastic mould steel directly from stock throughout Saudi Arabia. Call our specialized technical team now at <span className="font-bold">+966-13-3444036</span> for rapid nationwide delivery.
          </p>
     
     
        </motion.div>

      </motion.div>
    </section>
  );
}