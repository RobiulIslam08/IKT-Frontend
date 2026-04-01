/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'R50700' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '3.7065 / 3.7064' },
    { standard: 'Trade Names', grade: 'CP-70 Titanium, Ti-CP-70, CP1 Grade 4' },
    { standard: 'Surgical Standards', grade: 'ASTM F67 Grade 4 / ISO 5832-2' }
  ];

  const chemicalData = [
    { element: 'Titanium (Ti)', content: '99.0 Minimum' },
    { element: 'Iron (Fe)', content: '≤ 0.50' },
    { element: 'Oxygen (O)', content: '≤ 0.40' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Nitrogen (N)', content: '≤ 0.05' },
    { element: 'Hydrogen (H)', content: '≤ 0.015' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Min)', value: '550 MPa (80,000 psi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '483 MPa (70,000 psi)' },
    { property: 'Density', value: '4.51 g/cm³ (0.163 lb/in³)' },
    { property: 'Hardness (Typical)', value: 'Brinell 200 - 220' },
    { property: 'Hardness (Rockwell)', value: '92 HRB' },
    { property: 'Biocompatibility', value: 'Surgical Implant Grade (ASTM F67)' }
  ];

  const physicalData = [
    { property: 'Melting Point', value: '1670 °C (3040 °F)' },
    { property: 'Boiling Point', value: '3287 °C (5949 °F)' },
    { property: 'Thermal Conductivity', value: '17.2 W/m·K' },
    { property: 'Linear CTE', value: '8.6 µm/m·°C' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (Grade 4 Ti)', price: 'Rs 1400 / $20 / €17' },
    { origin: 'Japanese Origin (CP-70 Titanium)', price: 'Rs 1650 / $25 / €21' },
    { origin: 'European Origin (CP Ti Grade 4)', price: 'Rs 1760 / $26 / €22' },
    { origin: 'USA Origin (UNS R50700)', price: 'Rs 1800 / $27 / €23' }
  ];

  const supplyFormats = [
    { form: 'Strip, Sheet & Plate', specs: 'AMS 4901 / ASTM B265' },
    { form: 'Solid Rod, Bar & Wire', specs: 'ASTM B348 / AMS 4921' },
    { form: 'Industrial Pipes & Tubes', specs: 'ASTM B861 / B862' },
    { form: 'Forgings & Billets', specs: 'ASTM B381 / MIL-T-9047' },
    { form: 'Cast Components', specs: 'ASTM B367' }
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
          <p className="text-base font-medium text-gray-600">IKT CP Grade 4 Titanium (R50700) metallurgical analysis, surgical implant specifications, and global pricing indices.</p>
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
                    <th className="px-6 py-4 font-bold w-1/2">Tested Value</th>
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

          {/* 4. Pricing Index */}
          {/* <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">CP Grade 4 Titanium Price Index (Per Kg)</h3>
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

          {/* 5. Industrial Form Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">AMS & ASTM Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.form}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Logistics in KSA:</span>
            Grade 4 Titanium (CP-70) structural components, including aerospace-certified plates (AMS 4901), medical billeted forgings (ASTM F67), and high-pressure chemical transfer tubes, are extensively stocked across Saudi Arabia. We provide PED and medical-grade approved high-quality stock with full metallurgical certification.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}