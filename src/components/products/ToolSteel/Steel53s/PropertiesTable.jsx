/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { grade: 'IKT 53S Tool Steel', din: 'DIN 1.2344', aisi: 'AISI H13' }
  ];

  const characteristicsData = [
    { feature: 'High-Temperature Performance', benefit: 'Higher vanadium content ensures strong resistance to heat checking.' },
    { feature: 'Operational Cooling', benefit: 'Tools may be safely water-cooled during use without risk of cracking.' },
    { feature: 'Surface Hardening (Nitriding)', benefit: 'Highly suitable for nitriding up to 0.30mm (0.012") deep post-heat treatment.' },
    { feature: 'Structural Type', benefit: 'Air hardening chromium die steel for maximum toughness.' }
  ];

  const supplyProfiles = [
    { profile: '53S Flat Bars', description: 'Custom-cut flat sections ideal for die blocks, pressure pads, and backer blocks.' }
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
          <p className="text-base font-medium text-gray-600 ml-7">IKT 53S Hot Work Tool Steel equivalency and performance data.</p>
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
                  <th className="px-6 py-4 text-left font-bold border-r border-gray-100">IKT Designation</th>
                  <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN Standard</th>
                  <th className="px-6 py-4 text-center font-bold">AISI Standard</th>
                </tr>
              </thead>
              <tbody>
                {equivalentsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-100">{row.din}</td>
                    <td className="px-6 py-4 text-center">{row.aisi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Grid for Characteristics and Supply */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Characteristics Table */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
              <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">Material Characteristics</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {characteristicsData.map((row, index) => (
                      <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3">{row.feature}</td>
                        <td className="px-6 py-4 text-left">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Supply Profiles Table */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
              <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">KSA Supply Profiles</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {supplyProfiles.map((row, index) => (
                      <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3 whitespace-nowrap">{row.profile}</td>
                        <td className="px-6 py-4 text-left">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

        </div>

        {/* Footer Note with KSA modifications */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Tool Steel Delivery Across KSA:</span> 
            We supply 53S tool steel directly from our Saudi Arabian facilities. Stock is cut to size as required. Call our expert stockholders at <span className="font-bold">+966-13-3444036</span> to secure your order for rapid nationwide dispatch.
          </p>

        </motion.div>

      </motion.div>
    </section>
  );
}