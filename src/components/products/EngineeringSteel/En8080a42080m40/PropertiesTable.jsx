/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN8 (080M40)', c: '0.35-0.45', si: '0.05-0.35', mn: '0.60-1.00', p: '0.06 Max', s: '0.06 Max' }
  ];

  const equivalentsData = [
    { bs1991: '080M40', bs1955: 'EN8', aisi: '1040', werkstoff: '1.1186' },
    { bs1991: '080A42', bs1955: 'EN8D', aisi: '1042', werkstoff: '-' }
  ];

  const forms = [
    "Bright Drawn Rounds",
    "Turned Rounds",
    "Hot Rolled Rounds",
    "Hexagons",
    "Squares",
    "Flat Bars",
    "Steel Plates",
    "Steel Forgings",
    "Hard Chrome Plated Bars (EN8D)"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material data for IKT EN8 Engineering Steel</p>
        </motion.div>

        {/* Chemical Composition & Equivalents Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Composition Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left font-bold">Grade</th>
                    <th className="px-4 py-3 font-bold">C%</th>
                    <th className="px-4 py-3 font-bold">Si%</th>
                    <th className="px-4 py-3 font-bold">Mn%</th>
                    <th className="px-4 py-3 font-bold">P%</th>
                    <th className="px-4 py-3 font-bold">S%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b text-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-left font-bold">{chemicalData[0].grade}</td>
                    <td className="px-4 py-4">{chemicalData[0].c}</td>
                    <td className="px-4 py-4">{chemicalData[0].si}</td>
                    <td className="px-4 py-4">{chemicalData[0].mn}</td>
                    <td className="px-4 py-4">{chemicalData[0].p}</td>
                    <td className="px-4 py-4">{chemicalData[0].s}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Equivalent Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900">
                    <th className="px-4 py-3 text-left font-bold">BS 970:1991</th>
                    <th className="px-4 py-3 font-bold">BS 970:1955</th>
                    <th className="px-4 py-3 font-bold">AISI/SAE</th>
                    <th className="px-4 py-3 font-bold">Werkstoff</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b text-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-left font-bold">{row.bs1991}</td>
                      <td className="px-4 py-3">{row.bs1955}</td>
                      <td className="px-4 py-3">{row.aisi}</td>
                      <td className="px-4 py-3">{row.werkstoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Available Forms Section */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-primary"></span> IKT Supplied Forms & Profiles
          </h3>
          <p className="text-base text-gray-600 mb-6">
            We maintain an extensive inventory of standard stock sizes. All materials can be supplied as full lengths or bespoke cut-to-order based on your manufacturing requirements.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {forms.map((form, idx) => (
              <span key={idx} className="px-4 py-2 bg-white border border-primary/30 text-primary rounded-lg text-sm font-semibold shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
                {form}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">Sizing Request:</span> Popular size ranges in imperial and metric dimensions are continually stocked. Please contact the IKT sales team directly for exact dimensional availability, tolerances, and pricing for bespoke cut-to-order EN8 components.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}