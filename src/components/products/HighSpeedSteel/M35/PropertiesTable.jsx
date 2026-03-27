// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const chemicalData = [
//     { c: '0.88 - 0.95', si: '0.15 - 0.65', mn: '0.15 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '3.80 - 4.50', mo: '4.75 - 5.20', v: '1.70 - 2.00', w: '6.00 - 7.00', co: '4.60 - 5.00' }
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

//   const supplyFormats = [
//     { format: 'Steel Round Bar', description: 'Available in custom sawn lengths as one-offs or multiple cuts.' },
//     { format: 'Steel Flat Bar', description: 'Sawn from wide flat bars to your specific structural sizes.' },
//     { format: 'Steel Plate', description: 'Heavy structural plates sawn to exact required dimensions.' },
//     { format: 'Ground Tool Steel', description: 'Precision finished ground gauge plates provided to tight tolerances.' }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT M35 Cobalt HSS chemistry (ASTM A600-1999), capabilities, and KSA tolerances.</p>
//         </motion.div>

//         {/* Chemical Composition Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[1000px]">
//               <thead>
//                 <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
//                   <th className="px-4 py-4 text-center font-bold">Co%</th>
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
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mo}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.v}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.w}</td>
//                     <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.co}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Tolerances and Supply Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
//             {/* Tolerances Column */}
//             <div className="lg:col-span-6 flex flex-col gap-8">
              
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

//             {/* Supply Capabilities Column - Text sizing ensured to be text-base */}
//             <motion.div variants={itemVariants} className="lg:col-span-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//               <div className="mb-6 border-b border-gray-200 pb-4">
//                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Material Supply Capabilities
//                  </h3>
//               </div>

//               <div className="flex flex-col gap-4">
//                 {supplyFormats.map((item, index) => (
//                   <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                      <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-40 text-center shadow-sm shrink-0">
//                        {item.format}
//                      </span>
//                      <div className="flex-1">
//                        <p className="text-base text-gray-700 font-medium leading-relaxed">{item.description}</p>
//                      </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//         </div>

//         {/* Processing & Contact Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
//               M35 Cobalt HSS round bars and flat sections can be expertly cut to your precise sizes. We supply superior quality ground tool steel bars to exact mechanical tolerances.
//             </p>
//             <p className="text-base font-medium text-gray-600">For inquiries regarding custom dimensions, please contact our engineering team in Saudi Arabia at <span className="font-bold">+966-13-3444036</span>.</p>
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
    { c: '0.88 - 0.95', si: '0.15 - 0.65', mn: '0.15 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '3.80 - 4.50', mo: '4.75 - 5.20', v: '1.70 - 2.00', w: '6.00 - 7.00', co: '4.60 - 5.00' }
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

  const supplyFormats = [
    { format: 'Steel Round Bar', description: 'Available in custom sawn lengths as one-offs or multiple cuts.' },
    { format: 'Steel Flat Bar', description: 'Sawn from wide flat bars to your specific structural sizes.' },
    { format: 'Steel Plate', description: 'Heavy structural plates sawn to exact required dimensions.' },
    { format: 'Ground Tool Steel', description: 'Precision finished ground gauge plates provided to tight tolerances.' }
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
          <p className="text-base text-gray-600">IKT M35 Cobalt HSS chemistry (ASTM A600-1999), structural capabilities, and KSA precision tolerances.</p>
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
              <table className="w-full border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
                    <th className="px-4 py-4 text-center font-bold">Co%</th>
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
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mo}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.v}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.w}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.co}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.range}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.tolerance}</td>
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
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.range}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.tolerance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Material Supply Capabilities */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Material Supply Capabilities
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
              {supplyFormats.map((item, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[180px] w-[180px] text-center shadow-sm shrink-0">
                    {item.format}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
            M35 Cobalt HSS round bars and flat sections can be expertly cut to your precise structural sizes within our Saudi facilities. We supply superior quality ground tool steel bars to exact mechanical tolerances for high-performance applications.
          </p>
          <p className="text-base font-medium text-gray-600">
            For specialized procurement inquiries or custom structural requirements, please contact our engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}