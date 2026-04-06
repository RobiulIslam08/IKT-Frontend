/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const keyMaterials = [
    { material: 'Structural Steel Beams', standard: 'EN 10025 / ASTM A992' },
    { material: 'High-Strength Rebar', standard: 'ASTM A615 / BS 4449' },
    { material: 'Hollow Sections (RHS/SHS)', standard: 'EN 10210 / ASTM A500' },
    { material: 'Hot-Rolled Plates', standard: 'EN 10025 S275 / S355' },
    { material: 'Galvanized Sheet & Coil', standard: 'EN 10346 / ASTM A653' },
  ];

  const mechanicalData = [
    { property: 'Yield Strength (S355)', value: '355 MPa (51,500 psi)' },
    { property: 'Tensile Strength (S355)', value: '470–630 MPa' },
    { property: 'Elongation at Break', value: '≥ 22 %' },
  ];

  const certifications = [
    { standard: 'European Standard', grade: 'EN 10025, EN 10034, EN 10055' },
    { standard: 'ASTM Standards', grade: 'A36, A572, A992, A615' },
    { standard: 'BS Standards', grade: 'BS 4449, BS 4848, BS 5950' },
    { standard: 'ISO Quality', grade: 'ISO 9001:2015 Certified Supply' },
  ];

  const supplyForms = [
    { format: 'Universal Beams & Columns', specs: 'HEA, HEB, IPE, UB/UC sections in all standard sizes' },
    { format: 'Plates & Sheets', specs: 'Hot-rolled and cold-rolled plates from 1.5mm to 150mm thick' },
    { format: 'Hollow Sections', specs: 'SHS, RHS, CHS in structural and precision grades' },
    { format: 'Rebar & Wire Rod', specs: 'Deformed and plain bars for concrete reinforcement' },
  ];

  const sectorApplications = [
    { process: 'Structural Framing', details: 'High-yield steel beams and columns for multi-storey buildings, industrial frames, and mega-structure projects across Saudi Arabia and the GCC region.' },
    { process: 'Foundation Systems', details: 'Heavy-section H-piles, sheet piles, and ground anchors ensuring solid, reliable foundations for all types of construction in challenging soil conditions.' },
    { process: 'Infrastructure Works', details: 'Bridge girders, road barriers, overhead gantries, and civil engineering components fabricated from certified structural steel grades.' },
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Standards</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Certified construction-grade steel materials, specifications, and supply formats for the KSA construction sector.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Key Materials Supplied
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {keyMaterials.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.material}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Certification Standards
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard Body</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Mechanical Properties (S355)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Supply Formats Available
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <tbody>
                  {supplyForms.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Sector Application Profile
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {sectorApplications.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] w-[210px] text-center shadow-sm shrink-0">
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

        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Construction Steel Supply in KSA:</span> Full range of certified structural steel, rebar, plates, and sections extensively stocked across Saudi Arabia for immediate construction deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For procurement inquiries, material certifications, or custom fabrication requirements, contact our expert team at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
