// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';

// // export default function PropertiesTable() {
  
// //   const equivalentsData = [
// //     { standard: 'UNS Number', grade: 'N08825' },
// //     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4858' },
// //     { standard: 'Japan (JIS)', grade: 'NCF 825' },
// //     { standard: 'England (BS)', grade: 'NA 16' },
// //     { standard: 'France (AFNOR)', grade: 'NFE30C20DUM' },
// //     { standard: 'Europe (EN)', grade: 'NiCr21Mo' },
// //     { standard: 'Russia (GOST)', grade: 'ЭП703 / XH38BT' },
// //     { standard: 'Industry Compliance', grade: 'NACE MR-0175 / ISO 15156' }
// //   ];

// //   const chemicalData = [
// //     { element: 'Nickel (Ni)', content: '38.00 - 46.00' },
// //     { element: 'Iron (Fe)', content: '22.00 Minimum' },
// //     { element: 'Chromium (Cr)', content: '19.50 - 23.50' },
// //     { element: 'Molybdenum (Mo)', content: '2.50 - 3.50' },
// //     { element: 'Copper (Cu)', content: '1.50 - 3.00' },
// //     { element: 'Titanium (Ti)', content: '0.60 - 1.20' },
// //     { element: 'Manganese (Mn)', content: '≤ 1.00' },
// //     { element: 'Aluminum (Al)', content: '≤ 0.20' },
// //     { element: 'Silicon (Si)', content: '≤ 0.50' },
// //     { element: 'Carbon (C)', content: '≤ 0.05' },
// //     { element: 'Sulfur (S)', content: '≤ 0.03' }
// //   ];

// //   const mechanicalData = [
// //     { property: 'Tensile Strength (Annealed)', value: '80,000 psi (550 MPa)' },
// //     { property: 'Yield Strength (0.2% Offset)', value: '32,000 psi (220 MPa)' },
// //     { property: 'Elongation at Break', value: '30 %' },
// //     { property: 'Tensile Strength (Cold Drawn Tube)', value: '1,000 MPa' },
// //     { property: 'Tensile Strength (Annealed Sheet)', value: '758 MPa' }
// //   ];

// //   const physicalData = [
// //     { property: 'Density', value: '8.14 g/cm³' },
// //     { property: 'Melting Range', value: '1400 °C (2550 °F)' }
// //   ];

// //   const astmSpecifications = [
// //     { form: 'Seamless Pipe & Tube', specs: 'ASTM B423, ASTM B163 (ASME SB-163/SB-423)' },
// //     { form: 'Welded Pipe & Tube', specs: 'ASTM B704, ASTM B705 (ASME SB-704/SB-705)' },
// //     { form: 'Sheet, Strip & Plate', specs: 'ASTM B424 (ASME SB-424)' },
// //     { form: 'Rod, Bar & Wire', specs: 'ASTM B425 (ASME SB-425)' },
// //     { form: 'Fittings & Forgings', specs: 'Fitting: ASTM B366 | Forging: ASTM B564' }
// //   ];

// //   // Text strictly forced to text-base to ensure no small text creeps in
// //   const processingSteps = [
// //     { process: "Corrosion Immunity", details: "Alloy 825 provides legendary resistance to localized corrosion types such as pitting and crevice attacks. Its high nickel baseline creates total immunity against chloride-ion stress-corrosion cracking." },
// //     { process: "Welding Operations", details: "Readily joined using conventional high-quality welding processes including shielded metal-arc, resistance welding, and gas-shielded arc techniques, ensuring robust joint stability in offshore applications." },
// //     { process: "Extreme Chemical Applications", details: "Engineered specifically to resist severely aggressive media, making it the premier choice for handling concentrated sulfuric acid, phosphoric acid, and volatile sour gas environments." }
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
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Incoloy 825 global chemistry, physical properties, and comprehensive supply standards.</p>
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
// //             <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
// //               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //                  <h3 className="text-base font-bold text-gray-800">Mechanical Formidability</h3>
// //               </div>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
// //                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
// //                       <th className="px-6 py-4 text-left font-bold">Standard Value</th>
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
// //                  <h3 className="text-base font-bold text-gray-800">Physical Dynamics</h3>
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

