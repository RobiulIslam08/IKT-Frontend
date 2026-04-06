/* eslint-disable no-unused-vars */
'use client';
import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const keyMaterials = [{"material":"Nuclear Pressure Vessel Steel","standard":"ASME SA-508 / SA-516"},{"material":"Nuclear-Grade Stainless Steel","standard":"ASTM A240 Type 304L/316L"},{"material":"Duplex Stainless Steel","standard":"ASTM A790 UNS S31803"},{"material":"Inconel for Nuclear","standard":"UNS N06600 / N06625"},{"material":"Shielding Steel Plate","standard":"ASTM A36 / Heavy Sections"}];
  const sectorApplications = [{"process":"Reactor Systems","details":"Nuclear reactor pressure boundary materials with full RCC-M / ASME III certification, NDE documentation, and material traceability for reactor vessel construction."},{"process":"Coolant Systems","details":"Corrosion-resistant stainless steel and nickel alloy piping systems for primary and secondary coolant circuits with nuclear-grade conformance."},{"process":"Containment & Shielding","details":"Heavy structural plates and reinforced sections for nuclear containment buildings, biological shielding walls, and radiation barriers."}];
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
          <p className="text-base font-medium text-gray-600">Certified nuclear sector steel materials, specifications, and supply formats available in KSA.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Key Materials Supplied</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead><tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200"><th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material</th><th className="px-6 py-4 text-center font-bold w-1/2">Standard</th></tr></thead>
                <tbody>{keyMaterials.map((row, index) => (<tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"><td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.material}</td><td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.standard}</td></tr>))}</tbody>
              </table>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Sector Application Profile</h3>
            </div>
            <div className="flex flex-col gap-4">
              {sectorApplications.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] w-[210px] text-center shadow-sm shrink-0">{step.process}</span>
                  <div className="flex-1"><p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2"><span className="font-bold text-gray-900">IKT Nuclear Steel Supply in KSA:</span> Full range of certified materials stocked across Saudi Arabia for immediate sector deployment and rapid project support.</p>
          <p className="text-base font-medium text-gray-600">For procurement inquiries, material certifications, or custom fabrication, contact our expert team at <span className="font-bold text-primary">+966-13-3444036</span>.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}