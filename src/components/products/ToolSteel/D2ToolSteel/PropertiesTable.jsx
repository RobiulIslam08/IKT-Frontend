// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {

//   const equivalentsData = [
//     { standard: 'USA (ASTM)', grade: 'ASTM A681-1999' },
//     { standard: 'Grade / Specification', grade: 'AISI D2' },
//     { standard: 'Material Category', grade: 'Cold Work Tool Steel' }
//   ];

//   const chemicalData = [
//     { element: 'Carbon (C)', content: '1.40 - 1.60' },
//     { element: 'Chromium (Cr)', content: '11.00 - 13.00' },
//     { element: 'Molybdenum (Mo)', content: '0.70 - 1.20' },
//     { element: 'Vanadium (V)', content: '0.50 - 1.10' },
//     { element: 'Silicon (Si)', content: '0.10 - 0.60' },
//     { element: 'Manganese (Mn)', content: '0.20 - 0.60' },
//     { element: 'Phosphorus (P)', content: '≤ 0.030' },
//     { element: 'Sulfur (S)', content: '≤ 0.030' }
//   ];

//   const mechanicalData = [
//     { property: 'Delivery Condition', value: 'Annealed & Machineable' },
//     { property: 'Wear & Abrasion Resistance', value: 'Extremely High' },
//     { property: 'Compression Strength', value: 'High' },
//     { property: 'Distortion (Heat Treated)', value: 'Minimal' }
//   ];

//   const temperingData = [
//     { property: 'Hardness (Tempered @ 150°C)', value: '62 - 61 HRC' },
//     { property: 'Hardness (Tempered @ 200°C)', value: '61 - 60 HRC' },
//     { property: 'Hardness (Tempered @ 250°C)', value: '60 - 59 HRC' },
//     { property: 'Hardness (Tempered @ 300°C)', value: '57 - 56 HRC' },
//     { property: 'Hardness (Tempered @ 350°C)', value: '56 - 55 HRC' },
//     { property: 'Hardness (Tempered @ 400°C)', value: '56 - 55 HRC' }
//   ];

//   const physicalData = [
//     { property: 'Forging Temperature', value: '900 - 1040 °C (Preheat 700°C)' },
//     { property: 'Annealing Temperature', value: '900 °C (Soak 3-4 hrs, Furnace Cool)' },
//     { property: 'Stress Relieving', value: '600 - 650 °C (Furnace or Air Cool)' },
//     { property: 'Quenching (Preheat)', value: '820 ± 15 °C' },
//     { property: 'Quenching (Austenitizing)', value: '1010 ± 6 °C (Air Cool)' }
//   ];

//   const supplyFormats = [
//     { format: 'Hot Rolled Round Bar', astm: 'Diameter 6.4 mm to ≥ 103 mm' },
//     { format: 'Hot Rolled Steel Plate', astm: 'Thickness ≤ 25.4 mm to 305 mm' },
//     { format: 'Flat Bar & Square Block', astm: 'Sawn to specific sizes' },
//     { format: 'Ground Tool Steel Bar / Drill Rod', astm: 'Precision ground to tight tolerances' }
//   ];

//   const processingSteps = [
//     { process: "High-Carbon, High-Chrome", details: "AISI D2 is a high-carbon, high-chromium alloy tool steel. It offers phenomenal wear and abrasion resistance due to the large volumes of carbides embedded in its microstructure." },
//     { process: "Tooling Applications", details: "Highly suited for long-production cold work applications including cutting knives, drawing dies, thread rolling, extrusion dies, shear blades, bending modulus, and tire shredders." },
//     { process: "Thermal Processing", details: "Double tempering is highly recommended for D2 tool steel to optimize mechanical properties. Stress relieving is essential after heavy machining or grinding to minimize the possibility of distortion." }
//   ];

//   const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
//   const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

//         {/* Main Header (Centered) */}
//         <motion.div variants={itemVariants} className="mb-12 text-center">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Specifications</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600">IKT AISI D2 Cold Work Tool Steel chemistry, thermal processing metrics, and material supply standards.</p>
//         </motion.div>

