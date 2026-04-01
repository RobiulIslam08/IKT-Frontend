/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'R52400' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '3.7235' },
    { standard: 'International Standard', grade: 'Titanium CP Grade 7' },
    { standard: 'Industrial Specs', grade: 'MIL-T-9046J, AMS-T-9046, AMS 4901' }
  ];

  const chemicalData = [
    { element: 'Titanium (Ti)', content: 'Balance (Remainder)' },
    { element: 'Palladium (Pd)', content: '0.12 - 0.25' },
    { element: 'Iron (Fe)', content: '≤ 0.30' },
    { element: 'Oxygen (O)', content: '≤ 0.25' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Nitrogen (N)', content: '≤ 0.03' },
    { element: 'Hydrogen (H)', content: '≤ 0.015' },
    { element: 'Residuals (Total)', content: '≤ 0.40' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Min)', value: '345 MPa' },
    { property: '0.2% Proof Stress', value: '275 - 475 MPa' },
    { property: 'Elongation at Break', value: '20.0 %' },
    { property: 'Density', value: '4.506 g/cm³ (0.163 lb/in³)' },
    { property: 'Hardness', value: 'Brinell Typical' }
  ];

  const thermalData = [
    { property: 'Melting Point', value: '1670 °C (3038 °F)' },
    { property: 'Boiling Point', value: '3287 °C (5949 °F)' },
    { property: 'Physical Condition', value: 'Annealed' },
    { property: 'Corrosion Rate', value: 'Superior in reducing/acidic media' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (Ti Grade 7)', price: 'Rs 3200 / $46 / €39' },
    { origin: 'Japanese Origin (3.7235 / R52400)', price: 'Rs 3500 / $51 / €43' },
    { origin: 'European Origin (Gr 7 Titanium)', price: 'Rs 3700 / $54 / €46' },
    { origin: 'USA Origin (CP Grade 7)', price: 'Rs 4500 / $65 / €56' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'Custom Schedules' },
    { form: 'Instrumentation Tubing', specs: 'High-Pressure Seamless' },
    { form: 'Sheet & Plate', specs: 'Bespoke Cut-to-Size' },
    { form: 'Solid Rod, Bar & Wire', specs: 'ASTM B348 Compliance' },
    { form: 'Forgings & Pipe Fittings', specs: 'Standard & Specialized Flanges' },
    { form: 'Precision Fasteners', specs: 'Bolts, Nuts, Screws' }
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
          <p className="text-base font-medium text-gray-600">IKT Grade 7 Titanium (R52400) chemical analysis, mechanical limits, and international price benchmarks.</p>
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
                  {[...mechanicalData, ...thermalData].map((row, index) => (
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
              <h3 className="text-xl font-bold text-gray-800">Titanium Grade 7 Price Index (Per Kg)</h3>
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
                    <th className="px-6 py-4 font-bold w-1/2">Specifications / Compliance</th>
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
            Grade 7 Titanium structural components, including palladium-stabilized plates, high-pressure pipes, flanges, and marine fasteners, are heavily stocked across Saudi Arabia to support rapid deployment in severe chloride and acidic environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}