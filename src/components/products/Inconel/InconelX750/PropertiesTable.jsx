// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {
  
// //   const equivalentsData = [
// //     { standard: 'UNS Designation', grade: 'N07750 (Type 3)' },
// //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4669' },
// //     { standard: 'Aerospace Material Specs', grade: 'AMS 5542, AMS 5698, AMS 5699' },
// //     { standard: 'ASTM Standards', grade: 'ASTM B637' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Nickel (Ni)', content: '70.00 Minimum' },
// //     { element: 'Chromium (Cr)', content: '14.00 - 17.00' },
// //     { element: 'Iron (Fe)', content: '5.00 - 9.00' },
// //     { element: 'Titanium (Ti)', content: '2.25 - 2.75' },
// //     { element: 'Niobium / Columbium (Nb/Cb)', content: '0.70 - 1.20' },
// //     { element: 'Aluminum (Al)', content: '0.40 - 1.00' },
// //     { element: 'Manganese (Mn)', content: '≤ 1.00' },
// //     { element: 'Cobalt (Co)', content: '≤ 1.00' },
// //     { element: 'Silicon (Si)', content: '≤ 0.50' },
// //     { element: 'Copper (Cu)', content: '≤ 0.50' },
// //     { element: 'Carbon (C)', content: '≤ 0.08' },
// //     { element: 'Tantalum (Ta)', content: '≤ 0.05' },
// //     { element: 'Sulfur (S)', content: '≤ 0.01' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Ultimate Tensile Strength (Room Temp)', value: '181,000 psi (1250 MPa)' },
// //     { property: 'Tensile Strength (Elevated Temp)', value: '162,000 psi (1120 MPa)' },
// //     { property: 'Yield Strength (Room Temp)', value: '123,000 psi (850 MPa)' },
// //     { property: 'Yield Strength (Elevated Temp)', value: '110,000 psi (760 MPa)' },
// //     { property: 'Elongation at Break (Room Temp)', value: '30 %' },
// //     { property: 'Elongation at Break (Elevated Temp)', value: '22 %' },
// //     { property: 'Structural Hardness Range', value: '302 - 363 BHN' }
// //   ];

// //   const physicalData = [
// //     { property: 'Material Density', value: '8.276 - 8.28 g/cm³ (0.298 - 0.299 lb/in³)' },
// //     { property: 'Melting Range Limit', value: '1393 - 1430 °C (2530 - 2610 °F)' },
// //     { property: 'Thermal Conductivity', value: '12 W/m-K (83.3 BTU-in/hr-ft²-°F)' },
// //     { property: 'Specific Heat Capacity', value: '0.431 J/g-°C (0.103 BTU/lb-°F)' },
// //     { property: 'Electrical Resistivity', value: '1.22 x 10⁻⁶ Ω⋅m (0.000122 ohm-cm)' },
// //     { property: 'Modulus of Rigidity', value: '75.8 kN/mm² (10,994 ksi)' },
// //     { property: 'Poisson\'s Ratio', value: '0.3' },
// //     { property: 'Magnetic Permeability', value: '1.0035 (Non-magnetic properties)' }
// //   ];

// //   const supplyFormats = [
// //     { format: 'Sheet, Plate & Coil', astm: 'Conforming strictly to AMS and ASTM B637 standards.' },
// //     { format: 'Round Bar & Tubing', astm: 'Precision-ground finishes available for rigorous dimensional tolerances.' },
// //     { format: 'High-Strength Fasteners', astm: 'Custom bolts and structural fasteners designed for high-stress anchoring.' }
// //   ];

// //   // All text elements here are strictly text-base
// //   const processingSteps = [
// //     { process: "Precipitation Hardening", details: "To achieve its formidable mechanical strength, Alloy X750 undergoes precise precipitation hardening operations. This leverages its titanium and aluminum content to form a resilient strengthening phase throughout the matrix." },
// //     { process: "Spring Temper Operations", details: "Extensively heat-treated under specialized spring temper conditions (Modulus of Elasticity ranging from 212.4 to 218.0 kN/mm²), ensuring exceptional coil and leaf spring performance." },
// //     { process: "Corrosion Immunity", details: "Exhibits a robust Pitting Resistance Equivalent Number (PREN) of 44, shielding the material flawlessly against highly aggressive oxidizing and corrosive media." }
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
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Inconel X750 global chemistry, physical properties, and advanced structural standards.</p>
// //         </motion.div>

