// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {
  
// //   const equivalentsData = [
// //     { standard: 'UNS Designation', grade: 'N09925' },
// //     { standard: 'Japan (JIS)', grade: 'NCF 925' },
// //     { standard: 'Industry Compliance', grade: 'NACE MR-01-75' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Nickel (Ni)', content: '44.00' },
// //     { element: 'Iron (Fe)', content: '28.00' },
// //     { element: 'Chromium (Cr)', content: '21.00' },
// //     { element: 'Molybdenum (Mo)', content: '3.00' },
// //     { element: 'Titanium (Ti)', content: '2.10' },
// //     { element: 'Copper (Cu)', content: '1.80' },
// //     { element: 'Aluminum (Al)', content: '0.30' },
// //     { element: 'Carbon (C)', content: '0.01' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Tensile Strength (Precipitation Hardened, Room Temp)', value: '175,000 psi (1210 MPa)' },
// //     { property: 'Tensile Strength (Precipitation Hardened @ 550°C/1020°F)', value: '141,000 psi (970 MPa)' },
// //     { property: 'Yield Strength (0.2% Offset, Room Temp)', value: '117,000 psi (810 MPa)' },
// //     { property: 'Yield Strength (0.2% Offset @ 550°C/1020°F)', value: '102,000 psi (700 MPa)' },
// //     { property: 'Elongation at Break', value: '24 %' },
// //     { property: 'Rockwell C Hardness', value: '39 HRC' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density', value: '8.05 g/cm³ (0.291 lb/in³)' },
// //     { property: 'Melting Point', value: '1343 °C (2450 °F)' },
// //     { property: 'Magnetic Permeability', value: '1.001 (Non-Magnetic)' },
// //     { property: 'Electrical Resistivity', value: '0.000117 ohm-cm' },
// //     { property: 'Specific Heat Capacity', value: '0.435 J/g-°C (0.104 BTU/lb-°F)' },
// //     { property: 'Poisson\'s Ratio', value: '0.281' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Tubular Products', specs: 'Seamless Pipe, Welded Tube, and Precision Tubing' },
// //     { format: 'Flat Products', specs: 'Sheet, Plate, Strip, and Heavy Coil' },
// //     { format: 'Structural Forms', specs: 'Round Bar, Hexagon Bar, Flat Bar, and Extruded Sections' },
// //     { format: 'Hardware', specs: 'High-Strength Fasteners, Bolts, and Forging Stock' }
// //   ];

// //   // All text elements here are enforced to text-base to ensure strict visual uniformity
// //   const processingSteps = [
// //     { process: "Heat Treatment (Annealing)", details: "To ensure optimal microstructural stability, the alloy is systematically annealed at temperatures ranging between 983°C and 1038°C (1800°F to 1900°F), followed by a calculated cooling cycle." },
// //     { process: "Machining Dynamics", details: "Achieving precision cuts on Alloy 925 is entirely viable using standard iron-based alloy machining methodologies, particularly when supplemented with high-grade commercial coolants to mitigate tool wear." },
// //     { process: "Welding Compatibility", details: "Demonstrates excellent weldability. The most highly recommended and reliable methods for joining this alloy include Shielded Metal-Arc (SMAW), Gas Metal-Arc (GMAW), Gas-Tungsten Arc (GTAW), and Submerged-Arc (SAW) welding." }
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
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 925 global chemistry, intense physical properties, and broad supply formats.</p>
// //         </motion.div>

// //         {/* Equivalents and Chemistry Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Compliance</th>
// //                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
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
// //           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full min-w-[500px]">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
// //                     <th className="px-6 py-4 text-left font-bold">Nominal Content (%)</th>
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
// //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Attribute Metric</th>
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

// //         {/* Fabrication Steps & ASTM Supply Format Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8">

// //           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Fabrication Profile
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
          
// //           {/* Industry Supply Formats Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Industrial Supply Formats</h3>
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
// //             Alloy 925 structural components, including plates, tubes, welded pipes, and precision bars, are stocked heavily across Saudi Arabia to support rapid deployment in oil and gas infrastructure.
// //           </p>
// //           <p className="text-base font-medium text-gray-600">
// //             For critical procurement operations, specific sizing details, or exact material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
//     { standard: 'UNS Designation', grade: 'N09925' },
//     { standard: 'Japan (JIS)', grade: 'NCF 925' },
//     { standard: 'Industry Compliance', grade: 'NACE MR-01-75' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '44.00' },
//     { element: 'Iron (Fe)', content: '28.00' },
//     { element: 'Chromium (Cr)', content: '21.00' },
//     { element: 'Molybdenum (Mo)', content: '3.00' },
//     { element: 'Titanium (Ti)', content: '2.10' },
//     { element: 'Copper (Cu)', content: '1.80' },
//     { element: 'Aluminum (Al)', content: '0.30' },
//     { element: 'Carbon (C)', content: '0.01' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Precipitation Hardened, Room Temp)', value: '175,000 psi (1210 MPa)' },
//     { property: 'Tensile Strength (Precipitation Hardened @ 550°C/1020°F)', value: '141,000 psi (970 MPa)' },
//     { property: 'Yield Strength (0.2% Offset, Room Temp)', value: '117,000 psi (810 MPa)' },
//     { property: 'Yield Strength (0.2% Offset @ 550°C/1020°F)', value: '102,000 psi (700 MPa)' },
//     { property: 'Elongation at Break', value: '24 %' },
//     { property: 'Rockwell C Hardness', value: '39 HRC' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.05 g/cm³ (0.291 lb/in³)' },
//     { property: 'Melting Point', value: '1343 °C (2450 °F)' },
//     { property: 'Magnetic Permeability', value: '1.001 (Non-Magnetic)' },
//     { property: 'Electrical Resistivity', value: '0.000117 ohm-cm' },
//     { property: 'Specific Heat Capacity', value: '0.435 J/g-°C (0.104 BTU/lb-°F)' },
//     { property: 'Poisson\'s Ratio', value: '0.281' }
//   ];

