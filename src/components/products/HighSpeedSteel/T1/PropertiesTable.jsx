// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const chemicalData = [
//     { c: '0.65 - 0.80', si: '0.20 - 0.45', mn: '0.10 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '3.75 - 4.50', w: '17.25 - 18.25', v: '0.90 - 1.30' }
//   ];

//   const hardnessData = [
//     { state: 'Annealing', hardness: '255 HBS' },
//     { state: 'Cold Drawn', hardness: '269 HBS' },
//     { state: 'Cold Drawn (After Annealing)', hardness: '262 HBS' },
//     { state: 'Post-Tempering Final Hardness', hardness: '≥ 63 HRC (typically 62-66 HRC)' }
//   ];

//   // ALL text elements here are enforced to text-base to ensure strict visual uniformity
//   const heatTreatmentSteps = [
//     { process: "Forging", details: "Heat to forging temperature slowly and steadily. Soak for enough time to ensure the heat penetrates the material thoroughly before forging." },
//     { process: "Preheating", details: "Prior to quenching, preheat the material uniformly to approximately 816°C." },
//     { process: "Quenching", details: "In a salt bath furnace, quench at 1277°C. In a controlled atmosphere furnace, quench at a slightly higher 1288°C." },
//     { process: "Tempering", details: "Temper the material at 552°C. After the tempering process is complete, the expected working hardness will be 63 HRC or higher." }
//   ];

//   // Hot Rolled Round Bar Tolerances
//   const roundTolerances = [
//     { range: '6.40 ~ 15.80', tolerance: '-0.038 ~ 0.038' },
//     { range: '15.80 ~ <77.60', tolerance: '0 ~ 0.10' },
//     { range: '77.60 ~ <103.0', tolerance: '0 ~ 0.15' },
//     { range: '103.0 ~ <181.0', tolerance: '0 ~ 0.78' },
//     { range: '181.0 ~ <206.20', tolerance: '0 ~ 1.60' },
//     { range: '206.20 ~ <257.0', tolerance: '0 ~ 2.40' },
//     { range: '257.0 ~ <307.70', tolerance: '0 ~ 3.20' },
//     { range: '≥ 307.70', tolerance: '0 ~ 4.70' }
//   ];

//   // Hot Rolled Steel Plate Tolerances
//   const plateTolerances = [
//     { range: '≤ 25.4', tolerance: '-0.41 ~ 0.79' },
//     { range: '> 25.4 ~ 76', tolerance: '-0.79 ~ 1.19' },
//     { range: '> 76 ~ 127', tolerance: '-1.19 ~ 1.60' },
//     { range: '> 127 ~ 152', tolerance: '-1.60 ~ 2.39' },
//     { range: '> 178 ~ 254', tolerance: '-1.98 ~ 3.18' },
//     { range: '> 254 ~ 305', tolerance: '-2.39 ~ 3.96' }
//   ];

//   const stockRange = [
//     { format: 'T1 Round Bar', dimensions: 'Diameter: 2mm ~ 300mm' },
//     { format: 'T1 Steel Plate', dimensions: 'Thickness: 2mm ~ 300mm | Width: 100mm ~ 1800mm' },
//     { format: 'Custom Processing', dimensions: 'Flat bars, square blocks, and precision ground tool steel available.' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Machining Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT T1 HSS chemistry (ASTM A600-1999), thermal limits, and KSA supply tolerances.</p>
//         </motion.div>

//         {/* Chemical Composition Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[800px]">
//               <thead>
//                 <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
//                   <th className="px-4 py-4 text-center font-bold">V%</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {chemicalData.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.si}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mn}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.p}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.s}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.cr}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.w}</td>
//                     <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.v}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Hardness & Heat Treatment Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Hardness States Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Hardness Delivery States</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material State</th>
//                     <th className="px-6 py-4 text-left font-bold">Hardness Rating</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {hardnessData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.state}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.hardness}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Thermal Processing Steps - Guaranteed Text-Base Size */}
//           <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
//                </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {heatTreatmentSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[140px] text-center shadow-sm shrink-0">
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

//         {/* Tolerances and Range Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
//             {/* Tolerances Column */}
//             <div className="lg:col-span-7 flex flex-col gap-8">
              
//               {/* Round Bar Tolerances */}
//               <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//                 <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                    <h3 className="text-lg font-bold text-gray-800">Hot Rolled Round Bar Tolerance</h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                         <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Diameter Range (mm)</th>
//                         <th className="px-6 py-4 text-left font-bold">Tolerance (mm)</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {roundTolerances.map((row, index) => (
//                         <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                           <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.range}</td>
//                           <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.tolerance}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </motion.div>

//               {/* Steel Plate Tolerances */}
//               <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//                 <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                    <h3 className="text-lg font-bold text-gray-800">Hot Rolled Steel Plate Tolerance</h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                         <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Thickness Range (mm)</th>
//                         <th className="px-6 py-4 text-left font-bold">Tolerance (mm)</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {plateTolerances.map((row, index) => (
//                         <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                           <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.range}</td>
//                           <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.tolerance}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Supply Range limits Column */}
//             <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Available Supply Range (KSA)</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <tbody>
//                     {stockRange.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium w-1/3">{row.format}</td>
//                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.dimensions}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//         </div>

