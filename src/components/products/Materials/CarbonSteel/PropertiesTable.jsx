/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const classificationData = [
    { type: 'Low-Carbon Steel', range: '0.05 to 0.30%', use: 'Pipes, Fittings, Structural' },
    { type: 'Medium-Carbon Steel', range: '0.30 to 0.80%', use: 'Forging, Automotive Parts' },
    { type: 'High-Carbon Steel', range: '0.80 to 2.0%', use: 'Springs, Edged Tools, High-Strength Wires' },
    { type: 'Ultra-High-Carbon', range: '3.25 to 4.0%', use: 'Special Hardness Knives, Axles' }
  ];

  const forgingData = [
    { steel: '0.2% Carbon Steel', max: '1321°C (2410°F)', burning: '1471°C (2680°F)' },
    { steel: '0.5% Carbon Steel', max: '1249°C (2280°F)', burning: '1349°C (2460°F)' },
    { steel: '0.9% Carbon Steel', max: '1121°C (2050°F)', burning: '1221°C (2230°F)' },
    { steel: '1.5% Carbon Steel', max: '1049°C (1920°F)', burning: '1140°C (2080°F)' },
    { steel: 'Stainless Steel', max: '1282°C (2340°F)', burning: '1385°C (2520°F)' }
  ];

  const supplyFormats = [
    { category: 'Seamless Pipes', standard: 'ASTM A106 Grade B, ASTM A53' },
    { category: 'Boiler Tubes', standard: 'BS 3059, SA 210, ASTM A192' },
    { category: 'API Pipelines', standard: 'API 5L (X42, X52, X60, X65)' },
    { category: 'LTCS Pipes', standard: 'ASTM A333 Grade 6' },
    { category: 'Large OD Pipes', standard: 'ASTM A671 / A672 (CC60, CC65, CC70)' }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Fabrication Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Carbon Steel classification matrix, forging limits, and industrial compliance benchmarks.</p>
        </motion.div>

        {/* Single Column Vertical Stack */}
        <div className="flex flex-col gap-10">

          {/* 1. Carbon Classification */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Carbon Content Classifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Steel Type</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Carbon Range</th>
                    <th className="px-6 py-4 font-bold w-1/3">Typical Application</th>
                  </tr>
                </thead>
                <tbody>
                  {classificationData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.type}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.range}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Forging Temperature Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Forging & Burning Temperatures</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Material Grade</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/3">Max Forging Temp</th>
                    <th className="px-6 py-4 font-bold w-1/3">Burning Temp</th>
                  </tr>
                </thead>
                <tbody>
                  {forgingData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.steel}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.max}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.burning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Industrial Inventory Standards */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Inventory Standards (KSA Stock)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Product Category</th>
                    <th className="px-6 py-4 font-bold w-1/2">International Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Steel Logistics in KSA:</span>
            Carbon Steel structural components, including ASTM A106 high-temp seamless pipes, low-temp pipes (ASTM A333), and high-strength plates for automotive forging, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability for all regional energy and manufacturing projects.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}