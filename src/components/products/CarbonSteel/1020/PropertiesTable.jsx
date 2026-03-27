// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   // Equivalent Standards
//   const equivalentsData = [
//     { country: 'USA (ASTM/AISI)', grade: '1020 / G10200' },
//     { country: 'Germany (DIN)', grade: '1.1151 / C22E / Ck22' },
//     { country: 'Japan (JIS)', grade: 'S20C' },
//     { country: 'China (GB)', grade: '20' },
//     { country: 'England (BS)', grade: '070M20 / C22E' },
//     { country: 'France (AFNOR)', grade: 'XC18 / C22E' },
//     { country: 'Sweden (SS)', grade: '1435' }
//   ];

//   // Chemical Composition
//   const chemicalData = [
//     { c: '0.18 - 0.23', si: '0.20 - 0.40', mn: '0.30 - 0.60', p: '≤ 0.040', s: '≤ 0.050' }
//   ];

//   // Mechanical Properties
//   const mechanicalData = [
//     { property: 'Tensile Strength', value: '253 - 500 MPa' },
//     { property: 'Elongation', value: '≥ 24%' },
//     { property: 'Weldability', value: 'Excellent' },
//     { property: 'Formability', value: 'High Plasticity' }
//   ];

//   // Massive Supply Range Data
//   const stockRange = [
//     { format: '1020 Round Bar', dimensions: 'Diameter: Ø 5mm ~ 3000mm' },
//     { format: '1020 Steel Plate', dimensions: 'Thickness: 5mm ~ 3000mm | Width: 100mm ~ 3500mm' },
//     { format: '1020 Hexagonal Bar', dimensions: 'HEX: 5mm ~ 105mm' },
//     { format: 'Available Conditions', dimensions: 'Cold Drawn (if <90mm), Cold Rolled, Hot Rolled, Forged' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & KSA Supply Range</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 1020 mild carbon steel equivalents, chemical composition, and extreme size capabilities.</p>
//         </motion.div>

//         {/* Equivalents and Properties Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Global Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Country</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.country}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Right Column: Chemistry & Mechanicals */}
//           <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
              
//               {/* Chemical Composition Table */}
//               <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//                 <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                    <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-[500px]">
//                     <thead>
//                       <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                         <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                         <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                         <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                         <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                         <th className="px-4 py-4 text-center font-bold">S%</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {chemicalData.map((row, index) => (
//                         <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                           <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                           <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.si}</td>
//                           <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mn}</td>
//                           <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.p}</td>
//                           <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.s}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Mechanical Properties Table */}
//               <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//                 <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                    <h3 className="text-lg font-bold text-gray-800">Mechanical Properties</h3>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                         <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
//                         <th className="px-6 py-4 text-left font-bold">Standard Value</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {mechanicalData.map((row, index) => (
//                         <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                           <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
//                           <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//           </motion.div>
//         </div>

//         {/* Extreme Stock Range Table */}
//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Massive Dimensional Limits (KSA Availability)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <tbody>
//                 {stockRange.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium w-1/3">{row.format}</td>
//                     <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.dimensions}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Processing & Contact Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-sm md:text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Custom Sizing in KSA:</span> 
//               1020 mild steel round bars and flat sections can be expertly sawn to your required sizes. We supply precision ground tool steel bars to exact dimensional tolerances.
//             </p>
//             <p className="text-sm font-medium text-gray-600">For inquiries regarding unlisted sizes, please contact our expert engineering team in Saudi Arabia at <span className="font-bold">+966-13-3444036</span>.</p>
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
  
  // Equivalent Standards
  const equivalentsData = [
    { country: 'USA (ASTM/AISI)', grade: '1020 / G10200' },
    { country: 'Germany (DIN)', grade: '1.1151 / C22E / Ck22' },
    { country: 'Japan (JIS)', grade: 'S20C' },
    { country: 'China (GB)', grade: '20' },
    { country: 'England (BS)', grade: '070M20 / C22E' },
    { country: 'France (AFNOR)', grade: 'XC18 / C22E' },
    { country: 'Sweden (SS)', grade: '1435' }
  ];

  // Chemical Composition
  const chemicalData = [
    { c: '0.18 - 0.23', si: '0.20 - 0.40', mn: '0.30 - 0.60', p: '≤ 0.040', s: '≤ 0.050' }
  ];

  // Mechanical Properties
  const mechanicalData = [
    { property: 'Tensile Strength', value: '253 - 500 MPa' },
    { property: 'Elongation', value: '≥ 24%' },
    { property: 'Weldability', value: 'Excellent' },
    { property: 'Formability', value: 'High Plasticity' }
  ];

  // Massive Supply Range Data
  const stockRange = [
    { format: '1020 Round Bar', dimensions: 'Diameter: Ø 5mm ~ 3000mm' },
    { format: '1020 Steel Plate', dimensions: 'Thickness: 5mm ~ 3000mm | Width: 100mm ~ 3500mm' },
    { format: '1020 Hexagonal Bar', dimensions: 'HEX: 5mm ~ 105mm' },
    { format: 'Available Conditions', dimensions: 'Cold Drawn (if <90mm), Cold Rolled, Hot Rolled, Forged' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & KSA Supply Range</h2>
          </div>
          <p className="text-base text-gray-600">IKT 1020 mild carbon steel equivalents, chemical composition, and extreme size capabilities for structural engineering.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Grade Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Global Grade Equivalents
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Country</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Grade Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.country}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold">S%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.si}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.p}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mechanical Properties Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mechanical Properties
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard Value</th>
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

          {/* Massive Dimensional Limits Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Massive dimensional supply range (KSA)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/3">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-2/3">KSA Available Dimensions</th>
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
            <span className="font-bold text-gray-900">IKT Custom Sizing in KSA:</span> 
            1020 mild steel round bars and flat sections can be expertly sawn to your required sizes. We supply precision ground tool steel bars to exact dimensional tolerances across Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For inquiries regarding unlisted sizes or structural specifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}