// // // // /* eslint-disable no-unused-vars */
// // // // 'use client';

// // // // import { motion } from 'framer-motion';

// // // // export default function PropertiesTable() {

// // // //   const equivalentsData = [
// // // //     { standard: 'UNS Number', grade: 'N06601' },
// // // //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4851' },
// // // //     { standard: 'Japan (JIS)', grade: 'NCF 601' },
// // // //     { standard: 'England (BS)', grade: 'NA 49' },
// // // //     { standard: 'France (AFNOR)', grade: 'NC23FeA' },
// // // //     { standard: 'Europe (EN)', grade: 'NiCr23Fe' },
// // // //     { standard: 'Russia (GOST)', grade: 'XH60BT' }
// // // //   ];

// // // //   const chemicalData = [
// // // //     { element: 'Nickel (Ni)', content: '58.0 - 63.0' },
// // // //     { element: 'Chromium (Cr)', content: '21.0 - 25.0' },
// // // //     { element: 'Iron (Fe)', content: 'Balance (~13.0 - 14.0)' },
// // // //     { element: 'Aluminum (Al)', content: '1.0 - 1.70' },
// // // //     { element: 'Carbon (C)', content: '≤ 0.10' },
// // // //     { element: 'Manganese (Mn)', content: '≤ 1.00' },
// // // //     { element: 'Silicon (Si)', content: '≤ 0.50' },
// // // //     { element: 'Copper (Cu)', content: '≤ 1.00' },
// // // //     { element: 'Sulfur (S)', content: '≤ 0.015' }
// // // //   ];

// // // //   const mechanicalData = [
// // // //     { property: 'Ultimate Tensile Strength', value: '80,000 - 110,000 psi (550 - 760 MPa)' },
// // // //     { property: 'Yield Tensile Strength (0.2% Offset)', value: '30,000 - 65,300 psi (205 - 450 MPa)' },
// // // //     { property: 'Elongation at Break', value: '30% - 42%' }
// // // //   ];

// // // //   const physicalData = [
// // // //     { property: 'Density', value: '8.11 g/cm³ (0.293 lb/in³)' },
// // // //     { property: 'Melting Point', value: '1349 - 1411 °C (2460 - 2571 °F)' }
// // // //   ];

// // // //   const supplyFormats = [
// // // //     { format: 'Pipe & Tube', astm: 'Seamless: ASTM B167 | Welded: ASTM B517' },
// // // //     { format: 'Sheet & Plate', astm: 'ASTM B168' },
// // // //     { format: 'Rod, Bar & Wire', astm: 'ASTM B166' },
// // // //     { format: 'Fittings & Forgings', astm: 'Fitting: ASTM B366 | Forging: ASTM B564' }
// // // //   ];

// // // //   const processingSteps = [
// // // //     { process: "Hot Forming", details: "Alloy 601 can be hot formed utilizing conventional techniques. To prevent ductility loss, the operational range must be strictly maintained above 1600°F and below 2250°F." },
// // // //     { process: "Cold Forming", details: "Highly adaptable to cold forming operations. The superalloy possesses excellent mechanical stability allowing for deep drawing and complex shaping without fracturing." },
// // // //     { process: "Welding Operations", details: "Outstanding weldability across broad temperature ranges. Recommended fusion processes include shielded metal-arc welding (SMAW), TIG, and MIG methodologies." }
// // // //   ];

// // // //   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
// // // //   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// // // //   return (
// // // //     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
// // // //       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

// // // //         {/* Header */}
// // // //         <motion.div variants={itemVariants} className="mb-12">
// // // //           <div className="flex items-center gap-3 mb-4">
// // // //             <div className="w-1 h-8 bg-primary rounded-full"></div>
// // // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Fabrication Specs</h2>
// // // //           </div>
// // // //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 601 global chemistry, thermal properties, and ASTM supply standards.</p>
// // // //         </motion.div>