//         {/* Processing & Contact Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
//               T1 HSS round bars and flat sections can be expertly cut to your precise sizes. We supply premium quality precision ground tool steel bars to exact dimensional tolerances.
//             </p>
//             <p className="text-base font-medium text-gray-600">For inquiries regarding unlisted dimensions or processing capabilities, please contact our expert engineering team in Saudi Arabia at <span className="font-bold">+966-13-3444036</span>.</p>
//           </div>
        
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }

/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const chemicalData = [
    { c: '0.65 - 0.80', si: '0.20 - 0.45', mn: '0.10 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '3.75 - 4.50', w: '17.25 - 18.25', v: '0.90 - 1.30' }
  ];

  const hardnessData = [
    { state: 'Annealing', hardness: '255 HBS' },
    { state: 'Cold Drawn', hardness: '269 HBS' },
    { state: 'Cold Drawn (After Annealing)', hardness: '262 HBS' },
    { state: 'Post-Tempering Final Hardness', hardness: '≥ 63 HRC (typically 62-66 HRC)' }
  ];

  const heatTreatmentSteps = [
    { process: "Forging", details: "Heat to forging temperature slowly and steadily. Soak for enough time to ensure the heat penetrates the material thoroughly before forging." },
    { process: "Preheating", details: "Prior to quenching, preheat the material uniformly to approximately 816°C." },
    { process: "Quenching", details: "In a salt bath furnace, quench at 1277°C. In a controlled atmosphere furnace, quench at a slightly higher 1288°C." },
    { process: "Tempering", details: "Temper the material at 552°C. After the tempering process is complete, the expected working hardness will be 63 HRC or higher." }
  ];

  const roundTolerances = [
    { range: '6.40 ~ 15.80', tolerance: '-0.038 ~ 0.038' },
    { range: '15.80 ~ <77.60', tolerance: '0 ~ 0.10' },
    { range: '77.60 ~ <103.0', tolerance: '0 ~ 0.15' },
    { range: '103.0 ~ <181.0', tolerance: '0 ~ 0.78' },
    { range: '181.0 ~ <206.20', tolerance: '0 ~ 1.60' },
    { range: '206.20 ~ <257.0', tolerance: '0 ~ 2.40' },
    { range: '257.0 ~ <307.70', tolerance: '0 ~ 3.20' },
    { range: '≥ 307.70', tolerance: '0 ~ 4.70' }
  ];

  const plateTolerances = [
    { range: '≤ 25.4', tolerance: '-0.41 ~ 0.79' },
    { range: '> 25.4 ~ 76', tolerance: '-0.79 ~ 1.19' },
    { range: '> 76 ~ 127', tolerance: '-1.19 ~ 1.60' },
    { range: '> 127 ~ 152', tolerance: '-1.60 ~ 2.39' },
    { range: '> 178 ~ 254', tolerance: '-1.98 ~ 3.18' },
    { range: '> 254 ~ 305', tolerance: '-2.39 ~ 3.96' }
  ];

  const stockRange = [
    { format: 'T1 Round Bar', dimensions: 'Diameter: 2mm ~ 300mm' },
    { format: 'T1 Steel Plate', dimensions: 'Thickness: 2mm ~ 300mm | Width: 100mm ~ 1800mm' },
    { format: 'Custom Processing', dimensions: 'Flat bars, square blocks, and precision ground tool steel available.' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Machining Specs</h2>
          </div>
          <p className="text-base text-gray-600">IKT T1 HSS chemistry (ASTM A600-1999), thermal limits, and KSA supply precision tolerances.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
                    <th className="px-4 py-4 text-center font-bold">V%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.si}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.p}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.s}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.w}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Hardness Delivery States Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Hardness Delivery States
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material State</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Hardness Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {hardnessData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.state}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.hardness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Thermal Processing Protocol */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Thermal Processing Protocol
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
              {heatTreatmentSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-40 w-40 text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hot Rolled Round Bar Tolerance Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Hot Rolled Round Bar Tolerance
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Diameter Range (mm)</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Tolerance (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {roundTolerances.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.range}</td>
                      <td className="px-6 py-3 text-center text-gray-700 font-medium text-base w-1/2">{row.tolerance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Hot Rolled Steel Plate Tolerance Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Hot Rolled Steel Plate Tolerance
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Thickness Range (mm)</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Tolerance (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {plateTolerances.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.range}</td>
                      <td className="px-6 py-3 text-center text-gray-700 font-medium text-base w-1/2">{row.tolerance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Available Supply Range Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Available Supply Range (KSA)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/3">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-2/3">KSA Supply Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  {stockRange.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-2/3 leading-relaxed">{row.dimensions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
            T1 HSS round bars and flat sections can be expertly cut to your precise sizes. We supply premium quality precision ground tool steel bars to exact dimensional tolerances across Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For inquiries regarding unlisted dimensions or specific processing capabilities, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}