// //         {/* Equivalents and Chemistry Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
// //           {/* Equivalents Table */}
// //           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                <h3 className="text-base font-bold text-gray-800">Global Grade Specifications</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <thead>
// //                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard Category</th>
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
// //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
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
// //             <motion.div variants={itemVariants} className="lg:col-span-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
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
// //         <div className="grid lg:grid-cols-12 gap-8 mb-12">

// //           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal & Structural Protocol
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
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.astm}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Processing Note (Button Successfully Removed) */}
// //         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
// //           <p className="text-base font-medium text-gray-700 mb-2">
// //             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
// //             Inconel Alloy X750 components, including structural plates, seamless tubes, heavy round bars, and robust fasteners, are deeply stocked across Saudi Arabia to support rapid industrial advancements.
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
//     { standard: 'UNS Designation', grade: 'N07750 (Type 3)' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4669' },
//     { standard: 'Aerospace Material Specs', grade: 'AMS 5542, AMS 5698, AMS 5699' },
//     { standard: 'ASTM Standards', grade: 'ASTM B637' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '70.00 Minimum' },
//     { element: 'Chromium (Cr)', content: '14.00 - 17.00' },
//     { element: 'Iron (Fe)', content: '5.00 - 9.00' },
//     { element: 'Titanium (Ti)', content: '2.25 - 2.75' },
//     { element: 'Niobium / Columbium (Nb/Cb)', content: '0.70 - 1.20' },
//     { element: 'Aluminum (Al)', content: '0.40 - 1.00' },
//     { element: 'Manganese (Mn)', content: '≤ 1.00' },
//     { element: 'Cobalt (Co)', content: '≤ 1.00' },
//     { element: 'Silicon (Si)', content: '≤ 0.50' },
//     { element: 'Copper (Cu)', content: '≤ 0.50' },
//     { element: 'Carbon (C)', content: '≤ 0.08' },
//     { element: 'Tantalum (Ta)', content: '≤ 0.05' },
//     { element: 'Sulfur (S)', content: '≤ 0.01' }
//   ];

//   const mechanicalData = [
//     { property: 'Ultimate Tensile Strength (Room Temp)', value: '181,000 psi (1250 MPa)' },
//     { property: 'Tensile Strength (Elevated Temp)', value: '162,000 psi (1120 MPa)' },
//     { property: 'Yield Strength (Room Temp)', value: '123,000 psi (850 MPa)' },
//     { property: 'Yield Strength (Elevated Temp)', value: '110,000 psi (760 MPa)' },
//     { property: 'Elongation at Break (Room Temp)', value: '30 %' },
//     { property: 'Elongation at Break (Elevated Temp)', value: '22 %' },
//     { property: 'Structural Hardness Range', value: '302 - 363 BHN' }
//   ];

//   const physicalData = [
//     { property: 'Material Density', value: '8.276 - 8.28 g/cm³ (0.298 - 0.299 lb/in³)' },
//     { property: 'Melting Range Limit', value: '1393 - 1430 °C (2530 - 2610 °F)' },
//     { property: 'Thermal Conductivity', value: '12 W/m-K (83.3 BTU-in/hr-ft²-°F)' },
//     { property: 'Specific Heat Capacity', value: '0.431 J/g-°C (0.103 BTU/lb-°F)' },
//     { property: 'Electrical Resistivity', value: '1.22 x 10⁻⁶ Ω⋅m (0.000122 ohm-cm)' },
//     { property: 'Modulus of Rigidity', value: '75.8 kN/mm² (10,994 ksi)' },
//     { property: 'Poisson\'s Ratio', value: '0.3' },
//     { property: 'Magnetic Permeability', value: '1.0035 (Non-magnetic properties)' }
//   ];

//   const supplyFormats = [
//     { format: 'Sheet, Plate & Coil', astm: 'Conforming strictly to AMS and ASTM B637 standards.' },
//     { format: 'Round Bar & Tubing', astm: 'Precision-ground finishes available for rigorous dimensional tolerances.' },
//     { format: 'High-Strength Fasteners', astm: 'Custom bolts and structural fasteners designed for high-stress anchoring.' }
//   ];

//   const processingSteps = [
//     { process: "Precipitation Hardening", details: "To achieve its formidable mechanical strength, Alloy X750 undergoes precise precipitation hardening operations. This leverages its titanium and aluminum content to form a resilient strengthening phase throughout the matrix." },
//     { process: "Spring Temper Operations", details: "Extensively heat-treated under specialized spring temper conditions (Modulus of Elasticity ranging from 212.4 to 218.0 kN/mm²), ensuring exceptional coil and leaf spring performance." },
//     { process: "Corrosion Immunity", details: "Exhibits a robust Pitting Resistance Equivalent Number (PREN) of 44, shielding the material flawlessly against highly aggressive oxidizing and corrosive media." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Inconel X750 global chemistry, physical properties, and advanced structural standards.</p>
//         </motion.div>