// // // //         {/* Equivalents and Chemistry Grid */}
// // // //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// // // //           {/* Equivalents Table */}
// // // //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// // // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // // //                <h3 className="text-base font-bold text-gray-800">Global Grade Equivalents</h3>
// // // //             </div>
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full">
// // // //                 <thead>
// // // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
// // // //                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {equivalentsData.map((row, index) => (
// // // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.standard}</td>
// // // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.grade}</td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Chemical Composition Table */}
// // // //           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// // // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // // //                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// // // //             </div>
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full">
// // // //                 <thead>
// // // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
// // // //                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {chemicalData.map((row, index) => (
// // // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.element}</td>
// // // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.content}</td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* Physical and Mechanical Properties Grid */}
// // // //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// // // //             {/* Mechanical Properties Table */}
// // // //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// // // //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // // //                  <h3 className="text-base font-bold text-gray-800">Mechanical Properties (Room Temperature)</h3>
// // // //               </div>
// // // //               <div className="overflow-x-auto">
// // // //                 <table className="w-full">
// // // //                   <thead>
// // // //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // // //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
// // // //                       <th className="px-6 py-4 text-left font-bold">Value Range</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {mechanicalData.map((row, index) => (
// // // //                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // // //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
// // // //                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </motion.div>

// // // //             {/* Physical Properties Table */}
// // // //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// // // //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // // //                  <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
// // // //               </div>
// // // //               <div className="overflow-x-auto">
// // // //                 <table className="w-full">
// // // //                   <thead>
// // // //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // // //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
// // // //                       <th className="px-6 py-4 text-left font-bold">Standard Value</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {physicalData.map((row, index) => (
// // // //                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // // //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
// // // //                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
// // // //                       </tr>
// // // //                     ))}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </motion.div>

// // // //         </div>

// // // //         {/* Fabrication Steps & ASTM Supply Format Grid */}
// // // //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// // // //           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
// // // //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// // // //             <div className="mb-6 border-b border-gray-200 pb-4">
// // // //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// // // //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Fabrication & Processing Protocol
// // // //                </h3>
// // // //             </div>

// // // //             <div className="flex flex-col gap-4">
// // // //               {processingSteps.map((step, index) => (
// // // //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
// // // //                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-40 text-center shadow-sm shrink-0">
// // // //                      {step.process}
// // // //                    </span>
// // // //                    <div className="flex-1">
// // // //                      <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// // // //                    </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* ASTM Supply Range Table */}
// // // //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// // // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // // //                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats</h3>
// // // //             </div>
// // // //             <div className="overflow-x-auto">
// // // //               <table className="w-full">
// // // //                 <tbody>
// // // //                   {supplyFormats.map((row, index) => (
// // // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium w-1/3">{row.format}</td>
// // // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.astm}</td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* Processing Note Without Button */}
// // // //         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
// // // //           <p className="text-base font-medium text-gray-700 mb-2">
// // // //             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
// // // //             Alloy 601 structural components, including plates, tubes, welded pipes, and precision bars, are stocked heavily in Saudi Arabia to support rapid industrial deployment.
// // // //           </p>
// // // //           <p className="text-base font-medium text-gray-600">
// // // //             For direct procurement inquiries, sizing details, or exact material certification, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
// // // //           </p>
// // // //         </motion.div>

// // // //       </motion.div>
// // // //     </section>
// // // //   );
// // // // }
// // // /* eslint-disable no-unused-vars */
// // // 'use client';

// // // import { motion } from 'framer-motion';

// // // export default function PropertiesTable() {

// // //   const equivalentsData = [
// // //     { standard: 'UNS Number', grade: 'N06601' },
// // //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4851' },
// // //     { standard: 'Japan (JIS)', grade: 'NCF 601' },
// // //     { standard: 'England (BS)', grade: 'NA 49' },
// // //     { standard: 'France (AFNOR)', grade: 'NC23FeA' },
// // //     { standard: 'Europe (EN)', grade: 'NiCr23Fe' },
// // //     { standard: 'Russia (GOST)', grade: 'XH60BT' }
// // //   ];

// // //   const chemicalData = [
// // //     { element: 'Nickel (Ni)', content: '58.0 - 63.0' },
// // //     { element: 'Chromium (Cr)', content: '21.0 - 25.0' },
// // //     { element: 'Iron (Fe)', content: 'Balance (~13.0 - 14.0)' },
// // //     { element: 'Aluminum (Al)', content: '1.0 - 1.70' },
// // //     { element: 'Carbon (C)', content: '≤ 0.10' },
// // //     { element: 'Manganese (Mn)', content: '≤ 1.00' },
// // //     { element: 'Silicon (Si)', content: '≤ 0.50' },
// // //     { element: 'Copper (Cu)', content: '≤ 1.00' },
// // //     { element: 'Sulfur (S)', content: '≤ 0.015' }
// // //   ];

