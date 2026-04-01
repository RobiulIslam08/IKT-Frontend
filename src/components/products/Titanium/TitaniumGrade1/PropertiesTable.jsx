/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'R50250' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '3.7025' },
    { standard: 'Trade Names', grade: 'Titan Grade 1, Timetal 35A, Allvac 30' }
  ];

  const chemicalData = [
    { element: 'Titanium (Ti)', content: '99.5 (Balance)' },
    { element: 'Iron (Fe)', content: '≤ 0.20' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Oxygen (O)', content: '≤ 0.18' },
    { element: 'Nitrogen (N)', content: '≤ 0.03' },
    { element: 'Hydrogen (H)', content: '≤ 0.015' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Annealed)', value: '300 - 400 MPa (44 - 58 ksi)' },
    { property: 'Tensile Strength (Spring Temper)', value: '550 - 850 MPa (80 - 123 ksi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '241 MPa (35,000 psi)' },
    { property: 'Elongation at Break', value: '30.0 %' },
    { property: 'Modulus of Elasticity', value: '105 - 120 kN/mm²' },
    { property: 'Modulus of Rigidity', value: '40 - 45 kN/mm²' }
  ];

  const physicalData = [
    { property: 'Density', value: '4.51 g/cm³ (0.163 lb/in³)' },
    { property: 'Melting Point', value: '1670 °C (3040 °F)' },
    { property: 'Boiling Point', value: '3287 °C (5949 °F)' },
    { property: 'Thermal Conductivity', value: '117 BTU-in/hr-ft²-°F (Typical for Ti)' },
    { property: 'Coefficient of Expansion', value: '8.6 μm/m °C (20–100°C)' },
    { property: 'Safe Operating Temp', value: '-200 to +400 °C' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (Titanium Gr 1)', price: 'Rs 1300 / $18 / €16' },
    { origin: 'Japanese Origin (Ti Grade 1)', price: 'Rs 1600 / $24 / €20' },
    { origin: 'European Origin (Titan Grade 1)', price: 'Rs 1750 / $26 / €22' },
    { origin: 'USA Origin (Allvac 30)', price: 'Rs 1800 / $27 / €23' }
  ];

  const heatTreatmentData = [
    { condition: 'Annealed Parts', type: 'Stress Relieve', temp: '480°C (900°F)', time: '0.5 – 2 Hr', cooling: 'Air' },
    { condition: 'Spring Temper', type: 'Stress Relieve', temp: '250°C (480°F)', time: '0.5 Hr', cooling: 'Air' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Compliance</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT CP Grade 1 Titanium (R50250) metallurgical analysis, thermal limits, and global price benchmarks.</p>
        </motion.div>

        {/* Single Column Vertical Stack */}
        <div className="flex flex-col gap-10">

          {/* 1. Global Grade Designations */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Global Grade Designations</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Standard / System</th>
                    <th className="px-6 py-4 font-bold w-1/2">Grade Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 2. Chemical Composition */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 font-bold w-1/2">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 3. Mechanical & Physical Dynamics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Mechanical & Physical Dynamics</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Performance Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2">Standard Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[...mechanicalData, ...physicalData].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 4. Heat Treatment Protocol */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Thermal Processing Protocol</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Supply State</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Process</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Temperature</th>
                    <th className="px-4 py-4 font-bold border-r border-gray-100">Time (Hr)</th>
                    <th className="px-4 py-4 font-bold">Cooling</th>
                  </tr>
                </thead>
                <tbody>
                  {heatTreatmentData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.condition}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.type}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.temp}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.time}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.cooling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 5. Pricing Index */}
          {/* <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full"> 
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">CP Grade 1 Titanium Price Index (Per Kg)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Market Origin</th>
                    <th className="px-6 py-4 font-bold w-1/2">Price Benchmark (INR / USD / EUR)</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.origin}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div> */}

        </div>

        {/* Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Logistics in KSA:</span>
            CP Grade 1 Titanium components, including precision tubing, heavy industrial plates, seamless pipes, and specialized aviation fasteners, are extensively stocked across Saudi Arabia to empower rapid deployment in chemical processing and saltwater desalination sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}