//         {/* Masonry Layout Container: This solves the empty space issue perfectly */}
//         <div className="columns-1 lg:columns-2 gap-8">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Global Grade Specifications</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard Category</th>
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
//                <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Attribute Metric</th>
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
//                <h3 className="text-base font-bold text-gray-800">Industrial Supply Formats</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
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
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal & Structural Protocol
//                </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-60 text-center shadow-sm shrink-0">
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
//             Inconel Alloy X750 components, including structural plates, seamless tubes, heavy round bars, and robust fasteners, are deeply stocked across Saudi Arabia to support rapid industrial advancements.
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
    { standard: 'UNS Number', grade: 'N07750' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4669' },
    { standard: 'Material Type', grade: 'Type 3 / N07750 Material' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '≥ 70.00' },
    { element: 'Chromium (Cr)', content: '14.00 - 17.00' },
    { element: 'Iron (Fe)', content: '5.00 - 9.00' },
    { element: 'Titanium (Ti)', content: '2.25 - 2.75' },
    { element: 'Columbium (Nb/Cb)', content: '0.70 - 1.20' },
    { element: 'Aluminum (Al)', content: '0.40 - 1.00' },
    { element: 'Manganese (Mn)', content: '≤ 1.00' },
    { element: 'Cobalt (Co)', content: '≤ 1.00' },
    { element: 'Silicon (Si)', content: '≤ 0.50' },
    { element: 'Copper (Cu)', content: '≤ 0.50' },
    { element: 'Carbon (C)', content: '≤ 0.08' },
    { element: 'Tantalum (Ta)', content: '≤ 0.05' },
    { element: 'Sulfur (S)', content: '≤ 0.01' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '181,000 psi (1250 MPa)' },
    { property: 'Tensile Strength (Elevated Temp)', value: '162,000 psi (1120 MPa)' },
    { property: 'Yield Tensile Strength', value: '123,000 psi (850 MPa)' },
    { property: 'Yield Strength (Elevated Temp)', value: '110,000 psi (760 MPa)' },
    { property: 'Elongation at Break', value: '30 %' },
    { property: 'Elongation at Break (Elevated Temp)', value: '22 %' },
    { property: 'Modulus of Elasticity', value: '218.0 kN/mm² (31619 ksi)' },
    { property: 'Modulus of Rigidity', value: '75.8 kN/mm² (10994 ksi)' },
    { property: 'Hardness Range', value: '302 - 363 BHN' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.28 g/cm³ (0.299 lb/in³)' },
    { property: 'Melting Range', value: '1390 - 1430 °C (2530 - 2610 °F)' },
    { property: 'Specific Heat Capacity', value: '0.431 J/g-°C (0.103 BTU/lb-°F)' },
    { property: 'Thermal Conductivity', value: '12 W/m-K (83.3 BTU-in/hr-ft²-°F)' },
    { property: 'Electrical Resistivity', value: '1.22 x 10⁻⁶ Ω⋅m (0.000122 ohm-cm)' },
    { property: 'Coefficient of Expansion', value: '12.6 μm/m °C (7.0 x 10⁻⁶ in/in °F)' },
    { property: 'Magnetic Permeability', value: '1.0035' },
    { property: 'Curie Temperature', value: '-125 °C (-193 °F)' },
    { property: 'Poisson\'s Ratio', value: '0.3' }
  ];

  const supplyFormats = [
    { format: 'General Specification', astm: 'ASTM B637' },
    { format: 'Aerospace Material Specs', astm: 'AMS 5542, AMS 5698, AMS 5699' }
  ];

  const processingSteps = [
    { process: "Exceptional Properties", details: "Inconel X750 exhibits high strength and extreme corrosion resistance. Its structural integrity is highly valued for components that operate under extreme pressure." },
    { process: "Elevated Temp Stability", details: "At highly elevated temperatures, the superalloy impressively maintains an Ultimate Tensile Strength of 162,000 psi (1120 MPa) and an Elongation at Break of 22%." },
    { process: "Weight Calculation", details: "Inconel X750 round bar weight and dimensional parameters can be efficiently calculated using standard online material engineering calculators." }
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
          <p className="text-base font-medium text-gray-600">Inconel Alloy X750 (UNS N07750) chemistry, mechanical limits, and compliance standards.</p>
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
                <span className="w-2 h-2 rounded-full bg-primary"></span> Compliance & Supply Formats
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Format / Category</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Specifications</th>
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

          {/* Application Profile Steps */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Material Characteristics
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