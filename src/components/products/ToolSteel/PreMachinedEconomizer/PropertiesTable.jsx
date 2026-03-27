/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const toleranceData = [
    { dimension: 'Thickness', tolerance: '-0.00 / +0.20 mm' },
    { dimension: 'Width', tolerance: '-0.00 / +0.40 mm' },
    { dimension: 'Square', tolerance: '+0.40 / +0.40 mm' },
    { dimension: 'Length', tolerance: '+5.00 / +30.00 mm' }
  ];

  const executionData = [
    { feature: 'Surface Finish', spec: 'Thickness and width in ground / fine milled execution' },
    { feature: 'End Preparation', spec: 'Both bar ends cleanly saw cut' },
    { feature: 'Surface Roughness', spec: 'Maximum 3.2 µm' },
    { feature: 'Corrosion Protection', spec: 'Fully rust protected and wrapped in VCI-paper' },
    { feature: 'Standard Lengths', spec: '500 mm, 1000 mm, and 2000 mm' }
  ];

  const availableGrades = [
    { grade: '01 Tool Steel', din: '1.2510', type: 'Cold Work Tool Steel' },
    { grade: 'D2 Tool Steel', din: '1.2379', type: 'High Chrome Cold Work' },
    { grade: 'D6 Tool Steel', din: '1.2436', type: 'High Chrome / Wear Resistant' },
    { grade: 'P20S Tool Steel', din: '1.2312', type: 'Pre-Hardened Mould Steel' },
    { grade: 'EN19 Steel', din: '1.7225 (42CrMo4)', type: 'High Tensile Alloy Steel' },
    { grade: 'C45U Tool Steel', din: '1.1730', type: 'Unalloyed Cold Work Steel' },
    { grade: '420 Stainless', din: '1.2083', type: 'Corrosion Resistant Mould Steel' },
    { grade: 'Silver Steel', din: '1.2210', type: 'High Carbon Bright Steel' },
    { grade: 'H11 Tool Steel', din: '1.2343', type: 'Hot Work Tool Steel' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Grades</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT Economizer machining tolerances and KSA stock list.</p>
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

        {/* Available Tool Steel Grades - Presented as clean informative cards */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
          <div className="mb-6 border-b border-gray-200 pb-4">
             <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> Economizer Grades Available in KSA
             </h3>
             <p className="text-gray-600 font-medium">IKT stocks Economizer blocks across a multitude of high-performance steel grades.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
             {availableGrades.map((item, idx) => (
               <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                 <h4 className="text-lg font-bold text-gray-900 mb-1">{item.grade}</h4>
                 <div className="w-8 h-1 bg-primary/50 rounded-full mb-3"></div>
                 <p className="text-sm text-gray-700 font-medium mb-1"><span className="font-bold text-gray-800">DIN Standard:</span> {item.din}</p>
                 <p className="text-sm text-gray-700 font-medium"><span className="font-bold text-gray-800">Category:</span> {item.type}</p>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Footer Note & Contact with Saudi Context */}
        <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">IKT Industrial Logistics in KSA:</span> 
            We supply all listed Economizer grades directly from our stock across Saudi Arabia. Call our engineering sales team now at <span className="font-bold">+966-13-3444036</span> for rapid nationwide dispatch.
          </p>
          
        </motion.div>

      </motion.div>
    </section>
  );
}