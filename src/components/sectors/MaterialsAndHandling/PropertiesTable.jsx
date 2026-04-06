/* eslint-disable no-unused-vars */
'use client';
import { motion } from 'framer-motion';

export default function PropertiesTable() {
  const keyMaterials = [{"material":"Hardox Wear Plate","standard":"Hardox 400 / 450 / 500 / 600"},{"material":"High-Strength Structural Steel","standard":"EN 10025 S460 / S690 QL"},{"material":"Crane Boom Steel","standard":"EN 10210 S355 / S420 / S460"},{"material":"Stainless Steel Sheet/Plate","standard":"ASTM A240 304 / 316L"},{"material":"Floor / Grid Grating","standard":"EN 10025 / Hot-Dip Galvanized"}];
  const sectorApplications = [{"process":"Conveyor Systems","details":"Wear-resistant Hardox liners, structural walkways, and belt conveyor frames engineered for heavy industrial conveying in mining, cement, and port operations."},{"process":"Crane Structures","details":"High-strength girder and boom steel for overhead, jib, mobile, and harbour cranes certified to FEM, DIN, and EN crane design standards."},{"process":"Bulk Storage","details":"Abrasion-resistant and structural steel for hoppers, silos, stockpile reclaim systems, and surge bins in bulk handling terminals and industrial plants."}];
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
          <p className="text-base font-medium text-gray-600">Certified materials and handling sector steel materials, specifications, and supply formats available in KSA.</p>
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
          <p className="text-base font-medium text-gray-700 mb-2"><span className="font-bold text-gray-900">IKT Materials And Handling Steel Supply in KSA:</span> Full range of certified materials stocked across Saudi Arabia for immediate sector deployment and rapid project support.</p>
          <p className="text-base font-medium text-gray-600">For procurement inquiries, material certifications, or custom fabrication, contact our expert team at <span className="font-bold text-primary">+966-13-3444036</span>.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}