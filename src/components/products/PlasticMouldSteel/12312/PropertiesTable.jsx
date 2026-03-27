// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const chemicalData = [
//     { c: '0.35 - 0.45', si: '0.30 - 0.50', mn: '1.40 - 1.60', p: '≤ 0.030', s: '0.05 - 0.10', cr: '1.80 - 2.00', mo: '0.15 - 0.25' }
//   ];

//   const heatTreatmentData = [
//     { parameter: 'Material Grade Designation', value: '40CrMnMoS8-6 / DIN W-Nr 1.2312' },
//     { parameter: 'Hot Working Temperature', value: '1050 - 850 °C' },
//     { parameter: 'Annealing Temperature', value: '780 - 760 °C' },
//     { parameter: 'Hardness After Annealing', value: '≤ 230 HBS' },
//     { parameter: 'Quenching Temperature', value: '830 - 870 °C' },
//     { parameter: 'Quenching Medium', value: 'Oil' },
//     { parameter: 'Common Tempering Range', value: '640 - 680 °C' }
//   ];

//   const temperingData = [
//     { temp: '100 °C', hrc: '51 HRC' },
//     { temp: '200 °C', hrc: '50 HRC' },
//     { temp: '300 °C', hrc: '48 HRC' },
//     { temp: '400 °C', hrc: '45 HRC' }
//   ];

//   const stockAvailability = [
//     { format: '1.2312 Round Bar', dimensions: 'Diameter: Ø 50mm ~ 1500mm' },
//     { format: '1.2312 Steel Plate', dimensions: 'Thickness: 14mm ~ 800mm | Width: 100mm ~ 3000mm' },
//     { format: 'Custom Processing', dimensions: 'Sawn flat bars, blocks, and precision ground gauge plates available.' }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 1.2312 composition, thermal properties, and extreme size capabilities.</p>
//         </motion.div>

//         {/* Chemical Composition Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px]">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                   <th className="px-4 py-4 text-center font-bold">Mo%</th>
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
//                     <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.mo}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Heat Treatment and Tempering Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
            
//             {/* Heat Treatment Parameters */}
//             <motion.div variants={itemVariants} className="lg:col-span-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Thermal Processing Parameters</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <tbody>
//                     {heatTreatmentData.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.parameter}</td>
//                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Tempering Profile */}
//             <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Tempering Hardness Profile</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Temperature</th>
//                       <th className="px-6 py-4 text-center font-bold">Hardness (HRC)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {temperingData.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-3 text-center border-r border-gray-100 text-gray-700 font-medium">{row.temp}</td>
//                         <td className="px-6 py-3 text-center text-gray-700 font-medium">{row.hrc}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//         </div>

//         {/* Stock Size Limits Box */}
//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Heavy Dimension Stock Limits (KSA Availability)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <tbody>
//                 {stockAvailability.map((row, index) => (
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
//               <span className="font-bold text-gray-900">IKT Heavy Processing in KSA:</span> 
//               1.2312 tool steel round bars and flat sections can be cut to your exact sizes. We can supply blocks and precision ground plates tailored to Saudi Arabia's tooling needs.
//             </p>
//             <p className="text-sm font-medium text-gray-600">If your size is not specified, please contact our expert team at <span className="font-bold">+966-13-3444036</span>.</p>
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
    { c: '0.35 - 0.45', si: '0.30 - 0.50', mn: '1.40 - 1.60', p: '≤ 0.030', s: '0.05 - 0.10', cr: '1.80 - 2.00', mo: '0.15 - 0.25' }
  ];

  const heatTreatmentData = [
    { parameter: 'Material Grade Designation', value: '40CrMnMoS8-6 / DIN W-Nr 1.2312' },
    { parameter: 'Hot Working Temperature', value: '1050 - 850 °C' },
    { parameter: 'Annealing Temperature', value: '780 - 760 °C' },
    { parameter: 'Hardness After Annealing', value: '≤ 230 HBS' },
    { parameter: 'Quenching Temperature', value: '830 - 870 °C' },
    { parameter: 'Quenching Medium', value: 'Oil' },
    { parameter: 'Common Tempering Range', value: '640 - 680 °C' }
  ];

  const temperingData = [
    { temp: '100 °C', hrc: '51 HRC' },
    { temp: '200 °C', hrc: '50 HRC' },
    { temp: '300 °C', hrc: '48 HRC' },
    { temp: '400 °C', hrc: '45 HRC' }
  ];

  const stockAvailability = [
    { format: '1.2312 Round Bar', dimensions: 'Diameter: Ø 50mm ~ 1500mm' },
    { format: '1.2312 Steel Plate', dimensions: 'Thickness: 14mm ~ 800mm | Width: 100mm ~ 3000mm' },
    { format: 'Custom Processing', dimensions: 'Sawn flat bars, blocks, and precision ground gauge plates available.' }
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
          <p className="text-base text-gray-600">IKT 1.2312 composition, thermal properties, and extreme size capabilities for professional tooling.</p>
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
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold">Mo%</th>
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
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.mo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Thermal Processing Parameters Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Thermal Processing Parameters
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Process Parameter</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Standard Value</th>
                  </tr>
                </thead>
                <tbody>
                  {heatTreatmentData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.parameter}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Tempering Hardness Profile Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Tempering Hardness Profile
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Temperature (°C)</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Hardness (HRC)</th>
                  </tr>
                </thead>
                <tbody>
                  {temperingData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.temp}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.hrc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Stock Availability Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heavy Dimension Stock Limits
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
                  {stockAvailability.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Heavy Processing in KSA:</span> 
            1.2312 tool steel round bars and flat sections can be cut to your exact sizes. We can supply massive blocks and precision ground plates tailored to Saudi Arabia's specialized industrial tooling needs.
          </p>
          <p className="text-base font-medium text-gray-600">
            For pricing or structural sizing details, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}