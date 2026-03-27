// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   // Equivalent Standards
//   const equivalentsData = [
//     { country: 'USA (ASTM / AISI)', grade: '8620' },
//     { country: 'Germany (DIN)', grade: '21NiCrMo2 / 1.6523' },
//     { country: 'Japan (JIS)', grade: 'SNCM220' },
//     { country: 'China (GB)', grade: '20CrNiMo' },
//     { country: 'England (BS)', grade: '805M20' },
//     { country: 'France (NF)', grade: '20NCD2' }
//   ];

//   // Chemical Composition
//   const chemicalData = [
//     { c: '0.18 - 0.23', si: '0.15 - 0.35', mn: '0.70 - 0.90', p: '≤ 0.035', s: '≤ 0.040', cr: '0.40 - 0.60', mo: '0.15 - 0.25', ni: '0.40 - 0.70' }
//   ];

//   // Mechanical Properties
//   const mechanicalData = [
//     { property: 'Tensile Strength', value: '76,900 psi' },
//     { property: 'Yield Strength', value: '55,800 psi' },
//     { property: 'Bulk Modulus', value: '20,300 ksi' },
//     { property: 'Shear Modulus', value: '11,600 ksi' },
//     { property: 'Poisson’s Ratio', value: '0.27 - 0.30' },
//     { property: 'Izod Impact', value: '84.8 ft.lb' }
//   ];

//   // Modified step data - ensures sizes are normal text-base size
//   const heatTreatmentSteps = [
//     { process: "Annealing", details: "Slowly heat the steel to 850°C and allow enough time for the material to be thoroughly and uniformly heated. Cool slowly in the furnace. Maximum resulting hardness: 250 HB." },
//     { process: "Hardening", details: "Heat slowly to 880-920°C. After adequate soaking at this elevated temperature, quench rapidly in oil to lock in the structural matrix." },
//     { process: "Tempering", details: "Temper the material immediately as soon as the tools reach room temperature post-quenching to relieve internal stresses." }
//   ];

//   // Hot Rolled Round Bar Tolerances
//   const roundTolerances = [
//     { range: '≤ 12.70', tolerance: '-0.13 ~ 0.30' },
//     { range: '> 12.7 ~ 25.40', tolerance: '-0.13 ~ 0.41' },
//     { range: '> 25.4 ~ 38.10', tolerance: '-0.15 ~ 0.51' },
//     { range: '> 38.1 ~ 50.80', tolerance: '-0.20 ~ 0.64' },
//     { range: '> 50.80 ~ 63.50', tolerance: '-0.25 ~ 0.76' },
//     { range: '> 63.50 ~ 76.20', tolerance: '-0.25 ~ 1.02' },
//     { range: '> 76.20 ~ 101.60', tolerance: '-0.30 ~ 1.27' },
//     { range: '> 101.60 ~ 203.20', tolerance: '-0.38 ~ 3.81' }
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

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Machining Data</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 8620 case hardening alloy chemistry, mechanical limits, and KSA tolerances.</p>
//         </motion.div>

//         {/* Equivalents and Chemistry Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Global Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
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

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[700px]">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                     <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
//                     <th className="px-4 py-4 text-center font-bold">Ni%</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.si}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mn}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.p}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.s}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.cr}</td>
//                       <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mo}</td>
//                       <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.ni}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//         </div>

//         {/* Mechanical Properties & Heat Treatment Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
//             {/* Mechanical Properties Table */}
//             <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Mechanical Properties (Annealed)</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
//                       <th className="px-6 py-4 text-left font-bold">Standard Value</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mechanicalData.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.property}</td>
//                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Heat Treatment Steps (TEXT SIZE UPDATED) */}
//             <motion.div variants={itemVariants} className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//               <div className="mb-6 border-b border-gray-200 pb-4">
//                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
//                  </h3>
//               </div>

//               <div className="flex flex-col gap-4">
//                 {heatTreatmentSteps.map((step, index) => (
//                   <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                      <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[140px] text-center shadow-sm shrink-0">
//                        {step.process}
//                      </span>
//                      <div className="flex-1">
//                        <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                      </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//         </div>

