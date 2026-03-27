// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {

// //   const specificationsData = [
// //     { standard: 'UNS Designation', grade: 'N08330' },
// //     { standard: 'SAE/AMS Standards', grade: 'AMS 5592, AMS 5716, J405, J412' },
// //     { standard: 'ASTM Standards', grade: 'B511, B512, B535, B536, B546, B710' },
// //     { standard: 'ASME Standards', grade: 'SB-511, SB-536, SB-710' },
// //     { standard: 'ASME Boiler Code', grade: 'Sections I, VIII, IX' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Iron (Fe)', content: '42.00 - 43.00 (Balance)' },
// //     { element: 'Nickel (Ni)', content: '34.00 - 37.00' },
// //     { element: 'Chromium (Cr)', content: '17.00 - 20.00' },
// //     { element: 'Silicon (Si)', content: '1.13 Typical' },
// //     { element: 'Manganese (Mn)', content: '≤ 2.00' },
// //     { element: 'Carbon (C)', content: '≤ 0.080' },
// //     { element: 'Phosphorus (P)', content: '≤ 0.040' },
// //     { element: 'Sulfur (S)', content: '≤ 0.030' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Tensile Strength (Annealed)', value: '87,000 psi (600 MPa)' },
// //     { property: 'Yield Strength (Annealed)', value: '40,600 psi (280 MPa)' },
// //     { property: 'Elongation at Break', value: '45 %' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density', value: '8.08 g/cm³ (0.292 lb/in³)' },
// //     { property: 'Melting Range', value: '1345 - 1425 °C (2453 - 2597 °F)' },
// //     { property: 'Magnetic Permeability', value: '1.02 (Virtually Non-Magnetic)' },
// //     { property: 'Thermal Conductivity', value: '12.4 W/m-K (86.1 BTU-in/hr-ft²-°F)' },
// //     { property: 'Specific Heat Capacity', value: '0.460 J/g-°C (0.110 BTU/lb-°F)' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Pipe & Tube Systems', specs: 'Available as seamless and welded configurations for hot gas flow.' },
// //     { format: 'Structural Forms', specs: 'Bar, Wire, Sheet, and Heavy Plates available for custom fabrication.' },
// //     { format: 'Engineered Hardware', specs: 'Custom Forgings, Flanges, Pipe Fittings, and high-heat Fasteners.' }
// //   ];

// //   // All text elements here are enforced to text-base to ensure strict visual uniformity
// //   const processingSteps = [
// //     { process: "Thermal Endurance", details: "Alloy 330 is fundamentally engineered to resist horrific heat degradation. The deliberate silicon addition acts as a powerful barrier against extreme oxidation, preserving structural integrity up to remarkably high limits." },
// //     { process: "Carburization Immunity", details: "Displays exceptional resilience in environments thick with carbon absorption, completely resisting carburization which typically induces fatal brittleness in lesser alloys during petrochemical processing." },
// //     { process: "Nitridation Defense", details: "Provides formidable resistance against nitrogen absorption (nitridation) at elevated temperatures, extending the operational life of thermal retorts and heavy-duty industrial heat-treating baskets." }
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
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
// //           </div>
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 330 superalloy chemistry, high-heat properties, and global supply compliance.</p>
// //         </motion.div>

// //         {/* Equivalents and Chemistry Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800">Global Specification Standards</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard Body</th>
// //                     <th className="px-6 py-4 text-left font-bold">Approved Designation</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {specificationsData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.grade}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Chemical Composition Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full min-w-[500px]">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloying Element</th>
// //                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {chemicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.content}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Physical and Mechanical Properties Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// //           {/* Mechanical Properties Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800">Mechanical Limitations (Annealed)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
// //                     <th className="px-6 py-4 text-left font-bold">Tested Value</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {mechanicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //           {/* Physical Properties Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
// //                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {physicalData.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Fabrication Steps & Industry Supply Format Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8">

// //           {/* Processing Protocol Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Resilience Profile
// //               </h3>
// //             </div>

// //             <div className="flex flex-col gap-4">
// //               {processingSteps.map((step, index) => (
// //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
// //                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-60 text-center shadow-sm shrink-0">
// //                     {step.process}
// //                   </span>
// //                   <div className="flex-1">
// //                     <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>

