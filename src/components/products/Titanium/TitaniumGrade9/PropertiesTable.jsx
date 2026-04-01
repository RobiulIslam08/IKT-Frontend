/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'R56320' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '3.7194' },
    { standard: 'Common Name', grade: 'Ti-3Al-2.5V, Titanium Grade 9' },
    { standard: 'Industry Compliance', grade: 'AMS 4943, AMS 4944, AMS 4945' }
  ];

  const chemicalData = [
    { element: 'Titanium (Ti)', content: 'Balance (Remainder)' },
    { element: 'Aluminum (Al)', content: '2.50 - 3.50' },
    { element: 'Vanadium (V)', content: '2.00 - 3.00' },
    { element: 'Iron (Fe)', content: '≤ 0.30' },
    { element: 'Oxygen (O)', content: '≤ 0.12' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Nitrogen (N)', content: '≤ 0.02' },
    { element: 'Hydrogen (H)', content: '≤ 0.015' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength (Min)', value: '621 - 862 MPa (90 - 125 ksi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '483 - 724 MPa (70 - 105 ksi)' },
    { property: 'Density', value: '4.506 g/cm³ (0.163 lb/in³)' },
    { property: 'Elongation at Break (Min)', value: '15.0 - 20.0 %' },
    { property: 'Hardness (Typical)', value: 'Brinell 200 - 240' },
    { property: 'Corrosion Profile', value: 'Excellent pitting/crevice resistance' }
  ];

  const physicalData = [
    { property: 'Melting Point', value: '1670 °C (3038 °F)' },
    { property: 'Boiling Point', value: '3287 °C (5949 °F)' },
    { property: 'Thermal Conductivity', value: 'Typical for alpha-beta alloys' },
    { property: 'Linear Expansion (CTE)', value: 'Very Low' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (Ti Gr 9)', price: 'Rs 4000 / $58 / €50' },
    { origin: 'Japanese Origin (Ti-3Al-2.5V)', price: 'Rs 5500 / $81 / €69' },
    { origin: 'European Origin (Titan Grade 9)', price: 'Rs 6000 / $88 / €75' },
    { origin: 'USA Origin (UNS R56320)', price: 'Rs 7000 / $103 / €89' }
  ];

  const supplyFormats = [
    { form: 'Seamless Tubing', specs: 'AMS 4945 / 4944' },
    { form: 'Hydraulic Pipes', specs: 'AMS 4943' },
    { form: 'Sheets & Plates', specs: 'AMS 4911 Equivalent' },
    { form: 'Solid Rods & Bars', specs: 'ASTM B348 Compliance' },
    { form: 'Aerospace Forgings', specs: 'MIL-T-9047' }
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
          <p className="text-base font-medium text-gray-600">IKT Grade 9 Titanium (R56320) chemical analysis, mechanical limits, and international price benchmarks.</p>
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
              <h3 className="text-xl font-bold text-gray-800">Titanium Grade 9 Price Index (Per Kg)</h3>
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
            Grade 9 Titanium (Ti-3-2.5) structural components, including high-pressure hydraulic tubing (AMS 4945) and seamless pipes for offshore applications, are heavily stocked across Saudi Arabia. We provide PED-approved stock with full metallurgical certification to empower rapid deployment in aerospace and subsea infrastructure.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}