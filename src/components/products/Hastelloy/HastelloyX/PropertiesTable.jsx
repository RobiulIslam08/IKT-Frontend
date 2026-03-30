// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Designation', grade: 'N06002' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4665' },
//     { standard: 'ASTM Standards', grade: 'ASTM B435, ASTM B572' },
//     { standard: 'AMS Specifications', grade: 'AMS 5536, 5588, 5754, 5798, 5799, 5888' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: 'Balance' },
//     { element: 'Chromium (Cr)', content: '20.50 - 23.00' },
//     { element: 'Iron (Fe)', content: '17.00 - 20.00' },
//     { element: 'Molybdenum (Mo)', content: '8.00 - 10.00' },
//     { element: 'Cobalt (Co)', content: '0.50 - 2.50' },
//     { element: 'Manganese (Mn)', content: '≤ 1.00' },
//     { element: 'Silicon (Si)', content: '≤ 1.00' },
//     { element: 'Carbon (C)', content: '0.05 - 0.15' },
//     { element: 'Phosphorus (P)', content: '≤ 0.04' },
//     { element: 'Sulfur (S)', content: '≤ 0.03' }
//   ];

//   const mechanicalData = [
//     { property: 'Ultimate Tensile Strength', value: '95,000 - 111,000 psi (~655 - 765 MPa)' },
//     { property: 'Yield Strength (0.2% Offset)', value: '34,800 - 55,100 psi (~240 - 380 MPa)' },
//     { property: 'Elongation at Break', value: '35.0 % - 44.2 %' },
//     { property: 'Hardness (Rockwell B)', value: '86 - 92 HRB' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.22 g/cm³ (0.297 lb/in³)' },
//     { property: 'Melting Range', value: '1260 - 1355 °C (2300 - 2471 °F)' },
//     { property: 'Liquidus Threshold', value: '1355 °C (2471 °F)' },
//     { property: 'Solidus Threshold', value: '1260 °C (2300 °F)' },
//     { property: 'Maximum Service Temp (Air)', value: '1095 °C (2003 °F)' },
//     { property: 'Modulus of Elasticity', value: '20,200 ksi (139 GPa)' },
//     { property: 'Thermal Conductivity', value: '16.9 W/m-K (117 BTU-in/hr-ft²-°F)' },
//     { property: 'Linear CTE', value: '15.0 µm/m-°C (8.33 µin/in-°F)' }
//   ];

//   const supplyFormats = [
//     { format: 'Plate, Sheet & Coil', specs: 'Fully compliant with ASTM B435 & AMS specifications' },
//     { format: 'Seamless Pipe & Tube', specs: 'Designed for extreme high-heat industrial transfer' },
//     { format: 'Structural Forgings', specs: 'Heavy-duty forged components for gas turbines' },
//     { format: 'Hardware & Fasteners', specs: 'Precision bolts and fixtures for aviation engineering' }
//   ];

//   const processingSteps = [
//     { process: "Thermal Application Range", details: "Hastelloy X is specifically designed to conquer prolonged exposure in thermal applications up to 2003°F (1095°C), heavily utilizing its robust Ni-Cr-Fe-Mo matrix to repel intense oxidation." },
//     { process: "Fabrication & Ductility", details: "Possesses excellent ductility, allowing it to be easily cold-formed and machined using standard industrial tooling, making it far superior to more temperamental high-heat alloys." },
//     { process: "Aviation & Petrochemical Profile", details: "Extensively relied upon in the construction of gas turbine engine transition ducts, afterburners, and high-pressure petrochemical heating retorts across the industrial spectrum." }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Hastelloy X chemistry, extreme physical limits, and global ASTM compliance.</p>
//         </motion.div>

