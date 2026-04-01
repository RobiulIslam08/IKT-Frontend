/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const equivalentsData = [
    { standard: 'UNS Designation', grade: 'C70600 / C70610' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.0872' },
    { standard: 'Europe (EN)', grade: 'CW352H' },
    { standard: 'British (BS)', grade: 'CN102' }
  ];

  const chemicalData = [
    { element: 'Copper (Cu)', content: 'Balance (88.6 Nominal)' },
    { element: 'Nickel (Ni)', content: '9.0 - 11.0' },
    { element: 'Iron (Fe)', content: '1.0 - 1.8' },
    { element: 'Manganese (Mn)', content: '≤ 1.0' },
    { element: 'Zinc (Zn)', content: '≤ 1.0' },
    { element: 'Lead (Pb)', content: '≤ 0.05' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '303 - 414 MPa (43.9 - 60 ksi)' },
    { property: 'Yield Strength (0.2% Offset)', value: '110 - 393 MPa (16 - 57 ksi)' },
    { property: 'Elongation at Break', value: '42.0 %' },
    { property: 'Modulus of Elasticity', value: '140 GPa (20,300 ksi)' },
    { property: 'Shear Modulus', value: '52.0 GPa (7,540 ksi)' },
    { property: 'Machinability Rating', value: '20 %' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.94 g/cc (0.323 lb/in³)' },
    { property: 'Thermal Conductivity', value: '40.0 W/m-K (278 BTU-in/hr-ft²-°F)' },
    { property: 'Specific Heat Capacity', value: '0.380 J/g-°C (0.0908 BTU/lb-°F)' },
    { property: 'Electrical Resistivity', value: '0.0000190 ohm-cm' },
    { property: 'Poisson’s Ratio', value: '0.31' },
    { property: 'Linear CTE', value: '17.1 µm/m-°C (9.50 µin/in-°F)' }
  ];

  const fabricationSuitability = [
    { method: 'Soldering & Brazing', rating: 'Excellent' },
    { method: 'Gas Shielded Arc Welding', rating: 'Excellent' },
    { method: 'Butt Welding', rating: 'Excellent' },
    { method: 'Coated Metal Arc Welding', rating: 'Good' },
    { method: 'Cold Working & Hot Forming', rating: 'Good' },
    { method: 'Oxyacetylene Welding', rating: 'Fair' }
  ];

  const seawaterCorrosion = [
    { condition: 'Clean Seawater (up to 3.5 m/sec)', result: 'Satisfactory (High resistance)' },
    { condition: 'Corrosion Plus Stress', result: 'Very Resistant (No cracking)' },
    { condition: 'Local Overheating Spots', result: 'Good resistance to Denickelification' },
    { condition: 'Vapour Side (Feedwater Heaters)', result: 'Resistant to Exfoliation Attack' }
  ];

  const supplyFormats = [
    { form: 'Seamless Pipe & Tube', specs: 'ASME SB466 / ASTM B466 / SB111' },
    { form: 'Welded Pipe & Tube', specs: 'ASME SB467 / ASTM B608' },
    { form: 'Sheets, Plates & Strips', specs: 'ASTM B122 / SB171 / MIL-C-15726' },
    { form: 'Solid Rods & Bars', specs: 'ASTM B151 / MIL-C-15726' },
    { form: 'Forgings & Fittings', specs: 'Custom Bespoke Machined' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Seawater Service Profile</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Cupro Nickel 90/10 (C70600) chemical matrix, fabrication suitability, and corrosion resistance benchmarks.</p>
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

          {/* 4. Fabrication Properties */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Fabrication & Joining Suitability</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Process Method</th>
                    <th className="px-6 py-4 font-bold w-1/2">Suitability Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {fabricationSuitability.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.method}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 5. Seawater Corrosion Performance */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Seawater Corrosion Service Experience</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Environmental Condition</th>
                    <th className="px-6 py-4 font-bold w-1/2">Service Experience (90/10)</th>
                  </tr>
                </thead>
                <tbody>
                  {seawaterCorrosion.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.condition}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 6. Industrial Form Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">ASME & ASTM Specifications</th>
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
            <span className="font-bold text-gray-900">IKT Specialized Marine Logistics in KSA:</span>
            Cupro Nickel 90/10 structural components, including high-pressure condenser tubes, saltwater seamless pipes, and bespoke forged marine fittings, are heavily stocked across Saudi Arabia to empower rapid deployment in desalination and offshore petrochemical frameworks.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}