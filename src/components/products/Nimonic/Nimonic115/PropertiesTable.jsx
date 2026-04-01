/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'International Grade', grade: 'Nimonic® Alloy 115' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4636' },
    { standard: 'British (BS)', grade: 'BS HR4' },
    { standard: 'French (AFNOR)', grade: 'NCK 15 ATD' },
    { standard: 'Alloy Type', grade: 'Nickel-Cobalt-Chromium Superalloy' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '54.0 Nominal' },
    { element: 'Chromium (Cr)', content: '14.0 - 16.0' },
    { element: 'Cobalt (Co)', content: '13.0 - 15.5' },
    { element: 'Aluminum (Al)', content: '4.50 - 5.50' },
    { element: 'Molybdenum (Mo)', content: '3.0 - 5.0' },
    { element: 'Titanium (Ti)', content: '3.50 - 4.50' },
    { element: 'Iron (Fe)', content: '≤ 1.0' },
    { element: 'Carbon (C)', content: '0.12 - 0.20' },
    { element: 'Boron (B)', content: '0.010 - 0.025' },
    { element: 'Zirconium (Zr)', content: '≤ 0.15' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Precipitation Hardened)', value: '1300 MPa (189,000 psi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '850 MPa (123,000 psi)' },
    { property: 'Elongation at Break', value: '25.0 %' },
    { property: 'Hardening Process', value: 'Precipitation Hardened' }
  ];

  const physicalData = [
    { property: 'Density', value: '7.85 g/cm³ (0.284 lb/in³)' },
    { property: 'Melting Point', value: '1304 °C (2380 °F)' },
    { property: 'High Temp Capability', value: 'Up to 1010°C (1850°F)' },
    { property: 'Oxidation Resistance', value: 'Excellent' }
  ];

  const weldingSuitability = [
    { method: 'Gas-Tungsten Arc (GTAW)', suitability: 'Recommended' },
    { method: 'Gas Metal-Arc (GMAW)', suitability: 'Recommended' },
    { method: 'Submerged-Arc (SAW)', suitability: 'Highly Effective' },
    { method: 'Shielded Metal-Arc (SMAW)', suitability: 'Recommended' }
  ];

  const supplyFormats = [
    { form: 'Seamless & Welded Pipe', specs: 'Aero-Turbine Exhaust Grade' },
    { form: 'Alloy 115 Tubing', specs: 'High-Heat Instrumentation' },
    { form: 'Sheet & Plate', specs: 'BS HR4 Compliant Thicknesses' },
    { form: 'Solid Round Bar', specs: 'Precision Forged & Air Cooled' },
    { form: 'Forged Fittings', specs: 'Bespoke Turbine Hardware' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Nimonic 115 (N13115) chemical matrix, mechanical resilience, and global compliance benchmarks.</p>
        </motion.div>

        {/* Vertical Stack */}
        <div className="flex flex-col gap-10">

          {/* 1. Grade Classifications */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Grade Classifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Standard / System</th>
                    <th className="px-6 py-4 font-bold w-1/2">Alloy Specification</th>
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
          </div>

          {/* 2. Chemical Composition */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
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
          </div>

          {/* 3. Welding Suitability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Recommended Welding Suitability</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Technique</th>
                    <th className="px-6 py-4 font-bold w-1/2">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {weldingSuitability.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.method}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.suitability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Industrial Form Availability */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Compliance Standards</th>
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
          </div>

        </div>

        {/* Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized High-Heat Logistics in KSA:</span>
            Nimonic Alloy 115 structural components, including aerospace-certified engine plates, ultra-high temp turbine tubing, and forged air-cooled bars, are heavily stocked across Saudi Arabia to empower rapid deployment in energy and aerospace sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}