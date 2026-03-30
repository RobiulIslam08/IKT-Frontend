// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Designation', grade: 'N02200' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4066' },
//     { standard: 'Europe (EN)', grade: 'Ni 99.2' },
//     { standard: 'Japan (JIS)', grade: 'NW 2200' },
//     { standard: 'England (BS)', grade: 'NA 11' },
//     { standard: 'France (AFNOR)', grade: 'N-100M' },
//     { standard: 'Russia (GOST)', grade: 'НП-2' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '99.00 Minimum' },
//     { element: 'Iron (Fe)', content: '≤ 0.40' },
//     { element: 'Copper (Cu)', content: '≤ 0.25' },
//     { element: 'Manganese (Mn)', content: '≤ 0.35' },
//     { element: 'Silicon (Si)', content: '≤ 0.35' },
//     { element: 'Carbon (C)', content: '≤ 0.15' },
//     { element: 'Sulfur (S)', content: '≤ 0.010' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Hot Finished Rod/Bar)', value: '60 - 85 ksi (413 - 586 MPa)' },
//     { property: 'Yield Strength (Hot Finished Rod/Bar)', value: '15 - 45 ksi (103 - 310 MPa)' },
//     { property: 'Tensile Strength (Annealed Sheet)', value: '55 - 75 ksi (379 - 517 MPa)' },
//     { property: 'Yield Strength (Annealed Sheet)', value: '15 - 30 ksi (103 - 206 MPa)' },
//     { property: 'Tensile Strength (Annealed Plate)', value: '55 - 80 ksi (379 - 551 MPa)' },
//     { property: 'Yield Strength (Annealed Plate)', value: '15 - 40 ksi (103 - 275 MPa)' },
//     { property: 'Elongation at Break (Average)', value: '35 % - 60 %' },
//     { property: 'Hardness (Annealed Plate / Sheet)', value: '45 - 75 HRB / 70 HRB Max' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.89 g/cm³ (0.321 lb/in³)' },
//     { property: 'Melting Range', value: '1435 - 1446 °C (2615 - 2635 °F)' },
//     { property: 'Liquidus Threshold', value: '1446 °C (2635 °F)' },
//     { property: 'Solidus Threshold', value: '1435 °C (2615 °F)' },
//     { property: 'Thermal Conductivity', value: '70.2 W/m-K (487 BTU-in/hr-ft²-°F)' },
//     { property: 'Specific Heat Capacity', value: '0.456 J/g-°C (0.109 BTU/lb-°F)' },
//     { property: 'Linear CTE', value: '13.3 µm/m-°C (7.39 µin/in-°F)' },
//     { property: 'Curie Temperature', value: '360 °C (680 °F)' }
//   ];

//   const astmSpecifications = [
//     { form: 'Seamless Pipe & Tube', specs: 'ASTM B161' },
//     { form: 'Welded Pipe & Tube', specs: 'ASTM B622' },
//     { form: 'Sheet & Plate', specs: 'ASTM B162' },
//     { form: 'Solid Rod & Bar', specs: 'ASTM B160' },
//     { form: 'Industrial Fittings', specs: 'ASTM B163' }
//   ];

//   const processingSteps = [
//     { process: "Alloy 200 vs 201 Comparison", details: "While Nickel 200 possesses higher base strength (72,000 psi ultimate tensile), Nickel 201 is specifically a low-carbon modification (0.02% max C) designed to resist graphitization and embrittlement at continuous operating temperatures above 315°C (600°F)." },
//     { process: "Machining Complexity", details: "Classified as moderate to difficult to machine. The alloy's extremely high shear strength causes it to work-harden rapidly. Extensive heat is generated during metal removal, requiring rigid setups and heavy-duty machinery for drilling." },
//     { process: "Coolant Recommendations", details: "Unlike standard alloys, machining operations on Nickel 200 are often performed with little to no cutting fluid. However, robust boring and face-turning operations remain highly achievable on conventional industrial machines." }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Nickel Alloy 200 chemistry, physical dynamics, and rigorous ASTM supply standards.</p>
//         </motion.div>

//         {/* Masonry Layout Container: Prevents empty white spaces below tables */}
//         <div className="columns-1 lg:columns-2 gap-8">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Global Grade Designations</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade Specification</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.standard}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.grade}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Alloying Element</th>
//                     <th className="px-6 py-4 text-left font-bold">Content Ratio (%)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.element}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.content}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Mechanical Properties Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Mechanical Limitations (Room Temp)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property Metric</th>
//                     <th className="px-6 py-4 text-left font-bold">Tested Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mechanicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Physical Properties Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Metric</th>
//                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {physicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base">{row.property}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* ASTM Supply Formats Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//               <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Material Format</th>
//                     <th className="px-6 py-4 text-left font-bold">ASTM Specs</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {astmSpecifications.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.form || row.format}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.specs}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Engineering Protocol Steps */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//               <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Machining & Processing Profile
//               </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                   <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
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

