// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {
  
// //   const equivalentsData = [
// //     { standard: 'UNS Number', grade: 'N07718' },
// //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4668' },
// //     { standard: 'Japan (JIS)', grade: 'NCF 718' },
// //     { standard: 'Industry Compliance', grade: 'NACE MR-01-75' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Nickel (Ni)', content: '50.00 - 55.00' },
// //     { element: 'Chromium (Cr)', content: '17.00 - 21.00' },
// //     { element: 'Columbium (Nb) + Ta', content: '4.75 - 5.50' },
// //     { element: 'Molybdenum (Mo)', content: '2.80 - 3.30' },
// //     { element: 'Titanium (Ti)', content: '0.65 - 1.15' },
// //     { element: 'Aluminum (Al)', content: '0.20 - 0.80' },
// //     { element: 'Cobalt (Co)', content: '≤ 1.00' },
// //     { element: 'Carbon (C)', content: '≤ 0.08' },
// //     { element: 'Manganese (Mn)', content: '≤ 0.35' },
// //     { element: 'Silicon (Si)', content: '≤ 0.35' },
// //     { element: 'Phosphorus (P) / Sulfur (S)', content: '≤ 0.015' },
// //     { element: 'Copper (Cu)', content: '≤ 0.30' },
// //     { element: 'Iron (Fe)', content: 'Remainder' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Ultimate Tensile Strength', value: '135,000 psi' },
// //     { property: 'Yield Strength (0.2% Offset)', value: '70,000 psi' },
// //     { property: 'Elongation in 2"', value: '45 %' },
// //     { property: 'Rockwell Hardness (Annealed)', value: '100 HRB' },
// //     { property: 'Post-Aging Target Hardness', value: '32 HRC (Min) - 40 HRC (Max)' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density (Solution Treated)', value: '8.192 g/cm³ (0.296 lb/in³)' },
// //     { property: 'Density (Solution Treated & Aged)', value: '8.22 g/cm³ (0.297 lb/in³)' },
// //     { property: 'Melting Range', value: '1370 - 1430 °C (2500 - 2600 °F)' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Sheet & Plate', astm: 'ASTM B670' },
// //     { format: 'Rod & Bar', astm: 'ASTM B637' },
// //     { format: 'Wire & Forgings', astm: 'Available upon technical request' }
// //   ];

// //   const processingSteps = [
// //     { process: "Annealing Operations", details: "For typical room temperature properties and optimal formability, the material is heavily annealed at 1800°F. This stabilizes the complex microstructure prior to machining." },
// //     { process: "Precipitation Hardening", details: "Alloy 718 requires specific aging treatments to precipitate strengthening phases. Upon proper treatment, the structural hardness scales up dramatically to a maximum of 40 RC." },
// //     { process: "Weldability", details: "Displays exceptional weldability compared to many other nickel-based superalloys, highly resisting post-weld cracking and maintaining high joint strength." }
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
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 718 global chemistry, physical properties, and ASTM supply standards.</p>
// //         </motion.div>

// //         {/* Equivalents and Chemistry Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Global Grade Equivalents</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
// //                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {equivalentsData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.standard}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.grade}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Chemical Composition Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
// //                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {chemicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.element}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.content}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Physical and Mechanical Properties Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
// //             {/* Mechanical Properties Table */}
// //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                  <h3 className="text-base font-bold text-gray-800">Mechanical Capabilities (Annealed)</h3>
// //               </div>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
// //                       <th className="px-6 py-4 text-left font-bold">Standard Value</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {mechanicalData.map((row, index) => (
// //                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
// //                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </motion.div>

// //             {/* Physical Properties Table */}
// //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                  <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
// //               </div>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
// //                       <th className="px-6 py-4 text-left font-bold">Standard Value</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {physicalData.map((row, index) => (
// //                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
// //                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </motion.div>

// //         </div>

// //         {/* Fabrication Steps & ASTM Supply Format Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// //           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
// //                </h3>
// //             </div>

