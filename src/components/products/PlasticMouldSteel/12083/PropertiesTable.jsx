// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {

//   // Standard Equivalents
//   const equivalentsData = [
//     { country: 'Germany (DIN)', standard: '1.2083 / X42Cr13' },
//     { country: 'USA (ASTM A681)', standard: '420 Modified' },
//     { country: 'Japan (JIS G4403)', standard: 'SUS420J2' },
//     { country: 'China (GB/T 9943)', standard: '4Cr13' },
//     { country: 'International (ISO 4957)', standard: 'X42Cr13' }
//   ];

//   // Chemical Composition
//   const chemicalData = [
//     { c: '≤ 1.00', si: '≤ 1.00', mn: '0.20 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '12.5 - 13.5' }
//   ];

//   // Mechanical Properties
//   const mechanicalData = [
//     { temp: '400 ℃', value: '1910 MPa' },
//     { temp: '500 ℃', value: '1860 MPa' },
//     { temp: '600 ℃', value: '1130 MPa' },
//     { temp: '650 ℃', value: '930 MPa' }
//   ];

//   // Heat Treatment Steps
//   const heatTreatmentSteps = [
//     { process: "Forging", details: "Pre-heat to 600°C. Heat to forged temp and soak at 800-1100°C. Ensure thorough heating. Do not forge below 650°C. Cool slowly." },
//     { process: "Annealing", details: "Slowly heat to 750-800°C. Cool slowly to 538°C in a heat treatment furnace, then cool in air. Resulting hardness: Max 225 HBS." },
//     { process: "Hardening", details: "High hardenability. Cool in still air. Use of a salt bath or controlled atmosphere furnace is highly recommended to minimize decarburization." },
//     { process: "Quenching", details: "Quenching temperature: 1020~1050°C. Quenching medium: Oil cooling. Resulting hardness approx. 50 HRc." },
//     { process: "Tempering", details: "Tempering temperature: 200-300°C. Final target hardness after tempering: 28-34 HRc." }
//   ];

//   // Supply Range Data
//   const stockRange = [
//     { format: '1.2083 Round Bar', dimensions: 'Diameter: 5mm – 400mm' },
//     { format: '1.2083 Steel Plate', dimensions: 'Thickness: 20mm – 500mm | Width: 200mm – 1400mm' },
//     { format: '1.2083 Steel Block', dimensions: 'Dimensions: 210mm x 500-810mm' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Processing Data</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 1.2083 chemical composition, mechanical limits, and KSA supply ranges.</p>
//         </motion.div>

//         {/* Equivalents and Chemistry Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">

//           {/* Equivalents Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-5 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Grade Equivalents</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Standard / Country</th>
//                     <th className="px-6 py-4 text-left font-bold">Grade</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.country}</td>
//                       <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.standard}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">DIN 17350 Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">P%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">S%</th>
//                     <th className="px-3 py-4 text-center font-bold">Cr%</th>
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
//                       <td className="px-3 py-4 text-center text-gray-700 font-medium">{row.cr}</td>
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
//             <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Mechanical Properties</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Tempering Temp</th>
//                       <th className="px-6 py-4 text-left font-bold">Hardening Value (MPa)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {mechanicalData.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-4 text-left border-r border-gray-100 text-gray-700 font-medium">{row.temp}</td>
//                         <td className="px-6 py-4 text-left text-gray-700 font-medium">{row.value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Heat Treatment Steps */}
//             <motion.div variants={itemVariants} className="lg:col-span-8 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//               <div className="mb-6 border-b border-gray-200 pb-4">
//                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Heat Treatment Protocol
//                  </h3>
//               </div>

//               <div className="flex flex-col gap-4">
//                 {heatTreatmentSteps.map((step, index) => (
//                   <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start">
//                      <span className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-md min-w-[140px] text-center shadow-sm">
//                        {step.process}
//                      </span>
//                      <div>
//                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.details}</p>
//                      </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//         </div>

//         {/* Stock Size Limits Box */}
//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md mb-12">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Supply Range Profile (KSA)</h3>
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

//         {/* Quality & Contact Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-sm md:text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Quality Assured Delivery:</span> 
//               All 1.2083 steel is ISO 9001:2008 assured and undergoes SEP 1921-84 ultrasonic inspection (UT Test). Quality Grades: E/e, D/d, C/c.
//             </p>
//             <p className="text-sm font-medium text-gray-600">If you have any 1.2083 steel inquiries for price or application, please don't hesitate to contact our Saudi Arabian facility at <span className="font-bold">+966-13-3444036</span>.</p>
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
    { country: 'Germany (DIN)', standard: '1.2083 / X42Cr13' },
    { country: 'USA (ASTM A681)', standard: '420 Modified' },
    { country: 'Japan (JIS G4403)', standard: 'SUS420J2' },
    { country: 'China (GB/T 9943)', standard: '4Cr13' },
    { country: 'International (ISO 4957)', standard: 'X42Cr13' }
  ];

  // Chemical Composition
  const chemicalData = [
    { c: '≤ 1.00', si: '≤ 1.00', mn: '0.20 - 0.40', p: '≤ 0.030', s: '≤ 0.030', cr: '12.5 - 13.5' }
  ];

  // Mechanical Properties
  const mechanicalData = [
    { temp: '400 ℃', value: '1910 MPa' },
    { temp: '500 ℃', value: '1860 MPa' },
    { temp: '600 ℃', value: '1130 MPa' },
    { temp: '650 ℃', value: '930 MPa' }
  ];

  // Heat Treatment Steps
  const heatTreatmentSteps = [
    { process: "Forging", details: "Pre-heat to 600°C. Heat to forged temp and soak at 800-1100°C. Ensure thorough heating. Do not forge below 650°C. Cool slowly." },
    { process: "Annealing", details: "Slowly heat to 750-800°C. Cool slowly to 538°C in a heat treatment furnace, then cool in air. Resulting hardness: Max 225 HBS." },
    { process: "Hardening", details: "High hardenability. Cool in still air. Use of a salt bath or controlled atmosphere furnace is highly recommended to minimize decarburization." },
    { process: "Quenching", details: "Quenching temperature: 1020~1050°C. Quenching medium: Oil cooling. Resulting hardness approx. 50 HRc." },
    { process: "Tempering", details: "Tempering temperature: 200-300°C. Final target hardness after tempering: 28-34 HRc." }
  ];

  // Supply Range Data
  const stockRange = [
    { format: '1.2083 Round Bar', dimensions: 'Diameter: 5mm – 400mm' },
    { format: '1.2083 Steel Plate', dimensions: 'Thickness: 20mm – 500mm | Width: 200mm – 1400mm' },
    { format: '1.2083 Steel Block', dimensions: 'Dimensions: 210mm x 500-810mm' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Processing Data</h2>
          </div>
          <p className="text-base text-gray-600">IKT 1.2083 chemical composition, mechanical limits, and KSA supply ranges for precision engineering.</p>
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
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Standard / Country</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Grade Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.country}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.standard}</td>
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
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">S%</th>
                    <th className="px-4 py-4 text-center font-bold">Cr%</th>
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
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.cr}</td>
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
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Tempering Temperature</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Hardening Value (MPa)</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.temp}</td>
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
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Heat Treatment Protocol
              </h3>
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

          {/* Supply Range Profile Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Supply Range Profile (KSA)
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

        {/* Quality Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Quality Assured Delivery:</span>
            All 1.2083 steel is ISO 9001:2008 assured and undergoes SEP 1921-84 ultrasonic inspection (UT Test). Quality Grades: E/e, D/d, C/c.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries or exact material certifications, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}