//         {/* Full-Width Horizontal Layout */}
//         <div className="grid grid-cols-1 gap-8">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Global Grade Equivalents
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Grade Specification</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* ASTM Supply Formats Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Material Supply Formats
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Tolerance / Availability</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.format}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.astm}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Chemical Composition (%)
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Content Ratio (%)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.element}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Mechanical Properties Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> General Attributes
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Property Metric</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Tested Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mechanicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Tempering Data Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Hardness & Tempering Profile
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Condition / Treatment</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Tested Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {temperingData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Physical Properties Table */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Thermal Processing Dynamics
//               </h3>
//             </div>
//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Thermal Process</th>
//                     <th className="px-6 py-4 text-center font-bold w-1/2">Standard Temperature</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {physicalData.map((row, index) => (
//                     <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.property}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Engineering Protocol Steps */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="mb-6 border-b border-gray-200 pb-4 text-center">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Application & Characteristics
//               </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] w-[210px] text-center shadow-sm shrink-0">
//                     {step.process}
//                   </span>
//                   <div className="flex-1">
//                     <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//         </div>

//         {/* Processing & Contact Note (Outside the columns) */}
//         <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span> 
//             D2 Cold Work Tool Steel components, including precision ground round bars, robust plates, and customized blocks, are heavily stocked across Saudi Arabia to support rapid heavy-duty tooling and cutting applications.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement inquiries, exact sizing tolerances, or heat treatment guidance, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'USA (ASTM)', grade: 'ASTM A29 / A29M' },
    { standard: 'Europe (DIN EN)', grade: '10083/3' },
    { standard: 'Japan (JIS)', grade: 'G4053' },
    { standard: 'China (GB)', grade: 'GB / GB/T 3077' },
    { standard: 'USA (ASTM)', grade: 'ASTM A681-1999 (D2)' },
    { standard: 'Grade / Specification', grade: 'AISI D2 / O1' },
    { standard: 'Material Category', grade: 'Cold Work Tool Steel' },
    { standard: 'Equivalent Grade', grade: 'DIN 1.2379 / 1.2510 / 69S' }
  ];

  const chemicalData = [
    { element: 'Carbon (C)', content: '0.85 - 1.60' },
    { element: 'Manganese (Mn)', content: '0.20 - 1.40' },
    { element: 'Chromium (Cr)', content: '0.40 - 13.00' },
    { element: 'Tungsten (W)', content: '0.40 - 0.60 (O1)' },
    { element: 'Molybdenum (Mo)', content: '0.70 - 1.20 (D2)' },
    { element: 'Silicon (Si)', content: '0.10 - 0.60' },
    { element: 'Vanadium (V)', content: '0.50 - 1.10 (D2) / ≤ 0.30 (O1)' },
    { element: 'Phosphorus (P)', content: '≤ 0.030' },
    { element: 'Sulfur (S)', content: '≤ 0.040' }
  ];

  const mechanicalData = [
    { property: 'Hardness (Oil Quenched & Tempered)', value: '28 - 34 HRC (O1)' },
    { property: 'Hardness (Annealed Delivery)', value: '≤ 250 HB (Brinell)' },
    { property: 'Yield Strength (0.2%, Hardened @ 50 HRC)', value: '1350 MPa' },
    { property: 'Yield Strength (0.2%, Hardened @ 55 HRC)', value: '1800 MPa' },
    { property: 'Yield Strength (0.2%, Hardened @ 60 HRC)', value: '2150 MPa' },
    { property: 'Yield Strength (0.2%, Hardened @ 62 HRC)', value: '2200 MPa' },
    { property: 'Elastic Modulus (Hardened @ 62 HRC)', value: '193 GPa' },
    { property: 'Elastic Modulus (@ 399°C, 62 HRC)', value: '172 GPa' },
    { property: 'Delivery Condition', value: 'Annealed & Machineable (D2/O1)' },
    { property: 'Wear & Abrasion Resistance', value: 'Extremely High (D2)' },
    { property: 'Compression Strength', value: 'High (D2)' },
    { property: 'Distortion (Heat Treated)', value: 'Minimal (D2/O1)' }
  ];

  const physicalData = [
    { property: 'Forging Temperature', value: '900 - 1040 °C (Preheat 700°C) (D2)' },
    { property: 'Annealing Temperature', value: '740 - 900 °C (Furnace cool slowly)' },
    { property: 'Pre-heating (Hardening)', value: '300 - 500 °C (O1) / 820 ± 15 °C (D2)' },
    { property: 'Hardening (Austenitizing)', value: '780 - 1010 °C (Oil/Air Quench)' },
    { property: 'Tempering Range', value: '100 - 350 °C' },
    { property: 'Stress Relieving', value: '600 - 650 °C (Furnace or Air Cool)' }
  ];

  const supplyFormats = [
    { format: 'Hot Rolled Round Bar', astm: 'Diameter 6.4 mm to ≥ 203.2 mm' },
    { format: 'Hot Rolled Steel Plate', astm: 'Thickness ≤ 25.4 mm to 305 mm' },
    { format: 'Flat Bar & Square Block', astm: 'Sawn to specific sizes / Precision Ground' },
    { format: 'Ground Tool Steel Bar / Drill Rod', astm: 'Precision ground to tight tolerances' }
  ];

  const processingSteps = [
    { process: "High-Carbon, High-Chrome", details: "AISI D2 is a high-carbon, high-chromium alloy tool steel. It offers phenomenal wear and abrasion resistance due to the large volumes of carbides embedded in its microstructure. Highly recommended when greater toughness is required." },
    { process: "High-Carbon Precision (O1)", details: "AISI O1 is an oil-hardening, high-carbon alloy tool steel known for its good machinability and excellent dimensional stability during heat treatment." },
    { process: "Tooling Applications", details: "D2 is highly suited for heavy-duty press tools, general purpose punches, thread rolling, extrusion dies, shear blades, and coining. O1 is preferred for short/medium run forming dies, marking punches, gauges, jigs, drawing punches, and broaches." },
    { process: "Thermal Processing", details: "Double tempering is highly recommended for D2 tool steel to optimize mechanical properties. Stress relieving is essential after heavy machining or grinding to minimize distortion." },
    { process: "D2 Supreme™ Upgrade", details: "For applications requiring higher hardness (62-63 HRC) combined with superior toughness and wear resistance compared to standard D2, consider D2 Supreme™ (DC53 equivalent)." }
  ];

  const stockMetricFlatsDetailed = [
    { thickness: '10mm', widths: '20, 25, 30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '20mm', widths: '20, 25, 30, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '30mm', widths: '35, 40, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '40mm', widths: '50, 60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '50mm', widths: '60, 65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '60mm', widths: '65, 70, 75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '70mm', widths: '75, 80, 85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '80mm', widths: '85, 90, 95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500' },
    { thickness: '90mm', widths: '95, 100, 120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '100mm', widths: '120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '110mm', widths: '120, 125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '120mm', widths: '125, 130, 140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '130mm', widths: '140, 150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '140mm', widths: '150, 160, 180, 200, 250, 300, 320, 350, 400, 500, 550, 600, 700, 800, 900, 1000' },
    { thickness: '150mm', widths: '160, 180, 200, 250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '160mm', widths: '180, 200, 250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '180mm', widths: '200, 250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '190mm', widths: '200, 250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '200mm', widths: '220, 250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '220mm', widths: '250, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '250mm', widths: '260, 300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '280mm', widths: '300, 320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' },
    { thickness: '300mm', widths: '320, 350, 400, 420, 450, 480, 500, 550, 600, 700, 750, 780, 800, 820, 850, 900, 1000' }
  ];

  const stockImperialFlats = [
    { thickness: '1"', widths: '1 1/2, 3/4' },
    { thickness: '1 1/4"', widths: '1/2, 3/4, 1' },
    { thickness: '1 1/2"', widths: '1/2, 5/8, 3/4, 1, 1 1/4' },
    { thickness: '1 3/4"', widths: '1, 1 1/4' },
    { thickness: '2"', widths: '1/2, 5/8, 3/4, 1, 1 1/4' },
    { thickness: '2 1/2"', widths: '1/2, 1, 1 1/2, 1 3/4' },
    { thickness: '3"', widths: '1/2, 3/4, 1, 1 1/2, 2' },
    { thickness: '4"', widths: '1/2, 3/4, 1, 1 1/2, 2, 2 1/2, 3' },
    { thickness: '5"', widths: '1/2, 3/4, 1, 1 1/4, 1 1/2, 2, 3' },
    { thickness: '6"', widths: '1/2, 5/8, 3/4, 1, 1 1/4, 1 1/2, 2' },
    { thickness: '8"', widths: '1/2, 3/4, 1, 1 1/4, 1 1/2' },
    { thickness: '10"', widths: '1/2, 3/4, 1' },
    { thickness: '12"', widths: '1/2, 1' }
  ];

  const roundsHotRolledMetric = ["40", "50", "60", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120", "125", "130", "140", "150", "160", "170", "180", "190", "200", "220", "240", "260", "280", "300", "320", "350", "400"];
  const roundsBrightDrawnMetric = ["10", "12", "15", "16", "18", "20", "25", "30", "35", "40", "45", "50", "60"];
  const roundsBrightDrawnImperial = ["5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "3/4", "7/8", "15/16", "1", "1 1/8", "1 1/4", "1 3/8", "1 1/2", "1 5/8", "1 3/4", "2", "2 1/4", "2 1/2", "2 3/4", "3", "3 1/2", "4"];
  const roundsImperialFull = ["3/8", "7/16", "3/4", "9/16", "5/8", "13/16", "7/8", "15/16", "1", "1 1/16", "1 1/8", "1 3/16", "1 1/4", "1 5/16", "1 3/8", "1 7/16", "1 1/2", "1 5/8", "1 11/16", "1 3/4", "1 7/8", "2", "2 1/8", "2 1/4", "2 3/8", "2 1/2", "2 5/8", "2 3/4", "2 7/8", "3", "3 1/8", "3 1/4", "3 1/2", "4", "4 1/4", "4 1/2", "5", "5 1/4", "5 1/2", "6", "6 1/4", "6 1/2", "7", "8"];
  const squaresImperial = ["1\"", "1 1/2\"", "2\"", "2 1/2\"", "3\"", "3 1/2\"", "4\"", "4 1/2\"", "5\"", "5 1/2\"", "6\"", "6 1/2\"", "7\"", "8\"", "9\"", "10\""];

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
   
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Global Grade Designations
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
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

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
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
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mechanical Properties
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
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
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Physical & Thermal Dynamics
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Metric / Process</th>
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

          {/* ASTM Supply Formats Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> ASTM Supply Formats
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Tolerance / Availability</th>
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

          {/* Specific Alloy Classifications */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Specific Alloy Classifications
              </h3>
            </div>

            <div className="p-6 flex flex-col gap-4">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
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

          {/* Detailed Metric Flats Stock List */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> D2 & O1 Tool Steel Flats & Squares Stock (Metric)
              </h3>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 text-center">
              <p className="text-base text-gray-600">All tool steel flats and squares are cut from plate and can be supplied to any dimensions required. Available in pre-machined economizer or black.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">Thickness (mm)</th>
                    <th className="px-6 py-4 text-center font-bold w-3/4">Available Widths (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {stockMetricFlatsDetailed.map((stock, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base whitespace-nowrap">{stock.thickness}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base leading-relaxed">{stock.widths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Detailed Imperial Flats Stock List */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> D2 & O1 Tool Steel Flats Stock (Imperial)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">Thickness (inch)</th>
                    <th className="px-6 py-4 text-center font-bold w-3/4">Available Widths (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {stockImperialFlats.map((stock, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base whitespace-nowrap">{stock.thickness}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base leading-relaxed">{stock.widths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Stock Availability - Rounds & Squares */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Stock Availability: Rounds & Squares
              </h3>
            </div>
            
            <div className="p-6 grid grid-cols-1 gap-8">
              {/* Metric Rounds */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 text-center border-b border-gray-200 pb-2">Hot Rolled Rounds (Metric Ø mm)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsHotRolledMetric.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 text-center border-b border-gray-200 pb-2">Bright Drawn Rounds (Metric Ø mm)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsBrightDrawnMetric.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Imperial Rounds & Squares */}
              <div className="space-y-6 pt-4">
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 text-center border-b border-gray-200 pb-2">Bright Drawn Rounds (Imperial Ø inch)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsBrightDrawnImperial.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 text-center border-b border-gray-200 pb-2">All Rounds (Imperial Ø inch)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {roundsImperialFull.map(r => (
                      <span key={r} className="px-3 py-1.5 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200">{r}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-3 text-center border-b border-gray-200 pb-2">Squares (Imperial inch)</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {squaresImperial.map(r => (
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
     
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact heat treatment guidance, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}