// //             <div className="flex flex-col gap-4">
// //               {processingSteps.map((step, index) => (
// //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
// //                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
// //                      {step.process}
// //                    </span>
// //                    <div className="flex-1">
// //                      <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// //                    </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
          
// //           {/* ASTM Supply Range Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <tbody>
// //                   {supplyFormats.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium w-1/3">{row.format}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.astm}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Processing Note Without Button */}
// //         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
// //           <p className="text-base font-medium text-gray-700 mb-2">
// //             <span className="font-bold text-gray-900">IKT High-Performance Logistics in KSA:</span> 
// //             Alloy 718 structural components, including thick plates, round bars, and robust sheets, are firmly stocked in Saudi Arabia to guarantee swift industrial delivery.
// //           </p>
// //           <p className="text-base font-medium text-gray-600">
// //             For critical procurement inquiries, advanced structural details, or precise material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
//     { standard: 'UNS Number', grade: 'N07718' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4668' },
//     { standard: 'Japan (JIS)', grade: 'NCF 718' },
//     { standard: 'Industry Compliance', grade: 'NACE MR-01-75' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '50.00 - 55.00' },
//     { element: 'Chromium (Cr)', content: '17.00 - 21.00' },
//     { element: 'Columbium (Nb) + Ta', content: '4.75 - 5.50' },
//     { element: 'Molybdenum (Mo)', content: '2.80 - 3.30' },
//     { element: 'Titanium (Ti)', content: '0.65 - 1.15' },
//     { element: 'Aluminum (Al)', content: '0.20 - 0.80' },
//     { element: 'Cobalt (Co)', content: '≤ 1.00' },
//     { element: 'Carbon (C)', content: '≤ 0.08' },
//     { element: 'Manganese (Mn)', content: '≤ 0.35' },
//     { element: 'Silicon (Si)', content: '≤ 0.35' },
//     { element: 'Phosphorus (P) / Sulfur (S)', content: '≤ 0.015' },
//     { element: 'Copper (Cu)', content: '≤ 0.30' },
//     { element: 'Iron (Fe)', content: 'Remainder' }
//   ];

//   const mechanicalData = [
//     { property: 'Ultimate Tensile Strength', value: '135,000 psi' },
//     { property: 'Yield Strength (0.2% Offset)', value: '70,000 psi' },
//     { property: 'Elongation in 2"', value: '45 %' },
//     { property: 'Rockwell Hardness (Annealed)', value: '100 HRB' },
//     { property: 'Post-Aging Target Hardness', value: '32 HRC (Min) - 40 HRC (Max)' }
//   ];

//   const physicalData = [
//     { property: 'Density (Solution Treated)', value: '8.192 g/cm³ (0.296 lb/in³)' },
//     { property: 'Density (Solution Treated & Aged)', value: '8.22 g/cm³ (0.297 lb/in³)' },
//     { property: 'Melting Range', value: '1370 - 1430 °C (2500 - 2600 °F)' }
//   ];

//   const supplyFormats = [
//     { format: 'Sheet & Plate', astm: 'ASTM B670' },
//     { format: 'Rod & Bar', astm: 'ASTM B637' },
//     { format: 'Wire & Forgings', astm: 'Available upon technical request' }
//   ];

//   const processingSteps = [
//     { process: "Annealing Operations", details: "For typical room temperature properties and optimal formability, the material is heavily annealed at 1800°F. This stabilizes the complex microstructure prior to machining." },
//     { process: "Precipitation Hardening", details: "Alloy 718 requires specific aging treatments to precipitate strengthening phases. Upon proper treatment, the structural hardness scales up dramatically to a maximum of 40 RC." },
//     { process: "Weldability", details: "Displays exceptional weldability compared to many other nickel-based superalloys, highly resisting post-weld cracking and maintaining high joint strength." }
//   ];

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Fabrication Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 718 global chemistry, physical properties, and ASTM supply standards.</p>
//         </motion.div>