// // //   const mechanicalData = [
// // //     { property: 'Ultimate Tensile Strength', value: '80,000 - 110,000 psi (550 - 760 MPa)' },
// // //     { property: 'Yield Tensile Strength (0.2% Offset)', value: '30,000 - 65,300 psi (205 - 450 MPa)' },
// // //     { property: 'Elongation at Break', value: '30% - 42%' }
// // //   ];

// // //   const physicalData = [
// // //     { property: 'Density', value: '8.11 g/cm³ (0.293 lb/in³)' },
// // //     { property: 'Melting Point', value: '1349 - 1411 °C (2460 - 2571 °F)' }
// // //   ];

// // //   const supplyFormats = [
// // //     { format: 'Pipe & Tube', astm: 'Seamless: ASTM B167 | Welded: ASTM B517' },
// // //     { format: 'Sheet & Plate', astm: 'ASTM B168' },
// // //     { format: 'Rod, Bar & Wire', astm: 'ASTM B166' },
// // //     { format: 'Fittings & Forgings', astm: 'Fitting: ASTM B366 | Forging: ASTM B564' }
// // //   ];

// // //   const processingSteps = [
// // //     { process: "Hot Forming", details: "Alloy 601 can be hot formed utilizing conventional techniques. To prevent ductility loss, the operational range must be strictly maintained above 1600°F and below 2250°F." },
// // //     { process: "Cold Forming", details: "Highly adaptable to cold forming operations. The superalloy possesses excellent mechanical stability allowing for deep drawing and complex shaping without fracturing." },
// // //     { process: "Welding Operations", details: "Outstanding weldability across broad temperature ranges. Recommended fusion processes include shielded metal-arc welding (SMAW), TIG, and MIG methodologies." }
// // //   ];

// // //   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
// // //   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// // //   return (
// // //     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
// // //       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

// // //         {/* Header */}
// // //         <motion.div variants={itemVariants} className="mb-12">
// // //           <div className="flex items-center gap-3 mb-4">
// // //             <div className="w-1 h-8 bg-primary rounded-full"></div>
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Fabrication Specs</h2>
// // //           </div>
// // //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 601 global chemistry, thermal properties, and ASTM supply standards.</p>
// // //         </motion.div>

// // //         {/* Masonry Layout Container */}
// // //         <div className="columns-1 lg:columns-2 gap-8">

// // //           {/* Equivalents Table */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-base font-bold text-gray-800">Global Grade Equivalents</h3>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
// // //                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {equivalentsData.map((row, index) => (
// // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
// // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.grade}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </motion.div>

// // //           {/* Chemical Composition Table */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
// // //                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {chemicalData.map((row, index) => (
// // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
// // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.content}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </motion.div>

// // //           {/* Mechanical Properties Table */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-base font-bold text-gray-800">Mechanical Properties (Room Temperature)</h3>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
// // //                     <th className="px-6 py-4 text-left font-bold">Value Range</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {mechanicalData.map((row, index) => (
// // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </motion.div>

// // //           {/* Physical Properties Table */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
// // //                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {physicalData.map((row, index) => (
// // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </motion.div>

// // //           {/* ASTM Supply Range Table */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// // //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats</h3>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// // //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material Format</th>
// // //                     <th className="px-6 py-4 text-left font-bold">ASTM Specs</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {supplyFormats.map((row, index) => (
// // //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// // //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
// // //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.astm}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </motion.div>

// // //           {/* Thermal Processing Steps */}
// // //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
// // //             <div className="mb-6 border-b border-gray-200 pb-4">
// // //               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// // //                 <span className="w-2 h-2 rounded-full bg-primary"></span> Processing Protocol
// // //               </h3>
// // //             </div>

// // //             <div className="flex flex-col gap-4">
// // //               {processingSteps.map((step, index) => (
// // //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
// // //                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
// // //                     {step.process}
// // //                   </span>
// // //                   <div className="flex-1">
// // //                     <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>

// // //         </div>

