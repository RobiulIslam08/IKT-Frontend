
// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Number', grade: 'N06625' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4856' },
//     { standard: 'Japan (JIS)', grade: 'NCF 625' },
//     { standard: 'England (BS)', grade: 'NA 21' },
//     { standard: 'France (AFNOR)', grade: 'NC22DNB4M' },
//     { standard: 'Europe (EN)', grade: 'NiCr22Mo9Nb / NiCr23Fe' },
//     { standard: 'Russia (GOST)', grade: 'ХН75МБТЮ' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '58.0 Minimum (Remainder)' },
//     { element: 'Chromium (Cr)', content: '20.00 - 30.00' },
//     { element: 'Molybdenum (Mo)', content: '8.00 - 10.00' },
//     { element: 'Columbium (Nb) + Tantalum (Ta)', content: '3.15 - 4.15' },
//     { element: 'Iron (Fe)', content: '≤ 5.00' },
//     { element: 'Cobalt (Co)', content: '≤ 1.00' },
//     { element: 'Titanium (Ti)', content: '≤ 0.40' },
//     { element: 'Aluminum (Al)', content: '≤ 0.40' },
//     { element: 'Carbon (C)', content: '≤ 0.10' },
//     { element: 'Manganese (Mn)', content: '≤ 0.50' },
//     { element: 'Silicon (Si)', content: '≤ 0.50' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Room Temp)', value: '144,000 psi' },
//     { property: 'Yield Strength (0.2% Offset, Room Temp)', value: '84,000 psi' },
//     { property: 'Elongation in 2" (Room Temp)', value: '44 %' },
//     { property: 'Shear Strength', value: '77,000 - 87,000 psi (530 - 600 MPa)' },
//     { property: 'Rupture Strength', value: '2500 psi (17.2 MPa)' },
//     { property: 'Modulus of Elasticity', value: '30.1 x 10⁶ psi (207.5 GPa)' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.44 g/cm³ (0.305 lb/in³)' },
//     { property: 'Melting Range', value: '1290 - 1350 °C (2350 - 2460 °F)' },
//     { property: 'Specific Heat', value: '427 J/kg-°K (0.102 BTU/lb-°F)' },
//     { property: 'Knoop Hardness', value: '315' },
//     { property: 'Rockwell C Hardness', value: '30 HRC' },
//     { property: 'Brinell Hardness', value: '290' }
//   ];

//   const supplyFormats = [
//     { format: 'Pipe & Tube', astm: 'Seamless: ASTM B444 | Welded: ASTM B705 / B704' },
//     { format: 'Sheet & Plate', astm: 'ASTM B443' },
//     { format: 'Rod & Bar', astm: 'ASTM B446' }
//   ];

//   const processingSteps = [
//     { process: "Grade 2 Annealing", details: "Alloy 625 Grade 2 is heavily heat-treated via a solution-anneal process at a minimum of 1093°C. This specifically dramatically enhances creep strength for environments exceeding 600°C (1112°F)." },
//     { process: "Low Cycle Fatigue (LCF)", details: "A specialized variant of standard 625. LCF material is engineered specifically to resist thermal fatigue and mechanical cycling, making it ideal for exhaust bellows and aircraft expansion joints." },
//     { process: "Corrosion Immunity", details: "Due to its high nickel profile, the alloy acts as a steadfast barrier against chloride-ion stress-corrosion cracking, while the molybdenum handles harsh seawater pitting environments." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Alloy 625 superalloy chemistry, thermal variants, and international supply standards.</p>
//         </motion.div>

//         {/* Masonry Layout Container */}
//         <div className="columns-1 lg:columns-2 gap-8">
          
//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">Global Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Region</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade Designation</th>
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
//                <h3 className="text-base font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Element</th>
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
//                <h3 className="text-base font-bold text-gray-800">Mechanical Properties (Room Temp)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Property</th>
//                     <th className="px-6 py-4 text-left font-bold">Standard Value</th>
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
//                <h3 className="text-base font-bold text-gray-800">Physical & Thermal Dynamics</h3>
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

//           {/* ASTM Supply Range Table */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-base font-bold text-gray-800">ASTM Supply Formats (KSA)</h3>
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
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium text-base">{row.astm}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Thermal Processing Steps */}
//           <motion.div variants={itemVariants} className="break-inside-avoid inline-block w-full mb-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
//             <div className="mb-6 border-b border-gray-200 pb-4">
//                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                  <span className="w-2 h-2 rounded-full bg-primary"></span> Specific Alloy Classifications
//                </h3>
//             </div>

//             <div className="flex flex-col gap-4">
//               {processingSteps.map((step, index) => (
//                 <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
//                    <span className="px-4 py-2 bg-primary text-white text-base font-medium rounded-md min-w-[200px] text-center shadow-sm shrink-0">
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

