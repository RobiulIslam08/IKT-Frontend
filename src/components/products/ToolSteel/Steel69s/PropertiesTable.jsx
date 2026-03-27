/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { grade: 'IKT 69S Steel', din: 'DIN 1.2379', aisi: 'AISI D2', werkstoff: 'X153CrMoV12' }
  ];

  const mechanicalData = [
    { property: 'Achievable Hardness', value: '55 - 62 HRC' },
    { property: 'Machinability', value: 'Machinable in the annealed condition' },
    { property: 'Heat Treatment Stability', value: 'Shows minimal distortion when hardened correctly' },
    { property: 'Corrosion Resistance', value: 'Mild corrosion resisting properties in the hardened state' }
  ];

  const supplyProfiles = [
    { profile: 'Custom Flat Bars', finish: 'Standard Black or Pre-Machined Economizer', stock: 'Cut from plate across KSA' },
    { profile: 'Custom Square Bars', finish: 'Standard Black or Pre-Machined Economizer', stock: 'Cut from plate across KSA' }
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
          <p className="text-base font-medium text-gray-600 ml-7">IKT 69S Tool Steel equivalency, mechanical traits, and Saudi Arabian stock profiles.</p>
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
                  <th className="px-6 py-4 text-center font-bold border-r border-gray-100">AISI Equivalent</th>
                  <th className="px-6 py-4 text-center font-bold">Werkstoff Material No.</th>
                </tr>
              </thead>
              <tbody>
                {equivalentsData.map((row, index) => (
                  <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-100">{row.din}</td>
                    <td className="px-6 py-4 text-center border-r border-gray-100">{row.aisi}</td>
                    <td className="px-6 py-4 text-center">{row.werkstoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Grid for Properties and Supply */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Mechanical Properties Table */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
              <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">Key Mechanical Properties</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {mechanicalData.map((row, index) => (
                      <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3">{row.property}</td>
                        <td className="px-6 py-4 text-left">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Supply Profiles Table */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
              <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
                 <h3 className="text-lg font-bold text-gray-800">Saudi Arabian Supply Profile</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                      <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Profile</th>
                      <th className="px-6 py-4 text-left font-bold">Delivery Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplyProfiles.map((row, index) => (
                      <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                        <td className="px-6 py-4 text-left font-bold border-r border-gray-100 w-1/3 whitespace-nowrap">{row.profile}</td>
                        <td className="px-6 py-4 text-left">
                          {row.finish}
                          <br />
                          <span className="text-xs text-gray-500 mt-1 block">{row.stock}</span>
                        </td>
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
            <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery in KSA:</span> 
            As leading tool steel suppliers in Saudi Arabia, we deliver 69S stock cut-to-size strictly as required. Call our specialized technical team now at <span className="font-bold">+966-13-3444036</span> for rapid dispatch.
          </p>
        
        </motion.div>

      </motion.div>
    </section>
  );
}