// //           {/* Supply Formats Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-base font-bold text-gray-800">Industrial Form Availability</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <tbody>
// //                   {supplyFormats.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.specs}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Processing Note (Button Successfully Removed) */}
// //         <motion.div variants={itemVariants} className="mt-12 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
// //           <p className="text-base font-medium text-gray-700 mb-2">
// //             <span className="font-bold text-gray-900">IKT Heavy Logistics in KSA:</span>
// //             Alloy 330 structural materials, encompassing massive plates, high-heat tubing, seamless pipes, and bespoke thermal fasteners, are extensively stocked in Saudi Arabia to empower rapid industrial heating deployments.
// //           </p>
// //           <p className="text-base font-medium text-gray-600">
// //             For critical supply inquiries, detailed ASTM conformance data, or custom machining requirements, please engage our expert engineering staff in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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

//   const specificationsData = [
//     { standard: 'UNS Designation', grade: 'N08330' },
//     { standard: 'SAE/AMS Standards', grade: 'AMS 5592, AMS 5716, J405, J412' },
//     { standard: 'ASTM Standards', grade: 'B511, B512, B535, B536, B546, B710' },
//     { standard: 'ASME Standards', grade: 'SB-511, SB-536, SB-710' },
//     { standard: 'ASME Boiler Code', grade: 'Sections I, VIII, IX' }
//   ];

//   const chemicalData = [
//     { element: 'Iron (Fe)', content: '42.00 - 43.00 (Balance)' },
//     { element: 'Nickel (Ni)', content: '34.00 - 37.00' },
//     { element: 'Chromium (Cr)', content: '17.00 - 20.00' },
//     { element: 'Silicon (Si)', content: '1.13 Typical' },
//     { element: 'Manganese (Mn)', content: '≤ 2.00' },
//     { element: 'Carbon (C)', content: '≤ 0.080' },
//     { element: 'Phosphorus (P)', content: '≤ 0.040' },
//     { element: 'Sulfur (S)', content: '≤ 0.030' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Annealed)', value: '87,000 psi (600 MPa)' },
//     { property: 'Yield Strength (Annealed)', value: '40,600 psi (280 MPa)' },
//     { property: 'Elongation at Break', value: '45 %' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.08 g/cm³ (0.292 lb/in³)' },
//     { property: 'Melting Range', value: '1345 - 1425 °C (2453 - 2597 °F)' },
//     { property: 'Magnetic Permeability', value: '1.02 (Virtually Non-Magnetic)' },
//     { property: 'Thermal Conductivity', value: '12.4 W/m-K (86.1 BTU-in/hr-ft²-°F)' },
//     { property: 'Specific Heat Capacity', value: '0.460 J/g-°C (0.110 BTU/lb-°F)' }
//   ];

//   const supplyFormats = [
//     { format: 'Pipe & Tube Systems', specs: 'Available as seamless and welded configurations for hot gas flow.' },
//     { format: 'Structural Forms', specs: 'Bar, Wire, Sheet, and Heavy Plates available for custom fabrication.' },
//     { format: 'Engineered Hardware', specs: 'Custom Forgings, Flanges, Pipe Fittings, and high-heat Fasteners.' }
//   ];

//   // All text elements here are enforced to text-base to ensure strict visual uniformity
//   const processingSteps = [
//     { process: "Thermal Endurance", details: "Alloy 330 is fundamentally engineered to resist horrific heat degradation. The deliberate silicon addition acts as a powerful barrier against extreme oxidation, preserving structural integrity up to remarkably high limits." },
//     { process: "Carburization Immunity", details: "Displays exceptional resilience in environments thick with carbon absorption, completely resisting carburization which typically induces fatal brittleness in lesser alloys during petrochemical processing." },
//     { process: "Nitridation Defense", details: "Provides formidable resistance against nitrogen absorption (nitridation) at elevated temperatures, extending the operational life of thermal retorts and heavy-duty industrial heat-treating baskets." }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 330 superalloy chemistry, high-heat properties, and global supply compliance.</p>
//         </motion.div>