// // //         {/* Processing & Contact Note (Outside the columns) */}
// // //         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left mt-4">
// // //           <p className="text-base font-medium text-gray-700 mb-2">
// // //             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
// // //             Alloy 601 structural components, including plates, tubes, welded pipes, and precision bars, are stocked heavily in Saudi Arabia to support rapid industrial deployment.
// // //           </p>
// // //           <p className="text-base font-medium text-gray-600">
// // //             For direct procurement inquiries, sizing details, or exact material certification, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
// // //           </p>
// // //         </motion.div>

// // //       </motion.div>
// // //     </section>
// // //   );
// // // }
// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {

// //   const equivalentsData = [
// //     { standard: 'UNS Number', grade: 'N06601' },
// //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4851' },
// //     { standard: 'Japan (JIS)', grade: 'NCF 601' },
// //     { standard: 'England (BS)', grade: 'NA 49' },
// //     { standard: 'France (AFNOR)', grade: 'NC23FeA' },
// //     { standard: 'Europe (EN)', grade: 'NiCr23Fe' },
// //     { standard: 'Russia (GOST)', grade: 'XH60BT' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Nickel (Ni)', content: '58.0 - 63.0' },
// //     { element: 'Chromium (Cr)', content: '21.0 - 25.0' },
// //     { element: 'Iron (Fe)', content: 'Balance (~13.0 - 14.0)' },
// //     { element: 'Aluminum (Al)', content: '1.0 - 1.70' },
// //     { element: 'Carbon (C)', content: '≤ 0.10' },
// //     { element: 'Manganese (Mn)', content: '≤ 1.00' },
// //     { element: 'Silicon (Si)', content: '≤ 0.50' },
// //     { element: 'Copper (Cu)', content: '≤ 1.00' },
// //     { element: 'Sulfur (S)', content: '≤ 0.015' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Ultimate Tensile Strength', value: '80,000 - 110,000 psi (550 - 760 MPa)' },
// //     { property: 'Yield Tensile Strength (0.2% Offset)', value: '30,000 - 65,300 psi (205 - 450 MPa)' },
// //     { property: 'Elongation at Break', value: '30% - 42%' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density', value: '8.11 g/cm³ (0.293 lb/in³)' },
// //     { property: 'Melting Point', value: '1349 - 1411 °C (2460 - 2571 °F)' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Pipe & Tube', astm: 'Seamless: ASTM B167 | Welded: ASTM B517' },
// //     { format: 'Sheet & Plate', astm: 'ASTM B168' },
// //     { format: 'Rod, Bar & Wire', astm: 'ASTM B166' },
// //     { format: 'Fittings & Forgings', astm: 'Fitting: ASTM B366 | Forging: ASTM B564' }
// //   ];

// //   const processingSteps = [
// //     { process: "Hot Forming", details: "Alloy 601 can be hot formed utilizing conventional techniques. To prevent ductility loss, the operational range must be strictly maintained above 1600°F and below 2250°F." },
// //     { process: "Cold Forming", details: "Highly adaptable to cold forming operations. The superalloy possesses excellent mechanical stability allowing for deep drawing and complex shaping without fracturing." },
// //     { process: "Welding Operations", details: "Outstanding weldability across broad temperature ranges. Recommended fusion processes include shielded metal-arc welding (SMAW), TIG, and MIG methodologies." }
// //   ];

// //   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
// //   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

// //   return (
// //     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
// //       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

// //         {/* Header */}
// //         <motion.div variants={itemVariants} className="mb-12">
// //           <div className="flex items-center gap-3 mb-4">
// //             <div className="w-1 h-8 bg-primary rounded-full"></div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Fabrication Specs</h2>
// //           </div>
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 601 global chemistry, thermal properties, and ASTM supply standards.</p>
// //         </motion.div>

// //         {/* Masonry Layout Container */}
// //         <div className="columns-1 lg:columns-2 gap-8">

// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800 text-center">Global Grade Equivalents</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
// //                     <th className="px-6 py-4 text-center font-bold w-1/2">Grade Designation</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {equivalentsData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
// //                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Chemical Composition Table */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800 text-center">Chemical Composition (%)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Element</th>
// //                     <th className="px-6 py-4 text-center font-bold w-1/2">Content Ratio (%)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {chemicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
// //                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Mechanical Properties Table */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800 text-center">Mechanical Properties (Room Temperature)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property</th>
// //                     <th className="px-6 py-4 text-center font-bold w-1/2">Value Range</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {mechanicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
// //                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Physical Properties Table */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800 text-center">Physical & Thermal Dynamics</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Metric</th>
// //                     <th className="px-6 py-4 text-center font-bold w-1/2">Standard Value</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {physicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
// //                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* ASTM Supply Range Table */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800 text-center">ASTM Supply Formats</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
// //                     <th className="px-6 py-4 text-center font-bold w-1/2">ASTM Specs</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {supplyFormats.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.format}</td>
// //                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.astm}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Thermal Processing Steps */}
// //           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-primary"></span> Processing Protocol
// //               </h3>
// //             </div>

// //             <div className="flex flex-col gap-4">
// //               {processingSteps.map((step, index) => (
// //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col items-center gap-3 text-center">
// //                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md shadow-sm">
// //                     {step.process}
// //                   </span>
// //                   <div className="flex-1">
// //                     <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Processing & Contact Note (Outside the columns) */}
// //         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center mt-4">
// //           <p className="text-base font-medium text-gray-700 mb-2">
// //             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
// //             Alloy 601 structural components, including plates, tubes, welded pipes, and precision bars, are stocked heavily in Saudi Arabia to support rapid industrial deployment.
// //           </p>
// //           <p className="text-base font-medium text-gray-600">
// //             For direct procurement inquiries, sizing details, or exact material certification, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
// //           </p>
// //         </motion.div>

// //       </motion.div>
// //     </section>
// //   );
// // }

// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {

//   const equivalentsData = [
//     { standard: 'UNS Number', grade: 'N06601' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4851' },
//     { standard: 'Japan (JIS)', grade: 'NCF 601' },
//     { standard: 'England (BS)', grade: 'NA 49' },
//     { standard: 'France (AFNOR)', grade: 'NC23FeA' },
//     { standard: 'Europe (EN)', grade: 'NiCr23Fe' },
//     { standard: 'Russia (GOST)', grade: 'XH60BT' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '58.0 - 63.0' },
//     { element: 'Chromium (Cr)', content: '21.0 - 25.0' },
//     { element: 'Iron (Fe)', content: 'Balance (~13.0 - 14.0)' },
//     { element: 'Aluminum (Al)', content: '1.0 - 1.70' },
//     { element: 'Carbon (C)', content: '≤ 0.10' },
//     { element: 'Manganese (Mn)', content: '≤ 1.00' },
//     { element: 'Silicon (Si)', content: '≤ 0.50' },
//     { element: 'Copper (Cu)', content: '≤ 1.00' },
//     { element: 'Sulfur (S)', content: '≤ 0.015' }
//   ];

//   const mechanicalData = [
//     { property: 'Ultimate Tensile Strength', value: '80,000 - 110,000 psi (550 - 760 MPa)' },
//     { property: 'Yield Tensile Strength (0.2% Offset)', value: '30,000 - 65,300 psi (205 - 450 MPa)' },
//     { property: 'Elongation at Break', value: '30% - 42%' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.11 g/cm³ (0.293 lb/in³)' },
//     { property: 'Melting Point', value: '1349 - 1411 °C (2460 - 2571 °F)' }
//   ];

//   const supplyFormats = [
//     { format: 'Pipe & Tube', astm: 'Seamless: ASTM B167 | Welded: ASTM B517' },
//     { format: 'Sheet & Plate', astm: 'ASTM B168' },
//     { format: 'Rod, Bar & Wire', astm: 'ASTM B166' },
//     { format: 'Fittings & Forgings', astm: 'Fitting: ASTM B366 | Forging: ASTM B564' }
//   ];

//   const processingSteps = [
//     { process: "Hot Forming", details: "Alloy 601 can be hot formed utilizing conventional techniques. To prevent ductility loss, the operational range must be strictly maintained above 1600°F and below 2250°F." },
//     { process: "Cold Forming", details: "Highly adaptable to cold forming operations. The superalloy possesses excellent mechanical stability allowing for deep drawing and complex shaping without fracturing." },
//     { process: "Welding Operations", details: "Outstanding weldability across broad temperature ranges. Recommended fusion processes include shielded metal-arc welding (SMAW), TIG, and MIG methodologies." }
//   ];

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

