/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { alloy: 'Hastelloy B3', standard: 'UNS N10675', werkstoff: '2.4600' },
    { alloy: 'Alloy B2', standard: 'UNS N10665 / N10276', werkstoff: '2.4617' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', b2: 'Balance', b3: '65.0 Minimum' },
    { element: 'Molybdenum (Mo)', b2: '26.0 - 30.0', b3: '28.5 Typical' },
    { element: 'Iron (Fe)', b2: '≤ 2.00', b3: '1.5 Typical' },
    { element: 'Chromium (Cr)', b2: '≤ 1.00', b3: '≤ 1.50' },
    { element: 'Manganese (Mn)', b2: '≤ 1.00', b3: '≤ 3.00' },
    { element: 'Cobalt (Co)', b2: '≤ 1.00', b3: '-' },
    { element: 'Silicon (Si)', b2: '≤ 0.10', b3: '≤ 0.10' },
    { element: 'Copper (Cu)', b2: '-', b3: '≤ 0.20' },
    { element: 'Titanium (Ti)', b2: '-', b3: '≤ 0.20' },
    { element: 'Carbon (C)', b2: '≤ 0.02', b3: '≤ 0.01' },
    { element: 'Phosphorus (P)', b2: '≤ 0.04', b3: '-' },
    { element: 'Sulfur (S)', b2: '≤ 0.03', b3: '≤ 0.03' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Alloy B2)', value: '110,000 psi (760 MPa)' },
    { property: 'Yield Strength (0.2% Offset, B2)', value: '51,000 psi (350 MPa)' },
    { property: 'Elongation at Break (Alloy B2)', value: '40 %' },
    { property: 'Strength Parameters (Alloy B3)', value: 'Enhanced structural stability generally exceeding B2 equivalents' }
  ];

  const physicalData = [
    { property: 'Density (Hastelloy B3)', value: '9.22 g/cm³' },
    { property: 'Density (Alloy B2)', value: '9.20 g/cm³' },
    { property: 'Melting Point (B2 & B3)', value: '1370 °C (2500 °F)' }
  ];

  const processingSteps = [
    { process: "Welding Protocols (B3)", details: "Alloy B3 exhibits superb weldability. Optimal fusion is achieved using Shielded Metal Arc (SMAW), Gas Metal Arc (GMAW/MIG), Gas Tungsten Arc (GTAW/TIG), Electron Beam (EBW), Laser Beam (LBW), and Plasma Arc (PAW) welding." },
    { process: "Restricted Welding Methods", details: "Due to the metallurgical characteristics and potential heat input complications of the B3 alloy, Submerged Arc Welding (SAW) processes are strictly not encouraged." },
    { process: "B2 vs B3 Structural Stability", details: "The core advantage of Alloy B3 lies in its sophisticated structural stability. Unlike B2, it strongly resists the formation of brittle intermetallic phases, providing vastly superior performance during complex fabrication and thermal cycling." },
    { process: "Acid Domination (B vs C Class)", details: "While Hastelloy C (Ni-Mo-Cr) is versatile, the Hastelloy B family (strictly Ni-Mo) provides the absolute highest resistance against pure hydrochloric and non-oxidizing acid environments." }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT Hastelloy B3 & B2 chemistry, mechanical contrasts, and fabrication protocols.</p>
        </motion.div>

        {/* Masonry Layout Container: This perfectly prevents any ugly white spaces */}
        <div className="columns-1 lg:columns-2 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloy Name</th>
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">UNS Number</th>
                    <th className="px-6 py-4 text-left font-bold">Werkstoff Nr.</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.alloy}</td>
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.werkstoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloy B2 (%)</th>
                    <th className="px-6 py-4 text-left font-bold">Hastelloy B3 (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.b2}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.b3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800">Mechanical Limitations</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
                    <th className="px-6 py-4 text-left font-bold">Tested Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Physical Properties Table */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800">Physical Dynamics</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
                    <th className="px-6 py-4 text-left font-bold">Standard Value</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Engineering Protocol Steps */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Welding & Fabrication Protocol
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
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

        {/* Processing Note (Outside the masonry columns) */}
        <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Heavy Logistics in KSA:</span>
            Hastelloy B3 and Alloy B2 structural components, including chemical-grade plates, seamless pipes, robust tubes, and advanced fasteners, are heavily stocked across Saudi Arabia to ensure immediate deployment in severe acidic environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}