//         {/* Tolerance Data Grids */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
//             {/* Round Bar Tolerances */}
//             <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Hot Rolled Round Bar Tolerance</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Diameter Range (mm)</th>
//                       <th className="px-6 py-4 text-left font-bold">Tolerance (mm)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {roundTolerances.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.range}</td>
//                         <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.tolerance}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Steel Plate Tolerances */}
//             <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Hot Rolled Steel Plate Tolerance</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Thickness Range (mm)</th>
//                       <th className="px-6 py-4 text-left font-bold">Tolerance (mm)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {plateTolerances.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.range}</td>
//                         <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.tolerance}</td>
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
//             <p className="text-sm md:text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Custom Cutting & Grinding:</span> 
//               8620 alloy steel round bars and flat sections can be cut precisely to your required structural sizes. We supply precision ground tool steel bars to exact dimensional tolerances.
//             </p>
//             <p className="text-sm font-medium text-gray-600">For inquiries regarding unlisted sizes, please contact our KSA expert team at <span className="font-bold">+966-13-3444036</span>.</p>
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
    { country: 'USA (ASTM / AISI)', grade: '8620' },
    { country: 'Germany (DIN)', grade: '21NiCrMo2 / 1.6523' },
    { country: 'Japan (JIS)', grade: 'SNCM220' },
    { country: 'China (GB)', grade: '20CrNiMo' },
    { country: 'England (BS)', grade: '805M20' },
    { country: 'France (NF)', grade: '20NCD2' }
  ];

  // Chemical Composition
  const chemicalData = [
    { c: '0.18 - 0.23', si: '0.15 - 0.35', mn: '0.70 - 0.90', p: '≤ 0.035', s: '≤ 0.040', cr: '0.40 - 0.60', mo: '0.15 - 0.25', ni: '0.40 - 0.70' }
  ];

  // Mechanical Properties
  const mechanicalData = [
    { property: 'Tensile Strength', value: '76,900 psi' },
    { property: 'Yield Strength', value: '55,800 psi' },
    { property: 'Bulk Modulus', value: '20,300 ksi' },
    { property: 'Shear Modulus', value: '11,600 ksi' },
    { property: 'Poisson’s Ratio', value: '0.27 - 0.30' },
    { property: 'Izod Impact', value: '84.8 ft.lb' }
  ];

  // Heat Treatment Steps
  const heatTreatmentSteps = [
    { process: "Annealing", details: "Slowly heat the steel to 850°C and allow enough time for the material to be thoroughly and uniformly heated. Cool slowly in the furnace. Maximum resulting hardness: 250 HB." },
    { process: "Hardening", details: "Heat slowly to 880-920°C. After adequate soaking at this elevated temperature, quench rapidly in oil to lock in the structural matrix." },
    { process: "Tempering", details: "Temper the material immediately as soon as the tools reach room temperature post-quenching to relieve internal stresses." }
  ];

  // Hot Rolled Round Bar Tolerances
  const roundTolerances = [
    { range: '≤ 12.70', tolerance: '-0.13 ~ 0.30' },
    { range: '> 12.7 ~ 25.40', tolerance: '-0.13 ~ 0.41' },
    { range: '> 25.4 ~ 38.10', tolerance: '-0.15 ~ 0.51' },
    { range: '> 38.1 ~ 50.80', tolerance: '-0.20 ~ 0.64' },
    { range: '> 50.80 ~ 63.50', tolerance: '-0.25 ~ 0.76' },
    { range: '> 63.50 ~ 76.20', tolerance: '-0.25 ~ 1.02' },
    { range: '> 76.20 ~ 101.60', tolerance: '-0.30 ~ 1.27' },
    { range: '> 101.60 ~ 203.20', tolerance: '-0.38 ~ 3.81' }
  ];

  // Hot Rolled Steel Plate Tolerances
  const plateTolerances = [
    { range: '≤ 25.4', tolerance: '-0.41 ~ 0.79' },
    { range: '> 25.4 ~ 76', tolerance: '-0.79 ~ 1.19' },
    { range: '> 76 ~ 127', tolerance: '-1.19 ~ 1.60' },
    { range: '> 127 ~ 152', tolerance: '-1.60 ~ 2.39' },
    { range: '> 178 ~ 254', tolerance: '-1.98 ~ 3.18' },
    { range: '> 254 ~ 305', tolerance: '-2.39 ~ 3.96' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Machining Data</h2>
          </div>
          <p className="text-base text-gray-600">IKT 8620 case hardening alloy chemistry, mechanical limits, and KSA tolerances.</p>
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
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
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
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                    <th className="px-4 py-4 text-center font-bold">Ni%</th>
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
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.ni}</td>
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
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mechanical Properties (Annealed)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property Metric</th>
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

          {/* Heat Treatment Protocol */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heat Treatment Guidelines
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 border-t border-gray-200">
              {heatTreatmentSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[140px] w-[140px] text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Round Bar Tolerances Table */}
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

          {/* Steel Plate Tolerances Table */}
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

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Custom Cutting & Grinding in KSA:</span> 
            8620 alloy steel round bars and flat sections can be cut precisely to your required structural sizes. We supply precision ground tool steel bars to exact dimensional tolerances across Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For unlisted dimensions or specialized technical support, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}