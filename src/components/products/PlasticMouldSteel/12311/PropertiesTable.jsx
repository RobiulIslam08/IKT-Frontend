// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {

//   const chemicalData = [
//     { c: '0.35 - 0.45', si: '0.20 - 0.40', mn: '1.30 - 1.60', p: '≤ 0.035', s: '≤ 0.035', cr: '1.80 - 2.10', mo: '0.15 - 0.25' }
//   ];

//   const equivalentsData = [
//     { standard: 'DIN (Germany)', grade: '1.2311' },
//     { standard: 'AISI / ASTM (USA)', grade: 'P20' },
//     { standard: 'GB (China)', grade: '3Cr2Mo' }
//   ];

//   const heatTreatmentSteps = [
//     { process: "Forging", details: "Heat slowly to 930-1050 °C. Keep temperature to heat thoroughly. Start forging, then cool slowly." },
//     { process: "Annealing", details: "Heat to 775-790 °C, soak enough time to ensure thorough heating. Cool slowly in the heat treatment furnace." },
//     { process: "Quenching", details: "Heat to 820-840 °C, then quench in oil." },
//     { process: "Tempering", details: "Heat uniformly at the tempering temperature (Advice: 100 to 600 °C). Keep for enough time, then cool in air." }
//   ];

//   const stockRange = [
//     { format: '1.2311 Round Bar', dimensions: 'Diameter: 20mm to 1400mm' },
//     { format: '1.2311 Steel Plate', dimensions: 'Thickness: 20mm to 1400mm' },
//     { format: 'Custom Processing', dimensions: 'Flat bar, hexagonal, square block, and precision ground tool steel available upon request.' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Matrix</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 1.2311 / P20 material chemistry, thermal guides, and massive KSA supply limits.</p>
//         </motion.div>

//         {/* Equivalents and Chemistry Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.standard}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[600px]">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                     <th className="px-3 py-4 text-center font-bold">Mo%</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.si}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mn}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.p}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.s}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.cr}</td>
//                       <td className="px-3 py-4 text-center text-gray-700 font-medium">{row.mo}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//         </div>

//         {/* Heat Treatment Guidelines */}
//         <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
//           <div className="mb-8 border-b border-gray-200 pb-4">
//              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
//                <span className="w-2 h-2 rounded-full bg-primary"></span> Heat Treatment Guidelines
//              </h3>
//              <p className="text-gray-600 font-medium text-sm">Note: 1.2311 is delivered pre-hardened (28-34 HRC) and typically requires no further heat treatment. Below data is for reference if reworking is needed.</p>
//           </div>

//           <div className="flex flex-col gap-4">
//             {heatTreatmentSteps.map((step, index) => (
//               <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start">
//                  <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md min-w-[140px] text-center shadow-sm">
//                    {step.process}
//                  </span>
//                  <div>
//                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                  </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stock Size Limits Box */}
//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Heavy Dimension Supply Range (KSA)</h3>
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
//               <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span> 
//               1.2311 tool steel round bars and flat sections can be cut precisely to your required sizes. We supply high-quality precision ground tool steel bars and gauge plates.
//             </p>
//             <p className="text-sm font-medium text-gray-600">For non-specified sizes or technical inquiries, contact our expert sales team in Saudi Arabia at <span className="font-bold">+966-13-3444036</span>.</p>
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
    { c: '0.35 - 0.45', si: '0.20 - 0.40', mn: '1.30 - 1.60', p: '≤ 0.035', s: '≤ 0.035', cr: '1.80 - 2.10', mo: '0.15 - 0.25' }
  ];

  const equivalentsData = [
    { standard: 'DIN (Germany)', grade: '1.2311' },
    { standard: 'AISI / ASTM (USA)', grade: 'P20' },
    { standard: 'GB (China)', grade: '3Cr2Mo' }
  ];

  const heatTreatmentSteps = [
    { process: "Forging", details: "Heat slowly to 930-1050 °C. Keep temperature to heat thoroughly. Start forging, then cool slowly." },
    { process: "Annealing", details: "Heat to 775-790 °C, soak enough time to ensure thorough heating. Cool slowly in the heat treatment furnace." },
    { process: "Quenching", details: "Heat to 820-840 °C, then quench in oil." },
    { process: "Tempering", details: "Heat uniformly at the tempering temperature (Advice: 100 to 600 °C). Keep for enough time, then cool in air." }
  ];

  const stockRange = [
    { format: '1.2311 Round Bar', dimensions: 'Diameter: 20mm to 1400mm' },
    { format: '1.2311 Steel Plate', dimensions: 'Thickness: 20mm to 1400mm' },
    { format: 'Custom Processing', dimensions: 'Flat bar, hexagonal, square block, and precision ground tool steel available upon request.' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Matrix</h2>
          </div>
          <p className="text-base text-gray-600">IKT 1.2311 / P20 material chemistry, thermal guides, and massive KSA supply limits.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Grade Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Grade Equivalents
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Grade</th>
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

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-3 py-4 text-center font-bold">Mo%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.si}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.p}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.s}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-3 py-4 text-center text-gray-700 font-medium text-base">{row.mo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Heat Treatment Guidelines */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heat Treatment Guidelines
              </h3>
              <p className="text-base text-gray-600 mt-2 px-6">Note: 1.2311 is delivered pre-hardened (28-34 HRC). Below data is for reference if reworking is needed.</p>
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

          {/* Heavy Dimension Supply Range Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heavy Dimension Supply Range (KSA)
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
            <span className="font-bold text-gray-900">IKT Precision Machining in KSA:</span>
            1.2311 tool steel round bars and flat sections can be cut precisely to your required sizes. We supply high-quality precision ground tool steel bars and gauge plates tailored to Saudi Arabia's industrial needs.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries or specialized size requests, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}