//         {/* Processing Note Without Button */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Specialized Inventory in KSA:</span> 
//             Inconel Alloy 625 components, including heavy-duty plates, welded/seamless pipes, precision bars, and specialized LCF forms, are heavily stocked across Saudi Arabia to ensure immediate industrial deployment.
//           </p>
//           <p className="text-base font-medium text-gray-600">
//             For critical procurement inquiries, structural sizing details, or exact material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
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
    { standard: 'UNS Number', grade: 'N06625' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4856' },
    { standard: 'Japan (JIS)', grade: 'NCF 625' },
    { standard: 'England (BS)', grade: 'NA 21' },
    { standard: 'France (AFNOR)', grade: 'NC22DNB4M' },
    { standard: 'Europe (EN)', grade: 'NiCr22Mo9Nb / NiCr23Fe' },
    { standard: 'Russia (GOST)', grade: 'ХН75МБТЮ' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '58.0 Minimum (Remainder)' },
    { element: 'Chromium (Cr)', content: '20.00 - 30.00' },
    { element: 'Molybdenum (Mo)', content: '8.00 - 10.00' },
    { element: 'Columbium (Nb) + Tantalum (Ta)', content: '3.15 - 4.15' },
    { element: 'Iron (Fe)', content: '≤ 5.00' },
    { element: 'Cobalt (Co)', content: '≤ 1.00' },
    { element: 'Titanium (Ti)', content: '≤ 0.40' },
    { element: 'Aluminum (Al)', content: '≤ 0.40' },
    { element: 'Carbon (C)', content: '≤ 0.10' },
    { element: 'Manganese (Mn)', content: '≤ 0.50' },
    { element: 'Silicon (Si)', content: '≤ 0.50' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Room Temp)', value: '144,000 psi' },
    { property: 'Yield Strength (0.2% Offset, Room Temp)', value: '84,000 psi' },
    { property: 'Elongation in 2" (Room Temp)', value: '44 %' },
    { property: 'Shear Strength', value: '77,000 - 87,000 psi (530 - 600 MPa)' },
    { property: 'Rupture Strength', value: '2500 psi (17.2 MPa)' },
    { property: 'Modulus of Elasticity', value: '30.1 x 10⁶ psi (207.5 GPa)' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.44 g/cm³ (0.305 lb/in³)' },
    { property: 'Melting Range', value: '1290 - 1350 °C (2350 - 2460 °F)' },
    { property: 'Specific Heat', value: '427 J/kg-°K (0.102 BTU/lb-°F)' },
    { property: 'Knoop Hardness', value: '315' },
    { property: 'Rockwell C Hardness', value: '30 HRC' },
    { property: 'Brinell Hardness', value: '290' }
  ];

  const supplyFormats = [
    { format: 'Pipe & Tube', astm: 'Seamless: ASTM B444 | Welded: ASTM B705 / B704' },
    { format: 'Sheet & Plate', astm: 'ASTM B443' },
    { format: 'Rod & Bar', astm: 'ASTM B446' }
  ];

  const processingSteps = [
    { process: "Grade 2 Annealing", details: "Alloy 625 Grade 2 is heavily heat-treated via a solution-anneal process at a minimum of 1093°C. This specifically dramatically enhances creep strength for environments exceeding 600°C (1112°F)." },
    { process: "Low Cycle Fatigue (LCF)", details: "A specialized variant of standard 625. LCF material is engineered specifically to resist thermal fatigue and mechanical cycling, making it ideal for exhaust bellows and aircraft expansion joints." },
    { process: "Corrosion Immunity", details: "Due to its high nickel profile, the alloy acts as a steadfast barrier against chloride-ion stress-corrosion cracking, while the molybdenum handles harsh seawater pitting environments." }
  ];

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto">

        {/* Main Header (Centered) */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & ASTM Specifications</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Alloy 625 superalloy chemistry, thermal variants, and international supply standards.</p>
        </motion.div>

        {/* Full-Width Horizontal Layout */}
        <div className="grid grid-cols-1 gap-8">

          {/* Equivalents Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Global Grade Equivalents
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Region</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Grade Designation</th>
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

          {/* ASTM Supply Formats Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> ASTM Supply Formats (KSA)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">ASTM Specs</th>
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

          {/* Chemical Composition Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Chemical Composition (%)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
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
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Mechanical Limitations (Room Temp)
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
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
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Physical & Thermal Dynamics
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Metric</th>
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

          {/* Engineering Protocol Steps */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6 border-b border-gray-200 pb-4 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Specific Alloy Classifications
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {processingSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start md:items-center">
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

        </div>

        {/* Processing & Contact Note (Outside the columns) */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Inventory in KSA:</span> 
            Inconel Alloy 625 components, including heavy-duty plates, welded/seamless pipes, precision bars, and specialized LCF forms, are heavily stocked across Saudi Arabia to ensure immediate industrial deployment.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}