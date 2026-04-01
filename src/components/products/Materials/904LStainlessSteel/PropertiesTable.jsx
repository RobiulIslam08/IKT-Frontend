/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'N08904' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '1.4539' },
    { standard: 'Euronorm (EN)', grade: 'X1NiCrMoCuN25-20-5' },
    { standard: 'British (Old BS)', grade: '904S13' },
    { standard: 'Japanese (JIS)', grade: 'SS 2562' },
    { standard: 'International Standards', grade: 'ASTM A182 / A240 / A312' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '23.00 - 28.00' },
    { element: 'Chromium (Cr)', content: '19.00 - 23.00' },
    { element: 'Molybdenum (Mo)', content: '4.00 - 5.00' },
    { element: 'Copper (Cu)', content: '1.00 - 2.00' },
    { element: 'Manganese (Mn)', content: '≤ 2.00' },
    { element: 'Silicon (Si)', content: '≤ 1.00' },
    { element: 'Carbon (C)', content: '≤ 0.020' },
    { element: 'Phosphorus (P)', content: '≤ 0.045' },
    { element: 'Sulfur (S)', content: '≤ 0.035' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Min)', value: '490 MPa / 71,000 psi' },
    { property: 'Yield Strength (0.2% Proof)', value: '220 MPa / 31,000 psi' },
    { property: 'Elongation (in 50mm)', value: '36.0 %' },
    { property: 'Reduction of Area', value: '40.0 %' },
    { property: 'Hardness (Brinell Typical)', value: '150 - 192 HB' },
    { property: 'Hardness (Rockwell B)', value: '70 - 90 HRB' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.0 g/cm³ (7.97 g/cc)' },
    { property: 'Melting Range', value: '1300 - 1390 °C (2372 - 2534 °F)' },
    { property: 'Modulus of Elasticity', value: '196 GPa (28,400 ksi)' },
    { property: 'Specific Heat Capacity', value: '0.439 J/g-°C' },
    { property: 'Linear CTE', value: '10.4 μm/m-°C (5.80 µin/in-°F)' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (UNS N08904)', price: 'Rs 800 / $11 / €9' },
    { origin: 'Japanese Origin (SCM 440 Equivalent)', price: 'Rs 950 / $14 / €12' },
    { origin: 'European Origin (1.4539 Inox)', price: 'Rs 1150 / $17 / €15' },
    { origin: 'USA Origin (Stahl 1.4539)', price: 'Rs 1300 / $19 / €17' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'ASTM A312 / A813 / A814' },
    { form: 'Instrumentation Tubing', specs: 'ASTM A269 / A249' },
    { form: 'Plate, Sheet & Coil', specs: 'ASTM A240 Standard' },
    { form: 'Fittings & Forged Flanges', specs: 'ASTM A182 / B366 / B564' },
    { form: 'Rod, Bar & Wire', specs: 'ASTM B574 / A469' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Compliance Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT 904L (N08904) metallurgical analysis, mechanical limits, and international price benchmarks.</p>
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
              <h3 className="text-xl font-bold text-gray-800">904L Material Price Index (Per Kg)</h3>
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
                    <th className="px-6 py-4 font-bold w-1/2">ASTM Specs / Status</th>
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
            Grade 904L (1.4539) super austenitic materials, including high-pressure seamless tubes, heavy corrosion-resistant plates, and marine-grade fasteners, are heavily stocked across Saudi Arabia to empower immediate deployment in saltwater desalination and petrochemical desulfurization plants.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact material test reports (MTR), please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}