/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'N02201' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4068 / 2.4061' },
    { standard: 'Japan (JIS)', grade: 'NW 2201' },
    { standard: 'England (BS)', grade: 'NA 12 (BS 3072-3076)' },
    { standard: 'Europe (EN / DIN)', grade: 'LC-Ni 99 / DIN 17740, 17750-17754' },
    { standard: 'Russia (GOST)', grade: 'НП-2' },
    { standard: 'AMS Specifications', grade: 'SAE AMS 5553' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '99.00 Minimum' },
    { element: 'Iron (Fe)', content: '≤ 0.40' },
    { element: 'Copper (Cu)', content: '≤ 0.25' },
    { element: 'Manganese (Mn)', content: '≤ 0.35' },
    { element: 'Silicon (Si)', content: '≤ 0.35' },
    { element: 'Carbon (C)', content: '≤ 0.02' },
    { element: 'Sulfur (S)', content: '≤ 0.010' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Hot Finished Rod & Bar)', value: '60 - 85 ksi' },
    { property: 'Yield Strength (Hot Finished Rod & Bar)', value: '15 - 45 ksi' },
    { property: 'Tensile Strength (Annealed Sheet / Tube)', value: '55 - 75 ksi' },
    { property: 'Yield Strength (Annealed Sheet / Tube)', value: '12 - 30 ksi' },
    { property: 'Elongation at Break (Average)', value: '40 - 60 %' },
    { property: 'Hardness (Annealed Condition)', value: '70 HRB Maximum' },
    { property: 'General UTS / Yield', value: '58,500 psi (403 MPa) / 14,900 psi (103 MPa)' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.89 g/cm³ (0.321 lb/in³)' },
    { property: 'Melting Point', value: '1435 - 1446 °C (2615 - 2635 °F)' },
    { property: 'Electrical Resistivity', value: '0.00000850 ohm-cm' },
    { property: 'Thermal Conductivity', value: '79.3 W/m-K (550 BTU-in/hr-ft²-°F)' },
    { property: 'Specific Heat Capacity', value: '0.456 J/g-°C (0.109 BTU/lb-°F)' },
    { property: 'Modulus of Elasticity', value: '30,000 ksi (207 kN/mm²)' },
    { property: 'Modulus of Rigidity', value: '11,893 ksi (82 kN/mm²)' },
    { property: 'Linear CTE', value: '13.1 µm/m-°C (7.28 µin/in-°F)' },
    { property: 'Curie Temperature', value: '360 °C (680 °F)' }
  ];

  const astmSpecifications = [
    { form: 'Seamless Pipe & Tube', specs: 'ASTM B161' },
    { form: 'Welded Pipe & Tube', specs: 'ASTM B622' },
    { form: 'Sheet & Plate', specs: 'ASTM B162' },
    { form: 'Solid Rod & Bar', specs: 'ASTM B160' },
    { form: 'Industrial Fittings', specs: 'ASTM B163' }
  ];

  const processingSteps = [
    { process: "Alloy 201 vs 200 Difference", details: "Nickel 201 (0.02% max C) is the low-carbon version of Nickel 200 (0.15% max C). This strict carbon control prevents intergranular graphitization, safely extending its operational limits well above 600°F (315°C) without losing ductility." },
    { process: "Thermal Processing", details: "To achieve optimal ductility and structural restoration after heavy cold working, the material requires thorough high-temperature annealing followed by controlled cooling." },
    { process: "Fabrication Profile", details: "Its incredibly low electrical resistance and solid mechanical formability make it exceptionally suitable for drawing, spinning, and stamping into precision battery terminals and electronic components." }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600 ml-7">IKT Nickel Alloy 201 chemistry, electrical dynamics, and rigorous ASTM supply standards.</p>
        </motion.div>

        {/* Masonry Layout Container: Prevents empty white spaces below tables */}
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
              <h3 className="text-base font-bold text-gray-800">Mechanical Limitations (Room Temp)</h3>
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
              <h3 className="text-base font-bold text-gray-800">Physical & Electrical Dynamics</h3>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Application Profile
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
            <span className="font-bold text-gray-900">IKT Specialized Logistics in KSA:</span> 
            Nickel Alloy 201 structural materials, encompassing pure plates, seamless pipes, solid rods, and high-conductivity wire elements, are extensively stocked across Saudi Arabia to empower rapid deployment in high-temperature electronics and chemical processing sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}