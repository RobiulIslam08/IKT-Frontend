/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'N08020' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4660' },
    { standard: 'AFNOR (France)', grade: 'Z2NCUD31-20AZ' },
    { standard: 'EN Designation', grade: 'NiCr20CuMo' },
    { standard: 'Cast Equivalent', grade: 'CN7M (ASTM/ACI)' },
    { standard: 'Trade Names', grade: 'Carpenter® 20, Incoloy® 20, 20Cb-3' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '32.00 - 38.00' },
    { element: 'Chromium (Cr)', content: '19.00 - 21.00' },
    { element: 'Copper (Cu)', content: '3.00 - 4.00' },
    { element: 'Molybdenum (Mo)', content: '2.00 - 3.00' },
    { element: 'Iron (Fe)', content: 'Balance (Remainder)' },
    { element: 'Manganese (Mn)', content: '≤ 2.00' },
    { element: 'Silicon (Si)', content: '≤ 1.00' },
    { element: 'Carbon (C)', content: '≤ 0.02' },
    { element: 'Phosphorus (P)', content: '≤ 0.045' },
    { element: 'Sulfur (S)', content: '≤ 0.035' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength', value: '80,000 psi (551 MPa)' },
    { property: 'Yield Strength (0.2% Offset)', value: '35,000 psi (241 MPa)' },
    { property: 'Elongation at Break', value: '30.0 %' },
    { property: 'Hardness (Typical)', value: '197 HB (Brinell)' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.1 g/cm³ (0.291 lb/in³)' },
    { property: 'Melting Point', value: '1443 °C (2430 °F)' },
    { property: 'Linear CTE', value: '11.9 μm/m-°C (6.61 µin/in-°F)' }
  ];

  const comparisonData = [
    { metric: 'Density (g/cc)', alloy20: '8.05', stainless904l: '7.97' },
    { metric: 'Yield Strength (MPa)', alloy20: '515', stainless904l: '214' },
    { metric: 'Linear CTE (μm/m-°C)', alloy20: '11.9', stainless904l: '10.4' },
    { metric: 'Elongation (%)', alloy20: '35', stainless904l: '35' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (W.Nr. 2.4660)', price: 'Rs 1300 / $18 / €16' },
    { origin: 'Japanese Origin (2.4660 Steel)', price: 'Rs 1600 / $24 / €20' },
    { origin: 'European Origin (UK/EU Material)', price: 'Rs 1750 / $26 / €22' },
    { origin: 'USA Origin (Din 2.4660 Alloy 20)', price: 'Rs 1800 / $27 / €23' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'Custom lengths and schedules available' },
    { form: 'Alloy 20 Tubing', specs: 'Precision tubes for heat exchangers' },
    { form: 'Sheet & Plate', specs: 'Standard and bespoke cut-to-size formats' },
    { form: 'Round Bar', specs: 'Solid bar stock for shafts and valve parts' }
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
          <p className="text-base font-medium text-gray-600">IKT Alloy 20 (N08020) metallurgical profiles, price benchmarks, and global equivalents.</p>
        </motion.div>

        {/* Single Column Vertical Stack */}
        <div className="flex flex-col gap-10">

          {/* 1. Grade Designations */}
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
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Metric</th>
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

          {/* 4. Pricing Benchmarks */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Alloy 20 Material Price Benchmark (Per Kg)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Origin</th>
                    <th className="px-6 py-4 font-bold w-1/2">Price Index (INR / USD / EUR)</th>
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
          </motion.div>

          {/* 5. 904L vs Alloy 20 Contrast */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">904L Stainless vs Alloy 20 Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100">Performance Metric</th>
                    <th className="px-6 py-4 font-bold border-r border-gray-100">904L (N08904)</th>
                    <th className="px-6 py-4 font-bold">Alloy 20 (N08020)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.metric}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.stainless904l}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.alloy20}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 6. Form Availability Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Availability Scope</th>
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

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
            Alloy 20 structural components, including heavy industrial plates, precision tubing, seamless pipes, and specialized fasteners, are heavily stocked across Saudi Arabia to empower rapid deployment in chemical processing and sulfuric acid handling environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific pricing details for KSA, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}