//         {/* Masonry Layout Container: This solves the empty space issue perfectly */}
//         <div className="columns-1 lg:columns-2 gap-8">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Global Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
//                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.content}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Mechanical Properties Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Mechanical Capabilities (Annealed)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
//                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mechanicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Physical Properties Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
//                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {physicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* ASTM Supply Range Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material Format</th>
//                     <th className="px-6 py-4 text-left font-bold">ASTM Specs</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.astm}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Thermal Processing Steps */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
//                </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
//                      {step.process}
//                    </span>
//                    <div className="flex-1">
//                      <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                    </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>

//         {/* Processing Note Without Button */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left mt-4">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT High-Performance Logistics in KSA:</span> 
//             Alloy 718 structural components, including thick plates, round bars, and robust sheets, are firmly stocked in Saudi Arabia to guarantee swift industrial delivery.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement inquiries, advanced structural details, or precise material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
//           </p>
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const equivalentsData = [
    { standard: 'UNS Number', grade: 'N07718' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4668' },
    { standard: 'Japan (JIS)', grade: 'NCF 718' },
    { standard: 'Industry Standard', grade: 'Alloy 718' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '50.00 - 55.00' },
    { element: 'Chromium (Cr)', content: '17.00 - 21.00' },
    { element: 'Columbium (Nb) + Tantalum (Ta)', content: '4.75 - 5.50' },
    { element: 'Molybdenum (Mo)', content: '2.80 - 3.30' },
    { element: 'Iron (Fe)', content: 'Remainder' },
    { element: 'Titanium (Ti)', content: '0.65 - 1.15' },
    { element: 'Aluminum (Al)', content: '0.20 - 0.80' },
    { element: 'Cobalt (Co)', content: '≤ 1.00' },
    { element: 'Copper (Cu)', content: '≤ 0.30' },
    { element: 'Manganese (Mn)', content: '≤ 0.35' },
    { element: 'Silicon (Si)', content: '≤ 0.35' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Phosphorus (P) / Sulfur (S)', content: '≤ 0.015' },
    { element: 'Boron (B)', content: '≤ 0.006' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '135,000 psi (Typical)' },
    { property: 'Yield Strength (0.2% Offset)', value: '70,000 psi (Typical)' },
    { property: 'Elongation', value: '45 %' },
    { property: 'Hardness (Solution Treated)', value: '100 Rockwell B' },
    { property: 'Hardness Range (Aged)', value: '32 HRC (Min) - 40 HRC (Max)' }
  ];

  const physicalData = [
    { property: 'Density (Solution Treated)', value: '8.192 g/cm³ (0.296 lb/in³)' },
    { property: 'Density (Solution Treated & Aged)', value: '8.22 g/cm³ (0.297 lb/in³)' },
    { property: 'Specific Gravity (Solution Treated)', value: '8.19' },
    { property: 'Specific Gravity (Aged)', value: '8.22' },
    { property: 'Melting Range', value: '1370 - 1430 °C (2500 - 2600 °F)' }
  ];

  const supplyFormats = [
    { format: 'Sheet & Plate', astm: 'ASTM B670' },
    { format: 'Bar', astm: 'ASTM B637' },
    { format: 'General Compliance', astm: 'ASTM B906' },
    { format: 'NACE Certification', astm: 'NACE MR-01-75' }
  ];

  const processingSteps = [
    { process: "High-Temp Fasteners", details: "Alloy 718 is in huge demand for extreme-environment fastening systems. It is extensively utilized in gas turbine engine parts and high-speed airframe components like spacers, buckets, and wheels due to its incredible strength." },
    { process: "Oil & Gas Applications", details: "Highly reliable for well head completion equipment and blow out preventers (BOP’s). Its specific microstructure provides immense durability in sub-surface processing." },
    { process: "Aerospace & Nuclear", details: "Engineered to withstand intense thermal stress, making it a primary material for liquid fuel rocket motor components, cryogenic storage tanks, and nuclear reactor infrastructure." }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Inconel 718 (UNS N07718) chemistry, mechanical metrics, and international supply standards.</p>
        </motion.div>

        {/* Full-Width Horizontal Layout */}
        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Global Grade Equivalents
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Physical & Thermal Dynamics
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Industry Applications Profile
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