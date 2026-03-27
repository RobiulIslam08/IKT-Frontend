// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   // Standard Equivalents
//   const equivalentsData = [
//     { usa: 'ASTM / AISI / SAE 4340', germany: 'DIN EN 10083/3 (1.6511 / 36CrNiMo4)', china: 'GB/T 3077 (40CrNiMo)', japan: 'JIS G4053 (SNCM439)' }
//   ];

//   // Chemical Composition
//   const chemicalData = [
//     { element: 'Iron (Fe)', percentage: '95.195 - 96.33' },
//     { element: 'Nickel (Ni)', percentage: '1.65 - 2.00' },
//     { element: 'Chromium (Cr)', percentage: '0.700 - 0.900' },
//     { element: 'Manganese (Mn)', percentage: '0.600 - 0.800' },
//     { element: 'Carbon (C)', percentage: '0.370 - 0.430' },
//     { element: 'Molybdenum (Mo)', percentage: '0.200 - 0.300' },
//     { element: 'Silicon (Si)', percentage: '0.150 - 0.300' },
//     { element: 'Sulfur (S)', percentage: '≤ 0.0400' },
//     { element: 'Phosphorous (P)', percentage: '≤ 0.0350' }
//   ];

//   // Thermal & Mechanical Processing Steps
//   const heatTreatmentSteps = [
//     { process: "Forging", details: "Forged precisely at temperatures ranging from 427°C to 1233°C (1800°F to 2250°F)." },
//     { process: "Annealing", details: "Annealed at 844°C (1550°F) followed by extremely slow cooling in the furnace." },
//     { process: "Hardening", details: "Hardened through strategic cold working or heat treatment (Quenched and Tempered)." },
//     { process: "Tempering", details: "Material should be fully heat treated or normalized before tempering. Tempering temperature relies heavily on the desired engineering strength." },
//     { process: "Welding", details: "Compatible with fusion or resistance welding. Strict pre-heat and post-heat procedures are mandatory." }
//   ];

//   // Massive Supply Range Data
//   const stockRange = [
//     { format: '4340 Round Bar', dimensions: 'Diameter: Ø 5mm ~ 1700mm | Max Length: 20000mm' },
//     { format: '4340 Steel Plate', dimensions: 'Thickness: 10mm ~ 1400mm | Width: 210mm ~ 2300mm' },
//     { format: '4340 Flat Bar', dimensions: 'Profile: 5mm-210mm x 5mm-210mm x Required Length' }
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

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & KSA Processing Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 4340 alloy chemistry, thermal processing, and monumental supply limits.</p>
//         </motion.div>

//         {/* Equivalents Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Global Grade Equivalents</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">USA</th>
//                   <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Germany</th>
//                   <th className="px-6 py-4 text-center font-bold border-r border-gray-100">China</th>
//                   <th className="px-6 py-4 text-center font-bold">Japan</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {equivalentsData.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.usa}</td>
//                     <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.germany}</td>
//                     <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.china}</td>
//                     <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.japan}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Chemistry & Stock Range Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-3 text-left font-bold border-r border-gray-100">Element</th>
//                     <th className="px-6 py-3 text-left font-bold">Content Range (%)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.element}</td>
//                       <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.percentage}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Extreme Stock Range Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
//             <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Heavy Dimension Supply Limits (KSA)</h3>
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
//             </div>

//             {/* Heat Treatment Steps */}
//             <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
//               <div className="mb-4 border-b border-gray-200 pb-3">
//                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Protocol
//                  </h3>
//               </div>
//               <div className="flex flex-col gap-3">
//                 {heatTreatmentSteps.map((step, index) => (
//                   <div key={index} className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex flex-col sm:flex-row gap-3 items-start">
//                      <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-md min-w-[100px] text-center shadow-sm">
//                        {step.process}
//                      </span>
//                      <div>
//                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                      </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//         </div>

//         {/* Tolerance Data Grids */}
//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Hot Rolled Round Bar Tolerance</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Diameter Range (mm)</th>
//                   <th className="px-6 py-4 text-left font-bold">Tolerance (mm)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {roundTolerances.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.range}</td>
//                     <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.tolerance}</td>
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
//               <span className="font-bold text-gray-900">IKT Extreme Sizing & Logistics in KSA:</span> 
//               We are capable of manufacturing structural steel pieces weighing up to 380 tons. Round bars, flat bars, and precision plates can be sawn specifically to your requirements.
//             </p>
//             <p className="text-sm font-medium text-gray-600">For unlisted sizes or technical support, contact our Saudi Arabian facility directly at <span className="font-bold">+966-13-3444036</span>.</p>
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
  
  // Standard Equivalents
  const equivalentsData = [
    { usa: 'ASTM / AISI / SAE 4340', germany: 'DIN EN 10083/3 (1.6511 / 36CrNiMo4)', china: 'GB/T 3077 (40CrNiMo)', japan: 'JIS G4053 (SNCM439)' }
  ];

  // Chemical Composition
  const chemicalData = [
    { element: 'Iron (Fe)', percentage: '95.195 - 96.33' },
    { element: 'Nickel (Ni)', percentage: '1.65 - 2.00' },
    { element: 'Chromium (Cr)', percentage: '0.700 - 0.900' },
    { element: 'Manganese (Mn)', percentage: '0.600 - 0.800' },
    { element: 'Carbon (C)', percentage: '0.370 - 0.430' },
    { element: 'Molybdenum (Mo)', percentage: '0.200 - 0.300' },
    { element: 'Silicon (Si)', percentage: '0.150 - 0.300' },
    { element: 'Sulfur (S)', percentage: '≤ 0.0400' },
    { element: 'Phosphorous (P)', percentage: '≤ 0.0350' }
  ];

  // Thermal & Mechanical Processing Steps
  const heatTreatmentSteps = [
    { process: "Forging", details: "Forged precisely at temperatures ranging from 427°C to 1233°C (1800°F to 2250°F)." },
    { process: "Annealing", details: "Annealed at 844°C (1550°F) followed by extremely slow cooling in the furnace." },
    { process: "Hardening", details: "Hardened through strategic cold working or heat treatment (Quenched and Tempered)." },
    { process: "Tempering", details: "Material should be fully heat treated or normalized before tempering. Tempering temperature relies heavily on the desired engineering strength." },
    { process: "Welding", details: "Compatible with fusion or resistance welding. Strict pre-heat and post-heat procedures are mandatory." }
  ];

  // Massive Supply Range Data
  const stockRange = [
    { format: '4340 Round Bar', dimensions: 'Diameter: Ø 5mm ~ 1700mm | Max Length: 20000mm' },
    { format: '4340 Steel Plate', dimensions: 'Thickness: 10mm ~ 1400mm | Width: 210mm ~ 2300mm' },
    { format: '4340 Flat Bar', dimensions: 'Profile: 5mm-210mm x 5mm-210mm x Required Length' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & KSA Processing Specs</h2>
          </div>
          <p className="text-base text-gray-600">IKT 4340 alloy chemistry, thermal processing, and monumental supply limits for high-strength applications.</p>
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
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">USA</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Germany</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">China</th>
                    <th className="px-6 py-4 text-center font-bold">Japan</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.usa}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.germany}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.china}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.japan}</td>
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
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Content Range (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Heavy Dimension Supply Limits Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heavy Dimension Supply Limits (KSA)
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

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Extreme Sizing & Logistics in KSA:</span> 
            We are capable of manufacturing structural steel pieces weighing up to 380 tons. Round bars, flat bars, and precision plates can be sawn specifically to your requirements within Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For unlisted sizes or technical support, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}