// //         {/* Fabrication Steps & ASTM Supply Format Grid */}
// //         <div className="grid lg:grid-cols-12 gap-8">

// //           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
// //           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
// //             <div className="mb-6 border-b border-gray-200 pb-4">
// //                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// //                  <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Application Profile
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
// //                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
// //             </div>
// //             <div className="overflow-x-auto">
// //               <table className="w-full">
// //                 <tbody>
// //                   {astmSpecifications.map((row, index) => (
// //                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.form || row.format}</td>
// //                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.specs}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </motion.div>

// //         </div>

// //       </motion.div>
// //     </section>
// //   );
// // }
// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Number', grade: 'N08825' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4858' },
//     { standard: 'Japan (JIS)', grade: 'NCF 825' },
//     { standard: 'England (BS)', grade: 'NA 16' },
//     { standard: 'France (AFNOR)', grade: 'NFE30C20DUM' },
//     { standard: 'Europe (EN)', grade: 'NiCr21Mo' },
//     { standard: 'Russia (GOST)', grade: 'ЭП703 / XH38BT' },
//     { standard: 'Industry Compliance', grade: 'NACE MR-0175 / ISO 15156' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '38.00 - 46.00' },
//     { element: 'Iron (Fe)', content: '22.00 Minimum' },
//     { element: 'Chromium (Cr)', content: '19.50 - 23.50' },
//     { element: 'Molybdenum (Mo)', content: '2.50 - 3.50' },
//     { element: 'Copper (Cu)', content: '1.50 - 3.00' },
//     { element: 'Titanium (Ti)', content: '0.60 - 1.20' },
//     { element: 'Manganese (Mn)', content: '≤ 1.00' },
//     { element: 'Aluminum (Al)', content: '≤ 0.20' },
//     { element: 'Silicon (Si)', content: '≤ 0.50' },
//     { element: 'Carbon (C)', content: '≤ 0.05' },
//     { element: 'Sulfur (S)', content: '≤ 0.03' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Annealed)', value: '80,000 psi (550 MPa)' },
//     { property: 'Yield Strength (0.2% Offset)', value: '32,000 psi (220 MPa)' },
//     { property: 'Elongation at Break', value: '30 %' },
//     { property: 'Tensile Strength (Cold Drawn Tube)', value: '1,000 MPa' },
//     { property: 'Tensile Strength (Annealed Sheet)', value: '758 MPa' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.14 g/cm³' },
//     { property: 'Melting Range', value: '1400 °C (2550 °F)' }
//   ];

//   const astmSpecifications = [
//     { form: 'Seamless Pipe & Tube', specs: 'ASTM B423, ASTM B163 (ASME SB-163/SB-423)' },
//     { form: 'Welded Pipe & Tube', specs: 'ASTM B704, ASTM B705 (ASME SB-704/SB-705)' },
//     { form: 'Sheet, Strip & Plate', specs: 'ASTM B424 (ASME SB-424)' },
//     { form: 'Rod, Bar & Wire', specs: 'ASTM B425 (ASME SB-425)' },
//     { form: 'Fittings & Forgings', specs: 'Fitting: ASTM B366 | Forging: ASTM B564' }
//   ];

//   const processingSteps = [
//     { process: "Corrosion Immunity", details: "Alloy 825 provides legendary resistance to localized corrosion types such as pitting and crevice attacks. Its high nickel baseline creates total immunity against chloride-ion stress-corrosion cracking." },
//     { process: "Welding Operations", details: "Readily joined using conventional high-quality welding processes including shielded metal-arc, resistance welding, and gas-shielded arc techniques, ensuring robust joint stability in offshore applications." },
//     { process: "Extreme Chemical Applications", details: "Engineered specifically to resist severely aggressive media, making it the premier choice for handling concentrated sulfuric acid, phosphoric acid, and volatile sour gas environments." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Incoloy 825 global chemistry, physical properties, and comprehensive supply standards.</p>
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

