/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const chemicalData = [
    { grade: 'EN14A (150M19)', c: '0.15-0.25', si: '0.10-0.35', mn: '1.30-1.70', ni: '0.40 Max', cr: '0.25 Max', p: '0.06 Max', s: '0.06 Max' }
  ];

  const equivalentsData = [
    { bs1991: '150M19', bs1955: 'EN14A', aisi: '1524', werkstoff: '1.1160' }
  ];

  const sizes = {
    roundsHotRolled: ["50", "55", "60", "65", "75", "80", "90", "95", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "210"]
  };

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  const RenderPills = ({ data, title }) => (
    <div className="mb-6">
      <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide border-b border-gray-200 pb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {data.map((item, idx) => (
          <span key={idx} className="px-4 py-1.5 bg-white border border-primary/30 text-primary rounded-md text-sm font-bold shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
            {item} mm
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Availability</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">Complete material data for IKT EN14 Steel (150M19)</p>
        </motion.div>

        {/* Chemical Composition Table */}
        <motion.div variants={itemVariants} className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-bold">Grade</th>
                  <th className="px-4 py-3 font-bold text-center">C%</th>
                  <th className="px-4 py-3 font-bold text-center">Si%</th>
                  <th className="px-4 py-3 font-bold text-center">Mn%</th>
                  <th className="px-4 py-3 font-bold text-center">Ni%</th>
                  <th className="px-4 py-3 font-bold text-center">Cr%</th>
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
                  <td className="px-4 py-4 text-center">{chemicalData[0].ni}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].cr}</td>
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

        {/* Available Forms Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary"></span> Mill Stock Profile
            </h3>
            <RenderPills title="EN14 Hot Rolled Rounds" data={sizes.roundsHotRolled} />
            
            {/* Special Feature highlight */}
            <div className="mt-8 bg-gray-50 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm font-bold text-gray-900 mb-1">Also Available: EN14A Hard Chrome Plated Bars</p>
                <p className="text-sm text-gray-600 font-medium">IKT supplies specialized EN14A bars complete with hard chrome plating to significantly enhance surface durability and wear resistance. Contact us for custom length details.</p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-sm md:text-base font-medium text-gray-700">
            <span className="font-bold text-gray-900">IKT Supply Notice:</span> The size ranges shown above represent our most popular hot-rolled dimensions. Other bespoke profiles, specific diameters, and custom lengths are available upon specialized request.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}