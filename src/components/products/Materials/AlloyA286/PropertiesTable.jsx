// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {
  
// //   const equivalentsData = [
// //     { standard: 'UNS / AISI Designations', grade: 'UNS S66286 / AISI 660 / AISI 662' },
// //     { standard: 'Germany (Werkstoff Nr.)', grade: '1.4943 / 1.4944' },
// //     { standard: 'ASTM Standards', grade: 'ASTM A453 Grade 660 / ASTM A638 Grade 660' },
// //     { standard: 'AMS Specifications', grade: 'AMS 5525, 5726, 5731, 5732, 5734, 5737' },
// //     { standard: 'GE Standards', grade: 'GE B50T81, GE B50T12, GE B50T1181' },
// //     { standard: 'Other Equivalents', grade: 'SPS M250' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Iron (Fe)', content: '54.00 (Balance)' },
// //     { element: 'Nickel (Ni)', content: '25.50' },
// //     { element: 'Chromium (Cr)', content: '14.80' },
// //     { element: 'Titanium (Ti)', content: '2.13' },
// //     { element: 'Molybdenum (Mo)', content: '1.30' },
// //     { element: 'Manganese (Mn)', content: '1.00' },
// //     { element: 'Silicon (Si)', content: '0.50' },
// //     { element: 'Vanadium (V)', content: '0.30' },
// //     { element: 'Aluminum (Al)', content: '0.18' },
// //     { element: 'Carbon (C)', content: '0.040' },
// //     { element: 'Phosphorus (P)', content: '0.020' },
// //     { element: 'Sulfur (S)', content: '0.015' },
// //     { element: 'Boron (B)', content: '0.0060' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Ultimate Tensile Strength', value: '150,100 psi (1035 MPa)' },
// //     { property: 'Yield Strength (0.200% Strain)', value: '110,000 psi (759 MPa)' },
// //     { property: 'Elongation at Break', value: '25 %' },
// //     { property: 'Reduction of Area', value: '40 %' },
// //     { property: 'Rockwell C Hardness', value: '32 HRC' },
// //     { property: 'Brinell Hardness (Estimated)', value: '304 BHN' },
// //     { property: 'Knoop Hardness (Estimated)', value: '330' },
// //     { property: 'Vickers Hardness (Estimated)', value: '318' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density', value: '7.92 g/cm³ (0.286 lb/in³)' },
// //     { property: 'Melting Point', value: '1399 °C (2550 °F)' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Rod & Bar Forms', specs: 'ASTM A453 Gr 660, ASME SA-638, AMS 5731-5737, BS HR 51/52' },
// //     { format: 'Seamless Pipe & Tube', specs: 'AMS 5731, AMS 5732, AMS 5734, AMS 5895' },
// //     { format: 'Plate, Sheet & Strip', specs: 'AMS 5525, AMS 5858, AECMA Pr EN 2175' },
// //     { format: 'Wire & Forging Stock', specs: 'AMS 5726, AMS 5805, AECMA Pr EN 2172, GE B50T12' }
// //   ];

// //   // All text elements here are enforced to text-base to ensure strict visual uniformity
// //   const processingSteps = [
// //     { process: "Precipitation Hardening", details: "A286 is meticulously engineered to undergo precipitation hardening. This thermal process significantly elevates the mechanical strength of the material, allowing it to easily surpass yield limits of 110,000 psi for robust structural anchoring." },
// //     { process: "Extreme Thermal Operation", details: "Maintains profound oxidation resistance and mechanical stability in continuous service environments involving temperatures up to 704°C (1300°F), making it crucial for turbine engines." },
// //     { process: "Grade 660 Fastener Integrity", details: "Extensively manufactured into Grade 660 bolts and fasteners under ASTM A453 compliance, ensuring flawless pressure containment in highly corrosive and volatile offshore gas scenarios." }
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
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT A286 (Grade 660) superalloy chemistry, physical thresholds, and certified supply standards.</p>
// //         </motion.div>

// //         {/* Equivalents and Chemistry Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
// //                     <th className="px-6 py-4 text-left font-bold">Grade Specification</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {equivalentsData.map((row, index) => (
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
// //           <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
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
            
// //             {/* Mechanical Properties Table */}
// //             <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                  <h3 className="text-base font-bold text-gray-800">Mechanical Formidability</h3>
// //               </div>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
// //                       <th className="px-6 py-4 text-left font-bold">Tested Value</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {mechanicalData.map((row, index) => (
// //                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// //                         <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </motion.div>

// //             {/* Physical Properties Table */}
// //             <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
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
// //                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
// //                         <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </motion.div>

