// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const chemicalComparison = [
//     { standard: 'ASTM A600 (T15)', c: '1.50 - 1.60', cr: '3.75 - 5.00', w: '11.75 - 13.0', v: '4.50 - 5.25', co: '4.75 - 5.25', mo: '≤ 1.00' },
//     { standard: 'DIN W-Nr (1.3202)', c: '1.30 - 1.45', cr: '3.80 - 4.50', w: '11.50 - 12.50', v: '3.50 - 4.00', co: '4.50 - 5.00', mo: '0.70 - 1.00' },
//     { standard: 'GB/T (W12Cr4V5Co5)', c: '1.50 - 1.60', cr: '3.75 - 5.00', w: '11.75 - 13.00', v: '4.50 - 5.25', co: '4.75 - 5.25', mo: '< 1.00' },
//     { standard: 'BS (BT15)', c: '1.40 - 1.60', cr: '4.25 - 5.00', w: '12.00 - 13.00', v: '4.75 - 5.25', co: '4.50 - 5.50', mo: '≤ 1.00' },
//     { standard: 'JIS (SKH10)', c: '1.45 - 1.60', cr: '3.80 - 4.50', w: '11.50 - 13.50', v: '4.20 - 5.20', co: '4.20 - 5.20', mo: '—' }
//   ];

//   // All text sizes in this array are strictly uniform text-base size
//   const heatTreatmentSteps = [
//     { process: "Forging", details: "Heat to appropriate forging temperature. Ensure the forged reduction ratio is strictly greater than 5:1 for structural integrity." },
//     { process: "Annealing", details: "Perform full annealing cycle. The expected hardness after standard annealing is 277 HBS." },
//     { process: "Cold Drawing", details: "Hardness of cold drawn round bar is 293 HBS. Hardness after cold drawing and subsequent annealing stabilizes at 285 HBS." },
//     { process: "Quenching", details: "Quenching temperature in a salt bath furnace is 1277°C. In a controllable atmosphere furnace, heat to 1288°C." },
//     { process: "Tempering", details: "Temper at 538°C. Following this specific quenching and tempering cycle, the final hardness will be greater than 65 HRC." }
//   ];

//   // Supply Range Data
//   const stockRange = [
//     { format: 'T15 Round Bar', dimensions: 'Diameter: 2mm ~ 200mm' },
//     { format: 'T15 Steel Plate', dimensions: 'Thickness: 2mm ~ 300mm | Width: 100mm ~ 810mm' },
//     { format: 'T15 Flat Bar', dimensions: 'Thickness: 2mm ~ 50mm | Width: 10mm ~ 200mm' }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT T15 HSS global chemistry equivalents, extreme thermal processing, and KSA supply limits.</p>
//         </motion.div>

//         {/* Global Equivalents Chemical Comparison Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Global Equivalents & Chemical Comparison (%)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px]">
//               <thead>
//                 <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-4 text-left font-bold border-r border-gray-100">Standard / Grade</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Co%</th>
//                   <th className="px-4 py-4 text-center font-bold">Mo%</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {chemicalComparison.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-4 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.standard}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.cr}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.w}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.v}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.co}</td>
//                     <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.mo}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Heat Treatment & Supply Limits Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Heat Treatment Steps - Text sizes correctly set to text-base */}
//           <motion.div variants={itemVariants} className="lg:col-span-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
//                </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {heatTreatmentSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[150px] text-center shadow-sm shrink-0">
//                      {step.process}
//                    </span>
//                    <div className="flex-1">
//                      <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                    </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Extreme Stock Range Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Supply Capabilities (KSA)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <tbody>
//                   {stockRange.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium w-1/3">{row.format}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.dimensions}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//         </div>

//         {/* Processing & Contact Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
//               T15 HSS round bars and flat sections can be intricately cut to your precise sizes. We supply premium quality precision ground tool steel bars to exact dimensional tolerances.
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
  
  const chemicalComparison = [
    { standard: 'ASTM A600 (T15)', c: '1.50 - 1.60', cr: '3.75 - 5.00', w: '11.75 - 13.0', v: '4.50 - 5.25', co: '4.75 - 5.25', mo: '≤ 1.00' },
    { standard: 'DIN W-Nr (1.3202)', c: '1.30 - 1.45', cr: '3.80 - 4.50', w: '11.50 - 12.50', v: '3.50 - 4.00', co: '4.50 - 5.00', mo: '0.70 - 1.00' },
    { standard: 'GB/T (W12Cr4V5Co5)', c: '1.50 - 1.60', cr: '3.75 - 5.00', w: '11.75 - 13.00', v: '4.50 - 5.25', co: '4.75 - 5.25', mo: '< 1.00' },
    { standard: 'BS (BT15)', c: '1.40 - 1.60', cr: '4.25 - 5.00', w: '12.00 - 13.00', v: '4.75 - 5.25', co: '4.50 - 5.50', mo: '≤ 1.00' },
    { standard: 'JIS (SKH10)', c: '1.45 - 1.60', cr: '3.80 - 4.50', w: '11.50 - 13.50', v: '4.20 - 5.20', co: '4.20 - 5.20', mo: '—' }
  ];

  const heatTreatmentSteps = [
    { process: "Forging", details: "Heat to appropriate forging temperature. Ensure the forged reduction ratio is strictly greater than 5:1 for structural integrity." },
    { process: "Annealing", details: "Perform full annealing cycle. The expected hardness after standard annealing is 277 HBS." },
    { process: "Cold Drawing", details: "Hardness of cold drawn round bar is 293 HBS. Hardness after cold drawing and subsequent annealing stabilizes at 285 HBS." },
    { process: "Quenching", details: "Quenching temperature in a salt bath furnace is 1277°C. In a controllable atmosphere furnace, heat to 1288°C." },
    { process: "Tempering", details: "Temper at 538°C. Following this specific quenching and tempering cycle, the final hardness will be greater than 65 HRC." }
  ];

  const stockRange = [
    { format: 'T15 Round Bar', dimensions: 'Diameter: 20mm ~ 200mm' },
    { format: 'T15 Steel Plate', dimensions: 'Thickness: 2mm ~ 300mm | Width: 100mm ~ 810mm' },
    { format: 'T15 Flat Bar', dimensions: 'Thickness: 2mm ~ 50mm | Width: 10mm ~ 200mm' }
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
          <p className="text-base text-gray-600">IKT T15 HSS global chemistry equivalents, extreme thermal processing, and KSA precision supply limits.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Global Equivalents & Chemical Comparison Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Global Equivalents & Chemistry (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Standard / Grade</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">W%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">V%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Co%</th>
                    <th className="px-4 py-4 text-center font-bold">Mo%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalComparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.w}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.v}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.co}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.mo}</td>
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
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[180px] w-[180px] text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supply Range Table */}
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
            T15 HSS round bars and flat sections can be intricately cut to your precise structural requirements. We supply premium quality precision ground tool steel bars to exact dimensional tolerances across Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical inquiries regarding unlisted dimensions or specialized processing, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}