//           {/* ASTM Supply Range Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
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
//                   {astmSpecifications.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.form || row.format}</td>
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
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Engineering & Application Profile
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
//             Alloy 825 structural components, including heavy plates, robust tubes, and precision seamless pipes, are heavily stocked across Saudi Arabia to ensure immediate deployment in oil and gas infrastructure.
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
    { standard: 'UNS Number', grade: 'N08825' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4858' },
    { standard: 'Japan (JIS)', grade: 'NCF 825' },
    { standard: 'England (BS)', grade: 'NA 16' },
    { standard: 'France (AFNOR)', grade: 'NFE30C20DUM' },
    { standard: 'Europe (EN)', grade: 'NiCr21Mo' },
    { standard: 'Russia (GOST)', grade: 'ЭП703 (XH38BT)' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '38.0 - 46.0' },
    { element: 'Chromium (Cr)', content: '19.5 - 23.5' },
    { element: 'Iron (Fe)', content: '≥ 22.0' },
    { element: 'Molybdenum (Mo)', content: '2.5 - 3.5' },
    { element: 'Copper (Cu)', content: '1.5 - 3.0' },
    { element: 'Titanium (Ti)', content: '0.6 - 1.2' },
    { element: 'Carbon (C)', content: '≤ 0.05' },
    { element: 'Manganese (Mn)', content: '≤ 1.0' },
    { element: 'Silicon (Si)', content: '≤ 0.5' },
    { element: 'Aluminum (Al)', content: '≤ 0.2' },
    { element: 'Sulfur (S)', content: '≤ 0.03' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '80,000 psi (550 MPa)' },
    { property: 'Yield Strength (0.2% Offset)', value: '32,000 psi (220 MPa)' },
    { property: 'Elongation at Break', value: '30 %' },
    { property: 'Tensile Strength (Cold Drawn Tube)', value: '145,000 psi (1000 MPa)' },
    { property: 'Yield Strength (Cold Drawn Tube)', value: '128,900 psi (889 MPa)' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.14 g/cm³ (0.294 lb/in³)' },
    { property: 'Melting Range', value: '1400 °C (2550 °F)' }
  ];

  const supplyFormats = [
    { format: 'Seamless Pipe & Tube', astm: 'ASTM B423 / ASTM B163' },
    { format: 'Welded Pipe & Tube', astm: 'ASTM B704 / ASTM B705' },
    { format: 'Sheet, Strip & Plate', astm: 'ASTM B424 / ASTM B906' },
    { format: 'Rod, Bar & Forgings', astm: 'ASTM B425 / ASTM B564' },
    { format: 'Fittings', astm: 'ASTM B366' }
  ];

  const processingSteps = [
    { process: "Corrosion Immunity", details: "Alloy 825 provides an exceptionally high level of corrosion resistance. It acts as a steadfast barrier against pitting, crevice corrosion, intergranular corrosion, and stress-corrosion cracking in both reducing and oxidizing environments." },
    { process: "Welding Operations", details: "Inconel 825 can be easily welded using processes like resistance welding, gas shielded arc process, and shielded metal-arc process. Notably, no post-weld heat treatment is required for this alloy." },
    { process: "Industry Applications", details: "Extensively deployed in offshore oil and gas production, nuclear fuel reprocessing, copper refining equipment, and chemical processing components like phosphoric acid evaporators and pickling-tank heaters." }
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
          <p className="text-base font-medium text-gray-600">IKT Incoloy 825 (UNS N08825) chemistry, mechanical limits, and international supply standards.</p>
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

        {/* Processing & Contact Note (Outside the columns) */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
            Incoloy Alloy 825 structural components, including heavy marine plates, seamless/welded tubes, pipes, and precision bars, are stocked heavily in Saudi Arabia to support rapid industrial deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For direct procurement inquiries, sizing details, or exact material certification, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}