// //         </div>

// //         {/* Fabrication Steps & Industry Supply Format Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8">

// //           {/* Processing Protocol Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Capability Profile
// //                </h3>
// //             </div>

// //             <div className="flex flex-col gap-4">
// //               {processingSteps.map((step, index) => (
// //                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
// //                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-60 text-center shadow-sm shrink-0">
// //                      {step.process}
// //                    </span>
// //                    <div className="flex-1">
// //                      <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
// //                    </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
          
// //           {/* Supply Formats Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Industrial Form Availability</h3>
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
// //             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
// //             A286 Stainless Steel (Grade 660) components, including heavy plates, seamless tubes, round bars, and specialized fasteners, are heavily stocked across Saudi Arabia to support mission-critical deployments.
// //           </p>
// //           <p className="text-base font-medium text-gray-600">
// //             For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
//     { standard: 'UNS / AISI Designations', grade: 'UNS S66286 / AISI 660 / AISI 662' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '1.4943 / 1.4944' },
//     { standard: 'ASTM Standards', grade: 'ASTM A453 Grade 660 / ASTM A638 Grade 660' },
//     { standard: 'AMS Specifications', grade: 'AMS 5525, 5726, 5731, 5732, 5734, 5737' },
//     { standard: 'GE Standards', grade: 'GE B50T81, GE B50T12, GE B50T1181' },
//     { standard: 'Other Equivalents', grade: 'SPS M250' }
//   ];

//   const chemicalData = [
//     { element: 'Iron (Fe)', content: '54.00 (Balance)' },
//     { element: 'Nickel (Ni)', content: '25.50' },
//     { element: 'Chromium (Cr)', content: '14.80' },
//     { element: 'Titanium (Ti)', content: '2.13' },
//     { element: 'Molybdenum (Mo)', content: '1.30' },
//     { element: 'Manganese (Mn)', content: '1.00' },
//     { element: 'Silicon (Si)', content: '0.50' },
//     { element: 'Vanadium (V)', content: '0.30' },
//     { element: 'Aluminum (Al)', content: '0.18' },
//     { element: 'Carbon (C)', content: '0.040' },
//     { element: 'Phosphorus (P)', content: '0.020' },
//     { element: 'Sulfur (S)', content: '0.015' },
//     { element: 'Boron (B)', content: '0.0060' }
//   ];

//   const mechanicalData = [
//     { property: 'Ultimate Tensile Strength', value: '150,100 psi (1035 MPa)' },
//     { property: 'Yield Strength (0.200% Strain)', value: '110,000 psi (759 MPa)' },
//     { property: 'Elongation at Break', value: '25 %' },
//     { property: 'Reduction of Area', value: '40 %' },
//     { property: 'Rockwell C Hardness', value: '32 HRC' },
//     { property: 'Brinell Hardness (Estimated)', value: '304 BHN' },
//     { property: 'Knoop Hardness (Estimated)', value: '330' },
//     { property: 'Vickers Hardness (Estimated)', value: '318' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '7.92 g/cm³ (0.286 lb/in³)' },
//     { property: 'Melting Point', value: '1399 °C (2550 °F)' }
//   ];

//   const supplyFormats = [
//     { format: 'Rod & Bar Forms', specs: 'ASTM A453 Gr 660, ASME SA-638, AMS 5731-5737, BS HR 51/52' },
//     { format: 'Seamless Pipe & Tube', specs: 'AMS 5731, AMS 5732, AMS 5734, AMS 5895' },
//     { format: 'Plate, Sheet & Strip', specs: 'AMS 5525, AMS 5858, AECMA Pr EN 2175' },
//     { format: 'Wire & Forging Stock', specs: 'AMS 5726, AMS 5805, AECMA Pr EN 2172, GE B50T12' }
//   ];

//   // All text elements here are enforced to text-base to ensure strict visual uniformity
//   const processingSteps = [
//     { process: "Precipitation Hardening", details: "A286 is meticulously engineered to undergo precipitation hardening. This thermal process significantly elevates the mechanical strength of the material, allowing it to easily surpass yield limits of 110,000 psi for robust structural anchoring." },
//     { process: "Extreme Thermal Operation", details: "Maintains profound oxidation resistance and mechanical stability in continuous service environments involving temperatures up to 704°C (1300°F), making it crucial for turbine engines." },
//     { process: "Grade 660 Fastener Integrity", details: "Extensively manufactured into Grade 660 bolts and fasteners under ASTM A453 compliance, ensuring flawless pressure containment in highly corrosive and volatile offshore gas scenarios." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT A286 (Grade 660) superalloy chemistry, physical thresholds, and certified supply standards.</p>
//         </motion.div>