//         {/* Main Header (Centered) */}
//         <motion.div variants={itemVariants} className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600">IKT Alloy 601 global chemistry, thermal properties, and ASTM supply standards.</p>
//         </motion.div>

//         {/* Full-Width Horizontal Layout */}
//         <div className="grid grid-cols-1 gap-8">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Global Grade Designations
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Grade Specification</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* ASTM Supply Formats Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> ASTM Supply Formats (KSA)
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">ASTM Specs</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.format}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.astm}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Chemical Composition (%)
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Content Ratio (%)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Mechanical Properties Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Mechanical Limitations (Room Temp)
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property Metric</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Tested Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mechanicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Physical Properties Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Physical Dynamics
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Metric</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Standard Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {physicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Engineering Protocol Steps */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Machining & Application Profile
//               </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] w-[210px] text-center shadow-sm shrink-0">
//                     {step.process}
//                   </span>
//                   <div className="flex-1">
//                     <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>
//       </motion.div>
//     </section>
//   );
// }

/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const equivalentsData = [
    { standard: 'UNS Number', grade: 'N06601' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4851' },
    { standard: 'Japan (JIS)', grade: 'NCF 601' },
    { standard: 'England (BS)', grade: 'NA 49' },
    { standard: 'France (AFNOR)', grade: 'NC23FeA' },
    { standard: 'Europe (EN)', grade: 'NiCr23Fe' },
    { standard: 'Russia (GOST)', grade: 'XH60BT' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '58.0 - 63.0' },
    { element: 'Chromium (Cr)', content: '21.0 - 25.0' },
    { element: 'Iron (Fe)', content: 'Balance (~13.0 - 14.0)' },
    { element: 'Aluminum (Al)', content: '1.0 - 1.70' },
    { element: 'Carbon (C)', content: '≤ 0.10' },
    { element: 'Manganese (Mn)', content: '≤ 1.00' },
    { element: 'Silicon (Si)', content: '≤ 0.50' },
    { element: 'Copper (Cu)', content: '≤ 1.00' },
    { element: 'Sulfur (S)', content: '≤ 0.015' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '80,000 - 110,000 psi (550 - 760 MPa)' },
    { property: 'Yield Tensile Strength (0.2% Offset)', value: '30,000 - 65,300 psi (205 - 450 MPa)' },
    { property: 'Elongation at Break', value: '30% - 42%' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.11 g/cm³ (0.293 lb/in³)' },
    { property: 'Melting Point', value: '1349 - 1411 °C (2460 - 2571 °F)' }
  ];

  const supplyFormats = [
    { format: 'Pipe & Tube', astm: 'Seamless: ASTM B167 | Welded: ASTM B517' },
    { format: 'Sheet & Plate', astm: 'ASTM B168' },
    { format: 'Rod, Bar & Wire', astm: 'ASTM B166' },
    { format: 'Fittings & Forgings', astm: 'Fitting: ASTM B366 | Forging: ASTM B564' }
  ];

  const processingSteps = [
    { process: "Hot Forming", details: "Alloy 601 can be hot formed utilizing conventional techniques. To prevent ductility loss, the operational range must be strictly maintained above 1600°F and below 2250°F." },
    { process: "Cold Forming", details: "Highly adaptable to cold forming operations. The superalloy possesses excellent mechanical stability allowing for deep drawing and complex shaping without fracturing." },
    { process: "Welding Operations", details: "Outstanding weldability across broad temperature ranges. Recommended fusion processes include shielded metal-arc welding (SMAW), TIG, and MIG methodologies." }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Main Header (Centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Alloy 601 global chemistry, thermal properties, and ASTM supply standards.</p>
        </motion.div>

        {/* Full-Width Horizontal Layout */}
        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Global Grade Designations
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Grade Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* ASTM Supply Formats Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> ASTM Supply Formats (KSA)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">ASTM Specs</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.format}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.astm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Mechanical Limitations (Room Temp)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property Metric</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Tested Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Physical Properties Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Physical Dynamics
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Metric</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard Value</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Engineering Protocol Steps */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Machining & Application Profile
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {processingSteps.map((step, index) => (
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
      </motion.div>
    </section>
  );
}