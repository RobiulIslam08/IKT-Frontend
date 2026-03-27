/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const equivalentsData = [
    { standard: 'Germany (DIN)', grade: '1.7225 / 42CrMo4' },
    { standard: 'USA (ASTM/AISI/SAE)', grade: '4140' },
    { standard: 'United Kingdom (BS)', grade: 'EN19 / 42CrMo4' },
    { standard: 'International (ISO)', grade: '42CrMo4' }
  ];

  const chemicalData = [
    { element: 'Carbon (C)', content: '0.38 - 0.44' },
    { element: 'Chromium (Cr)', content: '0.80 - 1.10' },
    { element: 'Manganese (Mn)', content: '0.75 - 1.10' },
    { element: 'Molybdenum (Mo)', content: '0.15 - 0.25' },
    { element: 'Silicon (Si)', content: '0.15 - 0.35' },
    { element: 'Phosphorus (P)', content: '≤ 0.035' },
    { element: 'Sulfur (S)', content: '≤ 0.040' }
  ];

  const physicalData = [
    { property: 'Thickness Range', value: '32mm — 120mm' },
    { property: 'Standard Sheet Size', value: '2000mm x 1000mm' },
    { property: 'Hardness', value: 'High Fatigue Strength' },
    { property: 'Fabrication', value: 'Weldable with Preheating' },
    { property: 'Supply Format', value: 'Stock Plates or Bespoke Cuts' }
  ];

  const processingSteps = [
    { process: "High Torsional Strength", details: "AISI 4140 plates are known for their high torsional strength and fatigue resistance, making them ideal for rotational machinery parts and collars." },
    { process: "Impact Resistance", details: "The 1% chromium content provides superior impact resistance and toughness, essential for structural integrity under heavy loads." },
    { process: "Machining Accuracy", details: "Offers excellent machinability in the annealed condition, allowing for complex shaping and high-precision component manufacturing." }
  ];

  const containerVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Main Header (Centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT AISI 4140 Steel Plate chemical composition, equivalents, and dimensional limits.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Global Grade Equivalents
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Equivalent Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Typical Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Supply Range Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Plate Dimensions & Supply Specs
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Specification Item</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard Range / Status</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2 bg-gray-50/50">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Characteristics & Processing */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Industrial Characteristics
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] w-[210px] text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Precision Logistics in KSA:</span> 
            AISI 4140 alloy steel plates are heavily stocked in Saudi Arabia to support rapid deployment for oil field tools and machinery parts. We provide custom sawing and specialized forgings to meet exact structural requirements.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical inquiries or specialized thickness requirements, please contact our engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}