//         {/* Masonry Layout Container: Prevents empty spaces below tables */}
//         <div className="columns-1 lg:columns-2 gap-8">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade Specification</th>
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
//               <h3 className="text-base font-bold text-gray-800">Mechanical Formidability</h3>
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
//               <h3 className="text-base font-bold text-gray-800">Physical Dynamics</h3>
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

//           {/* ASTM Supply Formats Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Industrial Supply Formats</h3>
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

//           {/* Engineering & Capability Profile (Processing Steps) */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Capability Profile
//               </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
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

//         {/* Processing Note (Outside the columns) */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
//             A286 Stainless Steel (Grade 660) components, including heavy plates, seamless tubes, round bars, and specialized fasteners, are heavily stocked across Saudi Arabia to support mission-critical deployments.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'UNS Number', grade: 'S66286' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '1.4943 / 1.4944' },
    { standard: 'AISI', grade: '660 / 662' },
    { standard: 'ASTM Specifications', grade: 'A453 Grade 660 / A638 Grade 660' },
    { standard: 'Trade Names', grade: 'Incoloy A286 / Pyromet A-286 / ATI A286' }
  ];

  const chemicalData = [
    { element: 'Iron (Fe)', content: '54.0 (Balance)' },
    { element: 'Nickel (Ni)', content: '25.50' },
    { element: 'Chromium (Cr)', content: '14.80' },
    { element: 'Titanium (Ti)', content: '2.13' },
    { element: 'Molybdenum (Mo)', content: '1.30' },
    { element: 'Manganese (Mn)', content: '≤ 1.00' },
    { element: 'Silicon (Si)', content: '≤ 0.50' },
    { element: 'Vanadium (V)', content: '0.30' },
    { element: 'Aluminum (Al)', content: '0.18' },
    { element: 'Carbon (C)', content: '≤ 0.040' },
    { element: 'Phosphorus (P)', content: '≤ 0.020' },
    { element: 'Sulfur (S)', content: '≤ 0.015' },
    { element: 'Boron (B)', content: '≤ 0.0060' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength', value: '150,100 psi (1035 MPa)' },
    { property: 'Yield Strength (@ 0.200% offset)', value: '110,000 psi (759 MPa)' },
    { property: 'Elongation at Break', value: '25 %' },
    { property: 'Reduction of Area', value: '40 %' },
    { property: 'Hardness (Brinell)', value: '304' },
    { property: 'Hardness (Rockwell C)', value: '32 HRC' },
    { property: 'Hardness (Knoop)', value: '330' },
    { property: 'Hardness (Vickers)', value: '318' }
  ];

  const physicalData = [
    { property: 'Density', value: '7.92 g/cm³ (0.286 lb/in³)' },
    { property: 'Melting Point', value: '1399 °C (2550 °F)' }
  ];

  const supplyFormats = [
    { format: 'Rod & Bar', astm: 'ASTM A453 Gr 660 / ASME SA-638' },
    { format: 'Seamless Pipe & Tube', astm: 'AMS 5731 / AMS 5732 / AMS 5734' },
    { format: 'Plate, Sheet & Strip', astm: 'AMS 5525 / AMS 5858' },
    { format: 'Forgings', astm: 'AMS 5731 / AMS 5737 / AMS 5895' },
    { format: 'Wire', astm: 'AMS 5726 / AMS 5805 / AMS 5853' }
  ];

  const processingSteps = [
    { process: "High-Temperature Strength", details: "A286 is an iron-nickel-chromium superalloy with significant additions of molybdenum and titanium. It is highly valued for applications requiring high strength and excellent corrosion resistance up to 1300°F (704°C)." },
    { process: "Precipitation Hardening", details: "This superalloy achieves its exceptional mechanical properties through precipitation hardening. The perfectly balanced chemical composition allows it to hit immense tensile and yield strengths after heat treatment." },
    { process: "Industrial Applications", details: "Widely utilized in high-stress and critical environments such as jet engine components, high-temperature fasteners, severe-duty springs, and offshore oil and gas equipment." }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Alloy A286 (UNS S66286) chemistry, mechanical limits, and international supply standards.</p>
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
                    <th className="px-6 py-4 text-center font-bold w-1/2">ASTM / AMS Specs</th>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Characteristics Profile
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
            A286 Stainless Steel (Grade 660) components, including high-strength plates, precision tubes, round bars, and fasteners, are actively distributed and stocked to support rapid industrial deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact ASTM material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}