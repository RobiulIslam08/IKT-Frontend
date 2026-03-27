// // /* eslint-disable no-unused-vars */
// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Info } from 'lucide-react';

// // export default function PropertiesTable() {
  
// //   const dimensionalData = [
// //     { grade: 'EN8D', equivalent: 'CK45', metric: '10mm to 220mm', imperial: '0.375" to 7.500"' },
// //     { grade: 'EN14A', equivalent: '20MnV6', metric: '20mm to 150mm', imperial: '0.875" to 4.000"' },
// //     { grade: 'AISI 431', equivalent: 'S29 T', metric: '14mm to 160mm', imperial: '0.750" to 3.000"' },
// //     { grade: 'EN19T', equivalent: "42CrMo4 'T'", metric: '25mm to 100mm', imperial: '1.000" to 3.000"' }
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
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Available Specifications & Dimensions</h2>
// //           </div>
// //           <p className="text-base font-medium text-gray-600 ml-7">IKT Multi-Grade Hard Chrome Plated Steel Bars</p>
// //         </motion.div>

// //         {/* Tolerance Highlight Box */}
// //         <motion.div variants={itemVariants} className="mb-8 p-6 bg-primary/10 border border-primary/20 rounded-xl flex items-start gap-4">
// //           <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
// //           <div>
// //             <h3 className="text-lg font-bold text-gray-900 mb-1">Precision Tolerance Notice</h3>
// //             <p className="text-base text-gray-700 font-medium">All chrome plated steel bars supplied by IKT adhere strictly to an outside diameter tolerance of <span className="font-bold text-gray-900">ISO f-7</span>, ensuring flawless compatibility with standard hydraulic and pneumatic sealing systems.</p>
// //           </div>
// //         </motion.div>

// //         {/* Dimension & Grades Table */}
// //         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
// //           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
// //              <h3 className="text-lg font-bold text-gray-800">Supply Dimensions by Base Specification</h3>
// //           </div>
// //           <div className="overflow-x-auto">
// //             <table className="w-full min-w-[600px]">
// //               <thead>
// //                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
// //                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Base Specification</th>
// //                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Equivalent Standard</th>
// //                   <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Metric Range</th>
// //                   <th className="px-6 py-4 font-bold text-center">Imperial Range</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {dimensionalData.map((row, index) => (
// //                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
// //                     <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
// //                     <td className="px-6 py-4 text-left border-r border-gray-100">{row.equivalent}</td>
// //                     <td className="px-6 py-4 text-center border-r border-gray-100">{row.metric}</td>
// //                     <td className="px-6 py-4 text-center">{row.imperial}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </motion.div>

// //         {/* Footer Note */}
// //         <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
// //           <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
// //             <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery:</span> 
// //             All standard sizes of our hard chrome plated bars are delivered directly from stock. For specific bespoke lengths or to inquire about our rapid nationwide delivery network, please contact the IKT sales department.
// //           </p>
         
// //         </motion.div>

// //       </motion.div>
// //     </section>
// //   );
// // }

// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';
// import { Info } from 'lucide-react';

// export default function PropertiesTable() {
  
//   const dimensionalData = [
//     { grade: 'EN8D', equivalent: 'CK45', metric: '10mm to 220mm', imperial: '0.375" to 7.500"' },
//     { grade: 'EN14A', equivalent: '20MnV6', metric: '20mm to 150mm', imperial: '0.875" to 4.000"' },
//     { grade: 'AISI 431', equivalent: 'S29 T', metric: '14mm to 160mm', imperial: '0.750" to 3.000"' },
//     { grade: 'EN19T', equivalent: "42CrMo4 'T'", metric: '25mm to 100mm', imperial: '1.000" to 3.000"' }
//   ];

//   // --- Animation Variants ---
//   const containerVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

//         {/* Main Header (Centered) */}
//         <motion.div variants={itemVariants} className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Available Specifications & Dimensions</h2>
//           </div>
//           <p className="text-base text-gray-600">IKT Multi-Grade Hard Chrome Plated Steel Bars with precision ISO tolerance standards.</p>
//         </motion.div>

//         {/* STRICTLY SINGLE COLUMN LAYOUT */}
//         <div className="grid grid-cols-1 gap-8">

//           {/* Tolerance Highlight Box */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm flex items-start gap-4">
//             <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
//             <div>
//               <h3 className="text-base font-bold text-gray-900 mb-1">Precision Tolerance Notice</h3>
//               <p className="text-base text-gray-700 font-medium leading-relaxed">
//                 All chrome plated steel bars supplied by IKT adhere strictly to an outside diameter tolerance of <span className="font-bold text-gray-900">ISO f-7</span>, ensuring flawless compatibility with standard hydraulic and pneumatic sealing systems.
//               </p>
//             </div>
//           </motion.div>

//           {/* Dimension & Grades Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
//             <div className="bg-white px-6 py-6 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Supply Dimensions by Base Specification
//               </h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Base Specification</th>
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Equivalent Standard</th>
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Metric Range</th>
//                     <th className="px-6 py-4 text-center font-bold">Imperial Range</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dimensionalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.grade}</td>
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.equivalent}</td>
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.metric}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.imperial}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//         </div>