//   const supplyFormats = [
//     { format: 'Tubular Products', specs: 'Seamless Pipe, Welded Tube, and Precision Tubing' },
//     { format: 'Flat Products', specs: 'Sheet, Plate, Strip, and Heavy Coil' },
//     { format: 'Structural Forms', specs: 'Round Bar, Hexagon Bar, Flat Bar, and Extruded Sections' },
//     { format: 'Hardware', specs: 'High-Strength Fasteners, Bolts, and Forging Stock' }
//   ];

//   // All text elements here are enforced to text-base to ensure strict visual uniformity
//   const processingSteps = [
//     { process: "Heat Treatment (Annealing)", details: "To ensure optimal microstructural stability, the alloy is systematically annealed at temperatures ranging between 983°C and 1038°C (1800°F to 1900°F), followed by a calculated cooling cycle." },
//     { process: "Machining Dynamics", details: "Achieving precision cuts on Alloy 925 is entirely viable using standard iron-based alloy machining methodologies, particularly when supplemented with high-grade commercial coolants to mitigate tool wear." },
//     { process: "Welding Compatibility", details: "Demonstrates excellent weldability. The most highly recommended and reliable methods for joining this alloy include Shielded Metal-Arc (SMAW), Gas Metal-Arc (GMAW), Gas-Tungsten Arc (GTAW), and Submerged-Arc (SAW) welding." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 925 global chemistry, intense physical properties, and broad supply formats.</p>
//         </motion.div>

//         {/* Masonry Layout Container */}
//         <div className="columns-1 lg:columns-2 gap-8">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Compliance</th>
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
//               <table className="w-full min-w-[500px]">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
//                     <th className="px-6 py-4 text-left font-bold">Nominal Content (%)</th>
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
//                <h3 className="text-base font-bold text-gray-800">Mechanical Formidability</h3>
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
//                <h3 className="text-base font-bold text-gray-800">Physical Dynamics</h3>
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

//           {/* Supply Formats Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Industrial Supply Formats</h3>
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
//                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Fabrication Profile
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

//         {/* Processing Note (Outside the columns) */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
//             Alloy 925 structural components, including plates, tubes, welded pipes, and precision bars, are stocked heavily across Saudi Arabia to support rapid deployment in oil and gas infrastructure.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement operations, specific sizing details, or exact material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'UNS Number', grade: 'N09925' },
    { standard: 'Japan (JIS)', grade: 'NCF 925' },
    { standard: 'NACE Standard', grade: 'MR-01-75' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '44.0' },
    { element: 'Iron (Fe)', content: '28.0' },
    { element: 'Chromium (Cr)', content: '21.0' },
    { element: 'Molybdenum (Mo)', content: '3.0' },
    { element: 'Titanium (Ti)', content: '2.1' },
    { element: 'Copper (Cu)', content: '1.8' },
    { element: 'Aluminum (Al)', content: '0.3' },
    { element: 'Carbon (C)', content: '0.01' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Room Temp)', value: '175,000 psi (1210 MPa)' },
    { property: 'Yield Strength (Room Temp)', value: '117,000 psi (810 MPa)' },
    { property: 'Tensile Strength (@ 550°C/1020°F)', value: '141,000 psi (970 MPa)' },
    { property: 'Yield Strength (@ 550°C/1020°F)', value: '102,000 psi (700 MPa)' },
    { property: 'Elongation at Break', value: '24 %' },
    { property: 'Rockwell C Hardness', value: '39 HRC' },
    { property: 'Poisson\'s Ratio', value: '0.281' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.05 g/cm³ (0.291 lb/in³)' },
    { property: 'Melting Point', value: '1343 °C (2450 °F)' },
    { property: 'Specific Heat Capacity', value: '0.435 J/g-°C (0.104 BTU/lb-°F)' },
    { property: 'Electrical Resistivity', value: '0.000117 ohm-cm' },
    { property: 'Magnetic Permeability', value: '1.001' }
  ];

  const supplyFormats = [
    { format: 'Seamless & Welded Tube', astm: 'ASTM B163' },
    { format: 'Sheet, Strip, Plate & Coil', astm: 'Standard Production' },
    { format: 'Round, Flat & Hex Bar', astm: 'Standard Production' },
    { format: 'Forging Stock & Wire', astm: 'Standard Production' }
  ];

  const processingSteps = [
    { process: "Heat Treatment", details: "Incoloy 925 is heat treated by annealing it at temperatures ranging from 1800 to 1900 °F (983 to 1038 °C) followed by appropriate cooling procedures to achieve optimal precipitation hardening." },
    { process: "Machining Capability", details: "Machining of Alloy 925 can be readily achieved by utilizing normal methods standard for iron-based alloys. The use of commercial coolants is highly recommended to perform efficient machining operations." },
    { process: "Welding Protocols", details: "Preferred methods for welding Incoloy 925 include Shielded Metal-Arc Welding (SMAW), Gas Metal-Arc Welding (GMAW), Gas-Tungsten Arc Welding (GTAW), and Submerged-Arc Welding." }
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
          <p className="text-base font-medium text-gray-600">IKT Incoloy 925 (UNS N09925) chemistry, mechanical limits, and international supply standards.</p>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Machining & Processing Profile
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
            Incoloy Alloy 925 structural components, including plates, tubes, forged sections, precision bars, and fasteners, are actively distributed and stocked to support rapid industrial and high-strength deployments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact ASTM material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}