//         {/* Masonry Layout Container: Prevents any empty white spaces */}
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
//               <h3 className="text-base font-bold text-gray-800">Industrial Form Availability</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <tbody>
//                   {supplyFormats.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium text-base w-1/3">{row.format}</td>
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
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Application & Thermal Profile
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
//             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
//             Hastelloy X (UNS N06002) structural components, including heavy thermal plates, seamless pipes, high-heat forged parts, and aviation fasteners, are strictly stocked across Saudi Arabia to support rapid deployment in extreme heat and gas turbine environments.
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
    { standard: 'UNS Designation', grade: 'N06002' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4665' },
    { standard: 'ASTM Standards', grade: 'ASTM B435, ASTM B572' },
    { standard: 'AMS Specifications', grade: 'AMS 5536, 5588, 5754, 5798, 5799, 5888' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: 'Balance' },
    { element: 'Chromium (Cr)', content: '20.50 - 23.00' },
    { element: 'Iron (Fe)', content: '17.00 - 20.00' },
    { element: 'Molybdenum (Mo)', content: '8.00 - 10.00' },
    { element: 'Cobalt (Co)', content: '0.50 - 2.50' },
    { element: 'Manganese (Mn)', content: '≤ 1.00' },
    { element: 'Silicon (Si)', content: '≤ 1.00' },
    { element: 'Carbon (C)', content: '0.05 - 0.15' },
    { element: 'Phosphorus (P)', content: '≤ 0.04' },
    { element: 'Sulfur (S)', content: '≤ 0.03' }
  ];

  const mechanicalData = [
    { property: 'Ultimate Tensile Strength', value: '95,000 - 111,000 psi (~655 - 765 MPa)' },
    { property: 'Yield Strength (0.2% Offset)', value: '34,800 - 55,100 psi (~240 - 380 MPa)' },
    { property: 'Elongation at Break', value: '35.0 % - 44.2 %' },
    { property: 'Hardness (Rockwell B)', value: '86 - 92 HRB' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.22 g/cm³ (0.297 lb/in³)' },
    { property: 'Melting Range', value: '1260 - 1355 °C (2300 - 2471 °F)' },
    { property: 'Maximum Service Temp (Air)', value: '1095 °C (2003 °F)' },
    { property: 'Modulus of Elasticity', value: '20,200 ksi (139 GPa)' },
    { property: 'Thermal Conductivity', value: '16.9 W/m-K' },
    { property: 'Linear CTE', value: '15.0 µm/m-°C' }
  ];

  const supplyFormats = [
    { format: 'Plate, Sheet & Coil', specs: 'Fully compliant with ASTM B435 & AMS specifications' },
    { format: 'Seamless Pipe & Tube', specs: 'Designed for extreme high-heat industrial transfer' },
    { format: 'Structural Forgings', specs: 'Heavy-duty forged components for gas turbines' },
    { format: 'Hardware & Fasteners', specs: 'Precision bolts and fixtures for aviation engineering' }
  ];

  const processingSteps = [
    { process: "Thermal Application Range", details: "Hastelloy X is specifically designed to conquer prolonged exposure in thermal applications up to 2003°F (1095°C), heavily utilizing its robust Ni-Cr-Fe-Mo matrix to repel intense oxidation." },
    { process: "Fabrication & Ductility", details: "Possesses excellent ductility, allowing it to be easily cold-formed and machined using standard industrial tooling, making it far superior to more temperamental high-heat alloys." },
    { process: "Aviation & Petrochemical Profile", details: "Extensively relied upon in the construction of gas turbine engine transition ducts, afterburners, and high-pressure petrochemical heating retorts across the industrial spectrum." }
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
          <p className="text-base font-medium text-gray-600">IKT Hastelloy X chemistry, extreme physical limits, and global ASTM compliance.</p>
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

          {/* 5. Industrial Form Availability Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Form Availability</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-t border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Material Format</th>
                    <th className="px-6 py-4 font-bold w-1/2">Specification Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  {supplyFormats.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.format}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.specs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 6. Application & Thermal Profile */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 w-full text-left">
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Application & Thermal Profile
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
            <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
            Hastelloy X structural components, including heavy thermal plates, seamless pipes, tubes, and precision forged aviation parts, are heavily stocked across Saudi Arabia to support rapid deployment in extreme high-heat environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM/AMS certifications, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}