//         {/* Processing & Delivery Note */}
//         <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Nationwide Delivery:</span> 
//             All standard sizes of our hard chrome plated bars are delivered directly from stock. For specific bespoke lengths or to inquire about our rapid nationwide delivery network across Saudi Arabia, please contact our experts.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical inquiries, please contact our specialized technical team at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
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
  // --- AISI 4140 Data Structures ---
  const equivalentsData = [
    { standard: 'USA (AISI/SAE)', grade: '4140' },
    { standard: 'Germany (DIN WN-r)', grade: '1.7225 / 42CrMo4' },
    { standard: 'Japan (JIS)', grade: 'SCM440' },
    { standard: 'China (GB/T)', grade: '42CrMo' },
    { standard: 'United Kingdom (BS)', grade: '708M40 / EN19' }
  ];

  const chemicalData = [
    { standard: 'ASTM A29 (4140)', c: '0.38-0.43', mn: '0.75-1.00', cr: '0.80-1.10', mo: '0.15-0.25' },
    { standard: 'DIN 1.7225', c: '0.38-0.45', mn: '0.60-0.90', cr: '0.90-1.20', mo: '0.15-0.30' },
    { standard: 'GB 42CrMo', c: '0.38-0.45', mn: '0.50-0.80', cr: '0.90-1.20', mo: '0.15-0.25' },
    { standard: 'JIS SCM440', c: '0.38-0.43', mn: '0.60-0.85', cr: '0.90-1.20', mo: '0.15-0.30' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength', value: '655 MPa / 95,000 psi' },
    { property: 'Yield Strength', value: '415 MPa / 60,200 psi' },
    { property: 'Hardness (Oil Quenched)', value: '28 - 34 HRC' },
    { property: 'Hardness (Annealed)', value: '≤ 250 HB' },
    { property: 'Hardness (Brinell Typical)', value: '197 HB' },
    { property: 'Elongation at Break', value: '25.70 %' },
    { property: 'Machinability (AISI 1212=100)', value: '65 %' }
  ];

  const physicalData = [
    { property: 'Forging Temperature', value: '926 - 1205 °C' },
    { property: 'Annealing Temperature', value: '872 °C (Slow furnace cool)' },
    { property: 'Hot Working Range', value: '816 - 1038 °C' },
    { property: 'Tempering Range', value: '205 - 649 °C' }
  ];

  const supplySizeRange = [
    { format: 'Hot Rolled Bar', range: 'Ø 5mm — 200mm' },
    { format: 'Forging Bar', range: 'Ø 140mm — 3000mm' },
    { format: 'Hot Rolled Plate', range: 'Thick: 10-200mm | Width: 100-2300mm' },
    { format: 'Forged Plate', range: 'Thick: 150-1500mm | Width: 100-3000mm' }
  ];

  const roundsHotRolledMetric = ["40", "50", "60", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300", "320", "350", "400"];
  const roundsBrightDrawnMetric = ["10", "12", "15", "16", "18", "20", "25", "30", "35", "40", "45", "50", "60"];
  const roundsBrightDrawnImperial = ["5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "15/16", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/2", "4"];

  const processingSteps = [
    { process: "High Fatigue Strength", details: "AISI 4140 is a medium carbon alloy steel with high abrasion and impact resistance, toughness, and torsional strength." },
    { process: "Condition T & Annealed", details: "Supplied in the annealed condition (max 250HB) for easy forming or in the T condition (28-34 HRC) for high strength requirements." },
    { process: "Quenching Performance", details: "Excellent response to heat treatment; can be hardened by cold working, or heating and quenching to meet specific structural needs." }
  ];

  // --- Animation Variants ---
  const containerVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Main Header (Centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">AISI 4140 (EN19) Chromium-Molybdenum Steel comprehensive chemical and mechanical profile.</p>
        </motion.div>

        {/* Single-Column, Centered Layout */}
        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Global Grade Equivalents
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Equivalent Grade</th>
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

          {/* Chemical Composition (%) Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Standard</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold">Mo%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.mo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mechanical Characteristics
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Metric / Imperial</th>
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

          {/* Thermal Processing Dynamics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Thermal Processing Protocol
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Thermal Process</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard Temperature</th>
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

          {/* Supply Range limits */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Material Supply Dimensions
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/3">Format</th>
                    <th className="px-6 py-4 text-center font-bold w-2/3">Standard Supply Range</th>
                  </tr>
                </thead>
                <tbody>
                  {supplySizeRange.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-2/3">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Application & Characteristics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Application & Characteristics
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
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

          {/* Stock Availability - Rounds List */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="mb-6 pt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Stock Availability: Rounds
              </h3>
            </div>
            <div className="p-6 grid grid-cols-1 gap-8 border-t border-gray-200">
              <div className="space-y-6 text-center">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-b pb-2">Hot Rolled Rounds (Metric Ø mm)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsHotRolledMetric.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-b pb-2 pt-4">Bright Drawn Rounds (Metric Ø mm)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsBrightDrawnMetric.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide border-b pb-2 pt-4">Bright Drawn Rounds (Imperial Ø inch)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsBrightDrawnImperial.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Inventory in KSA:</span> 
            AISI 4140 alloy steel components, including precision ground round bars, squares, and plate cut-to-size, are heavily stocked across Saudi Arabia to support oil patch and aircraft engineering deployments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries or specific material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}