//         {/* Masonry Layout Container: This perfectly prevents any ugly white spaces */}
//         <div className="columns-1 lg:columns-2 gap-8">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Global Specification Standards</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard Body</th>
//                     <th className="px-6 py-4 text-left font-bold">Approved Designation</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {specificationsData.map((row, index) => (
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
//               <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloying Element</th>
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
//               <h3 className="text-base font-bold text-gray-800">Mechanical Limitations (Annealed)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
//                     <th className="px-6 py-4 text-left font-bold">Tested Value</th>
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
//               <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
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

//           {/* Industry Supply Formats Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Industrial Form Availability</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <tbody>
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.specs}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Thermal Processing Steps */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Resilience Profile
//               </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-60 text-center shadow-sm shrink-0">
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

//         {/* Processing Note (Outside the masonry columns) */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Heavy Logistics in KSA:</span> 
//             Alloy 330 structural materials, encompassing massive plates, high-heat tubing, seamless pipes, and bespoke thermal fasteners, are extensively stocked in Saudi Arabia to empower rapid industrial heating deployments.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical supply inquiries, detailed ASTM conformance data, or custom machining requirements, please engage our expert engineering staff in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'UNS Number', grade: 'N08330' },
    { standard: 'SAE Specifications', grade: 'AMS 5592, AMS 5716, J405, J412' },
    { standard: 'Common Name', grade: 'RA330® / Nicrofer 3718' }
  ];

  const chemicalData = [
    { element: 'Iron (Fe)', content: '42.0 - 43.0' },
    { element: 'Nickel (Ni)', content: '34.00 - 37.00' },
    { element: 'Chromium (Cr)', content: '17.00 - 20.00' },
    { element: 'Manganese (Mn)', content: '≤ 2.00' },
    { element: 'Silicon (Si)', content: '1.13' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Phosphorus (P)', content: '≤ 0.04' },
    { element: 'Sulfur (S)', content: '≤ 0.03' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Annealed)', value: '87,000 psi (600 MPa)' },
    { property: 'Yield Strength (Annealed)', value: '40,600 psi (280 MPa)' },
    { property: 'Elongation at Break', value: '45 %' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.08 g/cm³ (0.292 lb/in³)' },
    { property: 'Melting Range', value: '1345 - 1425 °C (2453 - 2597 °F)' },
    { property: 'Specific Heat Capacity', value: '0.460 J/g-°C (0.110 BTU/lb-°F)' },
    { property: 'Thermal Conductivity', value: '12.4 W/m-K (86.1 BTU-in/hr-ft²-°F)' },
    { property: 'Magnetic Permeability', value: '1.02' }
  ];

  const supplyFormats = [
    { format: 'Seamless & Welded Pipe/Tube', astm: 'ASTM B535 / B710' },
    { format: 'Sheet, Strip & Plate', astm: 'ASTM B536' },
    { format: 'Bar, Rod & Wire', astm: 'ASTM B511 / B512' },
    { format: 'Fittings & Forgings', astm: 'ASTM B546' }
  ];

  const processingSteps = [
    { process: "High-Temp Resistance", details: "Alloy 330 (RA330) is specifically engineered for high-temperature industrial environments. It offers exceptional resistance to heat, oxidation, carburization, and nitridation, making it perfect for intense thermal cycling." },
    { process: "Industrial Application", details: "Extensively utilized in thermal processing sectors. Primary applications include industrial heating systems, furnaces, muffles, retorts, heat treating baskets, fixtures, and heavy-duty conveyor systems." },
    { process: "Structural Integrity", details: "Maintains good structural strength and exceptional ductility (45% Elongation) even after prolonged exposure to severe temperatures and corrosive atmospheres." }
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
          <p className="text-base font-medium text-gray-600">IKT Alloy 330 (UNS N08330) chemistry, mechanical limits, and international supply standards.</p>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Material Supply Formats
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">ASTM / Availability</th>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Mechanical Limitations
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Application & Characteristics
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

        {/* Processing & Contact Note (Outside the columns) */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
            Alloy 330 (RA330) structural components, including seamless/welded pipes, robust plates, round bars, and precision fasteners, are heavily stocked across Saudi Arabia to support rapid thermal-processing and industrial deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact ASTM material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}