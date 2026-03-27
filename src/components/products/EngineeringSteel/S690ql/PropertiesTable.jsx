/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  // All 15 elements captured correctly
  const chemicalData = [
    { c: '0.20', si: '0.80', mn: '1.70', p: '0.025', s: '0.015', n: '0.015', b: '0.005', cr: '1.50', cu: '0.50', mo: '0.70', nb: '0.06', ni: '2.00', ti: '0.05', v: '0.12', zr: '0.15' }
  ];

  const mechanicalData = [
    { thickness: '>3 to <50', yield: '690', tensile: '770 - 940', elongation: '14' },
    { thickness: '>50 to <100', yield: '650', tensile: '760 - 930', elongation: '14' },
    { thickness: '>100 to <150', yield: '630', tensile: '710 - 900', elongation: '14' }
  ];

  const impactData = [
    { orientation: 'Longitudinal', temp0: '50J', temp20: '40J', temp40: '30J' },
    { orientation: 'Transverse', temp0: '35J', temp20: '30J', temp40: '27J' }
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
          <p className="text-base font-medium text-gray-600 ml-7">Complete material testing data for IKT S690QL Plate (EN 10025 / 1.8931)</p>
        </motion.div>

        {/* 1. Chemical Composition Table (Scrollable for Mobile) */}
        <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
          <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
             <h3 className="text-lg font-bold text-gray-800">Chemical Composition (Maximum % values)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                  <th className="px-4 py-3 font-bold text-center">C</th>
                  <th className="px-4 py-3 font-bold text-center">Si</th>
                  <th className="px-4 py-3 font-bold text-center">Mn</th>
                  <th className="px-4 py-3 font-bold text-center">P</th>
                  <th className="px-4 py-3 font-bold text-center">S</th>
                  <th className="px-4 py-3 font-bold text-center">N</th>
                  <th className="px-4 py-3 font-bold text-center">B</th>
                  <th className="px-4 py-3 font-bold text-center">Cr</th>
                  <th className="px-4 py-3 font-bold text-center">Cu</th>
                  <th className="px-4 py-3 font-bold text-center">Mo</th>
                  <th className="px-4 py-3 font-bold text-center">Nb</th>
                  <th className="px-4 py-3 font-bold text-center">Ni</th>
                  <th className="px-4 py-3 font-bold text-center">Ti</th>
                  <th className="px-4 py-3 font-bold text-center">V</th>
                  <th className="px-4 py-3 font-bold text-center">Zr</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-center">{chemicalData[0].c}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].si}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].mn}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].p}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].n}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].b}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].cr}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].cu}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].mo}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].nb}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].ni}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].ti}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].v}</td>
                  <td className="px-4 py-4 text-center">{chemicalData[0].zr}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Grid for Mechanical and Impact Properties */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* 2. Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">Mechanical Properties (Ambient Temp)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-100">Nominal Thickness (mm)</th>
                    <th className="px-4 py-3 font-bold text-center">Min. Yield Strength (MPa)</th>
                    <th className="px-4 py-3 font-bold text-center">Tensile Strength (MPa)</th>
                    <th className="px-4 py-3 font-bold text-center">Elongation (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-4 py-4 text-left font-bold border-r border-gray-100 whitespace-nowrap">{row.thickness}</td>
                      <td className="px-4 py-4 text-center">{row.yield}</td>
                      <td className="px-4 py-4 text-center">{row.tensile}</td>
                      <td className="px-4 py-4 text-center">{row.elongation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 3. V-Notch Impact Testing Table */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
               <h3 className="text-lg font-bold text-gray-800">V-Notch Impact Testing Requirements</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-100">Sample Orientation</th>
                    <th className="px-4 py-3 font-bold text-center">At 0°C</th>
                    <th className="px-4 py-3 font-bold text-center">At -20°C</th>
                    <th className="px-4 py-3 font-bold text-center">At -40°C</th>
                  </tr>
                </thead>
                <tbody>
                  {impactData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{row.orientation}</td>
                      <td className="px-4 py-4 text-center">{row.temp0}</td>
                      <td className="px-4 py-4 text-center">{row.temp20}</td>
                      <td className="px-4 py-4 text-center">{row.temp40}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div variants={itemVariants} className="p-6 bg-primary/5 border border-primary/20 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
            <span className="font-bold text-gray-900 block mb-1">Stock & Availability:</span> 
            To access our complete specifications, current inventory status, and highly competitive pricing for S690QL Quenched and Tempered Structural Plates, please get in touch with the IKT technical sales division.
          </p>
         
        </motion.div>

      </motion.div>
    </section>
  );
}