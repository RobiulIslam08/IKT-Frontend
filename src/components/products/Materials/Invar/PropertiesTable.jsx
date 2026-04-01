/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const physicalData = [
    { property: 'Density', value: '8.1 - 8.2 Mg/m³ (511.9 lb/ft³)' },
    { property: 'Melting Point', value: '1690 - 1710 K (2582 - 2618 °F)' },
    { property: 'Thermal Conductivity', value: '12 - 15 W/m.K' },
    { property: 'Specific Heat', value: '505 - 525 J/kg.K' },
    { property: 'Thermal Expansion (CTE)', value: '0.5 - 2.0 10⁻⁶/K' },
    { property: 'Resistivity', value: '75 - 85 10⁻⁸ ohm.m' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength', value: '445 - 810 MPa (64 - 117 ksi)' },
    { property: 'Yield Strength (Elastic Limit)', value: '240 - 725 MPa' },
    { property: 'Young’s Modulus', value: '137 - 145 GPa (21 x 10⁶ psi)' },
    { property: 'Fracture Toughness', value: '120 - 150 MPa.m½' },
    { property: 'Poisson’s Ratio', value: '0.28 - 0.30' },
    { property: 'Hardness', value: '1200 - 2400 MPa' }
  ];

  const resistanceData = [
    { factor: 'Seawater & Fresh Water', rating: 'Excellent (5/5)' },
    { factor: 'Strong Alkalis & Weak Acids', rating: 'Excellent (5/5)' },
    { factor: 'Strong Acids', rating: 'Good (4/5)' },
    { factor: 'Oxidation at 500°C', rating: 'Excellent (5/5)' },
    { factor: 'Wear Resistance', rating: 'Good (4/5)' }
  ];

  const supplyFormats = [
    { form: 'Invar 36 Sheet & Plate', specs: 'Precision Cold Rolled' },
    { form: 'Invar 42 Solid Round Bar', specs: 'Forged & Bright Finished' },
    { form: 'Precision Tubing', specs: 'High-Stability Structural Grade' },
    { form: 'Invar Pipe & Fittings', specs: 'ASME Compliant Sizes' },
    { form: 'Optical Tooling Molds', specs: 'Bespoke Custom Machined' }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Performance Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Invar metallurgical properties, mechanical resilience, and environmental resistance benchmarks.</p>
        </motion.div>

        <div className="flex flex-col gap-10">

          {/* 1. Physical Properties */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Physical & Thermal Dynamics</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Performance Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2">Measured Value</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Mechanical Dynamics */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Mechanical Performance Profile</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Property Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2">Tested Result</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Resistance Factors */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Environmental Resistance Ratings</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Medium / Stressor</th>
                    <th className="px-6 py-4 font-bold w-1/2">Suitability Score</th>
                  </tr>
                </thead>
                <tbody>
                  {resistanceData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.factor}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.rating}</td>
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
                    <th className="px-6 py-4 font-bold w-1/2">Compliance Scope</th>
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

        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Logistics in KSA:</span>
            Invar Alloy components, including Alloy 36 and Alloy 42 in precision plates, structural tubing, and precision round bars, are heavily stocked across Saudi Arabia. We provide full metallurgical traceability for aerospace tooling and scientific instrumentation sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}