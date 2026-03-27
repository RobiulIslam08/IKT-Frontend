/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'N06022' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4602' },
    { standard: 'Europe (EN)', grade: 'NiCr21Mo14W' },
    { standard: 'Japan (JIS)', grade: 'NW 6022' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: 'Balance (Remainder)' },
    { element: 'Chromium (Cr)', content: '20.00 - 22.50' },
    { element: 'Molybdenum (Mo)', content: '12.50 - 14.50' },
    { element: 'Iron (Fe)', content: '2.00 - 6.00' },
    { element: 'Tungsten (W)', content: '2.50 - 3.50' },
    { element: 'Cobalt (Co)', content: '≤ 2.50' },
    { element: 'Manganese (Mn)', content: '≤ 0.50' },
    { element: 'Vanadium (V)', content: '≤ 0.35' },
    { element: 'Silicon (Si)', content: '≤ 0.08' },
    { element: 'Phosphorus (P)', content: '≤ 0.02' },
    { element: 'Sulfur (S)', content: '≤ 0.02' },
    { element: 'Carbon (C)', content: '≤ 0.010 / 0.015' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '100,000 psi (690 MPa)' },
    { property: 'Yield Strength (0.2% Offset)', value: '45,000 psi (310 MPa)' },
    { property: 'Elongation at Break', value: '45 %' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.69 g/cm³ (0.314 lb/in³)' },
    { property: 'Melting Point', value: '1399 °C (2550 °F)' },
    { property: 'Elastic Modulus', value: '29,878 ksi (~206 GPa)' },
    { property: 'Thermal Conductivity (@ 100°C/212°F)', value: '11.1 W/m-K (6.4 BTU-in/hr-ft²-°F)' },
    { property: 'Specific Heat Capacity', value: '414 J/Kg-K (0.099 Btu/lb-°F)' },
    { property: 'Mean CTE (24 to 93°C / 75 to 200°F)', value: '12.4 μm/m-°C (6.9 μin/in-°F)' },
    { property: 'Electrical Resistivity', value: '1.215 µΩm (730.7 µΩm•circ mil/ft)' },
    { property: 'Magnetic Permeability (@ 200 oersted)', value: '≤ 1.001 (Virtually Non-Magnetic)' }
  ];

  const astmSpecifications = [
    { form: 'Seamless Pipe & Tube', specs: 'ASTM B622' },
    { form: 'Welded Pipe & Tube', specs: 'ASTM B619 (Pipe) | ASTM B626 (Tube)' },
    { form: 'Sheet, Strip & Plate', specs: 'ASTM B575' },
    { form: 'Rod, Bar & Wire', specs: 'ASTM B574' },
    { form: 'Fittings & Forgings', specs: 'Fitting: ASTM B366 | Forging: ASTM B564' },
    { form: 'Welding Fillers', specs: 'ASME SFA5.14 (ERNiCRMo-10)' }
  ];

  const processingSteps = [
    { process: "Thermal Annealing", details: "To ensure maximum microstructural integrity, Hastelloy C22 is aggressively annealed at temperatures ranging from 2020°F to 2150°F, immediately followed by a rapid water quench." },
    { process: "Machining Execution", details: "Machinability is efficiently achieved utilizing robust high-speed steel or specialized carbide tooling. Conventional industrial coolants must be used consistently during turning or milling." },
    { process: "Weldability Profile", details: "Displays exceptional weldability features, minimizing the formation of grain boundary precipitates in the weld heat-affected zone. This makes it highly suited for complex chemical processing vessels." }
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
          <p className="text-base font-medium text-gray-600 ml-7">IKT Hastelloy C22 chemistry, advanced physical parameters, and global ASTM compliance.</p>
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
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
                    <th className="px-6 py-4 text-left font-bold">Grade Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.grade}</td>
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
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloying Element</th>
                    <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.content}</td>
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
              <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
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

          {/* ASTM Supply Formats Table */}
          <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material Format</th>
                    <th className="px-6 py-4 text-left font-bold">ASTM Specs</th>
                  </tr>
                </thead>
                <tbody>
                  {astmSpecifications.map((row, index) => (
                    <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.form || row.format}</td>
                      <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.specs}</td>
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

        {/* Processing Note (Outside the columns) */}
        <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
            Hastelloy C22 structural components, including highly resilient chemical plates, seamless pipes, robust tubes, and precision fasteners, are strictly stocked across Saudi Arabia to support rapid deployment in high-stakes waste and acid processing environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}