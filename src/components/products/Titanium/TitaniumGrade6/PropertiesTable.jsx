/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'R54520' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '3.7115 / 3.7114' },
    { standard: 'Common Names', grade: 'Ti-5Al-2.5Sn, A-110AT, MMA-5137' },
    { standard: 'Industry Compliance', grade: 'AMS 4910, AMS 4926, MIL-T-9047' }
  ];

  const chemicalData = [
    { element: 'Titanium (Ti)', content: 'Balance (Remainder)' },
    { element: 'Aluminum (Al)', content: '4.0 - 6.0' },
    { element: 'Tin (Sn)', content: '2.0 - 3.0' },
    { element: 'Iron (Fe)', content: '≤ 0.50' },
    { element: 'Oxygen (O)', content: '≤ 0.20' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Nitrogen (N)', content: '≤ 0.05' },
    { element: 'Hydrogen (H)', content: '≤ 0.020' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '1170 MPa (170,000 psi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '1100 MPa (160,000 psi)' },
    { property: 'Density', value: '4.506 g/cm³ (0.163 lb/in³)' },
    { property: 'Elongation at Break', value: '10.0 %' },
    { property: 'Creep Strength (@455°C)', value: '210 MPa' },
    { property: 'Reduction of Area (RA)', value: '25.0 %' }
  ];

  const hardnessData = [
    { scale: 'Rockwell Hardness C', value: '41 HRC' },
    { scale: 'Brinell Hardness', value: '379 HB' },
    { scale: 'Vickers Hardness', value: '396 HV' },
    { scale: 'Knoop Hardness', value: '414 HK' }
  ];

  const thermalData = [
    { property: 'Melting Point', value: '1670 °C (3038 °F)' },
    { property: 'Boiling Point', value: '3287 °C (5949 °F)' },
    { property: 'Thermal Conductivity', value: '6.70 W/m-K' },
    { property: 'Physical State', value: 'Alpha Alloy (Non-Heat Treatable)' }
  ];

  const pricingData = [
    { origin: 'Indian Origin (Ti Gr 6)', price: 'Rs 2400 / $35 / €29' },
    { origin: 'Japanese Origin (Ti-5Al-2.5Sn)', price: 'Rs 2800 / $40 / €35' },
    { origin: 'European Origin (Titan Grade 6)', price: 'Rs 3100 / $45 / €39' },
    { origin: 'USA Origin (UNS R54520)', price: 'Rs 3300 / $48 / €41' }
  ];

  const supplyFormats = [
    { form: 'Sheets & Plates', specs: 'AMS 4910 / ASME SB-265' },
    { form: 'Round Bars & Wires', specs: 'AMS 4926 / ASME SB-348' },
    { form: 'Forgings', specs: 'AMS 4924 / ASME SB-381' },
    { form: 'Extrusions', specs: 'MIL-T-81556' },
    { form: 'Welding Wire', specs: 'AMS 4956' }
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
          <p className="text-base font-medium text-gray-600">IKT Titanium Grade 6 (Ti-5-2.5) metallurgical analysis, creep dynamics, and international price benchmarks.</p>
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

          {/* 3. Mechanical Dynamics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Mechanical & Hardness Dynamics</h3>
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
                  {[...mechanicalData, ...hardnessData].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property || row.scale}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 4. Pricing Index */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Titanium Grade 6 Price Index (Per Kg)</h3>
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
          </motion.div>

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
                    <th className="px-6 py-4 font-bold w-1/2">AMS & ASME Specifications</th>
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
            <span className="font-bold text-gray-900">IKT Specialized High-Heat Logistics in KSA:</span>
            Titanium Grade 6 (Ti-5Al-2.5Sn) structural components, including aerospace-certified turbine plates (AMS 4910), high-creep round bars (AMS 4926), and high-pressure retorts, are heavily stocked across Saudi Arabia. We provide PED-approved stock with full metallurgical certification to empower rapid deployment in turbine engines and cryogenic infrastructure.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}