//         {/* Processing Note (Outside the columns) */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Heavy Logistics in KSA:</span> 
//             Nickel Alloy 200 structural materials, encompassing pure plates, seamless pipes, solid rods, and high-conductivity tubes, are heavily stocked across Saudi Arabia to empower rapid deployment in the electronics and chemical processing sectors.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'UNS Designation', grade: 'N02200' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4066' },
    { standard: 'Europe (EN)', grade: 'Ni 99.2' },
    { standard: 'Japan (JIS)', grade: 'NW 2200' },
    { standard: 'England (BS)', grade: 'NA 11' },
    { standard: 'France (AFNOR)', grade: 'N-100M' },
    { standard: 'Russia (GOST)', grade: 'НП-2' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '99.00 Minimum' },
    { element: 'Iron (Fe)', content: '≤ 0.40' },
    { element: 'Copper (Cu)', content: '≤ 0.25' },
    { element: 'Manganese (Mn)', content: '≤ 0.35' },
    { element: 'Silicon (Si)', content: '≤ 0.35' },
    { element: 'Carbon (C)', content: '≤ 0.15' },
    { element: 'Sulfur (S)', content: '≤ 0.010' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Hot Finished Rod/Bar)', value: '60 - 85 ksi (413 - 586 MPa)' },
    { property: 'Yield Strength (Hot Finished Rod/Bar)', value: '15 - 45 ksi (103 - 310 MPa)' },
    { property: 'Tensile Strength (Annealed Sheet)', value: '55 - 75 ksi (379 - 517 MPa)' },
    { property: 'Yield Strength (Annealed Sheet)', value: '15 - 30 ksi (103 - 206 MPa)' },
    { property: 'Tensile Strength (Annealed Plate)', value: '55 - 80 ksi (379 - 551 MPa)' },
    { property: 'Yield Strength (Annealed Plate)', value: '15 - 40 ksi (103 - 275 MPa)' },
    { property: 'Elongation at Break (Average)', value: '35 % - 60 %' },
    { property: 'Hardness (Annealed Plate / Sheet)', value: '45 - 75 HRB / 70 HRB Max' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.89 g/cm³ (0.321 lb/in³)' },
    { property: 'Melting Range', value: '1435 - 1446 °C (2615 - 2635 °F)' },
    { property: 'Thermal Conductivity', value: '70.2 W/m-K' },
    { property: 'Specific Heat Capacity', value: '0.456 J/g-°C' },
    { property: 'Linear CTE', value: '13.3 µm/m-°C' },
    { property: 'Curie Temperature', value: '360 °C (680 °F)' }
  ];

  const astmSpecifications = [
    { form: 'Seamless Pipe & Tube', specs: 'ASTM B161' },
    { form: 'Welded Pipe & Tube', specs: 'ASTM B622' },
    { form: 'Sheet & Plate', specs: 'ASTM B162' },
    { form: 'Solid Rod & Bar', specs: 'ASTM B160' },
    { form: 'Industrial Fittings', specs: 'ASTM B163' }
  ];

  const processingSteps = [
    { process: "Alloy 200 vs 201 Comparison", details: "While Nickel 200 possesses higher base strength (72,000 psi ultimate tensile), Nickel 201 is specifically a low-carbon modification (0.02% max C) designed to resist graphitization and embrittlement at continuous operating temperatures above 315°C (600°F)." },
    { process: "Machining Complexity", details: "Classified as moderate to difficult to machine. The alloy's extremely high shear strength causes it to work-harden rapidly. Extensive heat is generated during metal removal, requiring rigid setups and heavy-duty machinery for drilling." },
    { process: "Coolant Recommendations", details: "Unlike standard alloys, machining operations on Nickel 200 are often performed with little to no cutting fluid. However, robust boring and face-turning operations remain highly achievable on conventional industrial machines." }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Nickel Alloy 200 chemistry, physical dynamics, and rigorous ASTM supply standards.</p>
        </motion.div>

        {/* Single Column Vertical Stack */}
        <div className="flex flex-col gap-10">

          {/* 1. Global Grade Designations Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Global Grade Designations</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
                    <th className="px-6 py-4 font-bold w-1/2">Grade Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.standard}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 2. Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Chemical Composition (%)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Alloying Element</th>
                    <th className="px-6 py-4 font-bold w-1/2">Content Ratio (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.element}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 3. Mechanical Limitations Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Mechanical Limitations (Room Temp)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Property Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2">Tested Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 4. Physical Dynamics Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Physical Dynamics</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2">Standard Value</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.property}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 5. ASTM Supply Formats Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">ASTM Specs</th>
                  </tr>
                </thead>
                <tbody>
                  {astmSpecifications.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.form}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 6. Machining & Processing Profile */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 w-full text-left">
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Machining & Processing Profile
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-5 rounded-lg flex flex-col sm:flex-row gap-5 items-start md:items-center">
                  <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md min-w-[210px] text-center shadow-sm shrink-0">
                    {step.process}
                  </span>
                  <div className="flex-1 text-left">
                    <p className="text-base text-gray-700 font-medium leading-relaxed">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Heavy Logistics in KSA:</span>
            Nickel Alloy 200 structural materials, encompassing pure plates, seamless pipes, solid rods, and high-conductivity tubes, are heavily stocked across Saudi Arabia to empower rapid deployment in the electronics and chemical processing sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}