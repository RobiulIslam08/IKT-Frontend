// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Designation', grade: 'S31254 (6Mo)' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '1.4547' },
//     { standard: 'France (AFNOR)', grade: 'Z1 CNDU 20.18.06Az' },
//     { standard: 'Europe (EN)', grade: 'X1CrNiMoCuN20-18-7' },
//     { standard: 'Sweden (SIS)', grade: '2378' },
//     { standard: 'Industry Compliance', grade: 'ASTM A182 (F44)' }
//   ];

//   const chemicalData = [
//     { element: 'Iron (Fe)', content: '55.69 (Balance)' },
//     { element: 'Chromium (Cr)', content: '20.00' },
//     { element: 'Nickel (Ni)', content: '18.00' },
//     { element: 'Molybdenum (Mo)', content: '6.10' },
//     { element: 'Nitrogen (N)', content: '0.20' },
//     { element: 'Carbon (C)', content: '0.010' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength', value: '98,600 psi (680 MPa)' },
//     { property: 'Yield Strength', value: '43,500 psi (300 MPa)' },
//     { property: 'Elongation at Break', value: '50 %' },
//     { property: 'Modulus of Elasticity', value: '28,300 ksi (195 GPa)' },
//     { property: 'Shear Modulus', value: '10,900 ksi (75 GPa)' },
//     { property: 'Brinell Hardness', value: '210 BHN' },
//     { property: 'Poisson’s Ratio', value: '0.30' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.0 g/cm³ (0.289 lb/in³)' },
//     { property: 'Melting Range', value: '1320 - 1390 °C (2408 - 2534 °F)' }
//   ];

//   const astmSpecifications = [
//     { form: 'Seamless Pipe & Tube', specs: 'ASTM A312 (Pipe) | ASTM A269' },
//     { form: 'Welded Pipe & Tube', specs: 'ASTM A813, A814 (Pipe) | ASTM A249 (Tube)' },
//     { form: 'Sheet, Plate & Coil', specs: 'ASTM A240' },
//     { form: 'Forgings & Flanges', specs: 'ASTM A182 (F44)' },
//     { form: 'Bars & Rods', specs: 'ASTM A469' }
//   ];

//   const processingSteps = [
//     { process: "Welding Protocols", details: "Requires over-alloyed filler metal. Welding without specialized filler (like Alloy 625 or AWS A5.14 ERNiCrMo-3) will lead to severe loss of strength and corrosion resistance. Electrodes must strictly match AWS A5.11 ENiCrMo-12." },
//     { process: "Machining Complexity", details: "Considered highly difficult to machine due to rapid work hardening and the lack of sulfur. Operations mandate rigid setups, extremely sharp tools, positive feeds, slow speeds, and abundant lubrication." },
//     { process: "254 SMO vs Duplex", details: "While both resist severe corrosion, Duplex features a dual-phase (austenite/ferrite) structure making it generally cheaper due to lower nickel content. However, 254 SMO is a pure super-austenitic stainless steel, making it drastically superior in extremely aggressive pure chloride environments like desalination plants." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT 254 SMO (6Mo) chemistry, mechanical metrics, and global ASTM compliance.</p>
//         </motion.div>

//         {/* Masonry Layout Container: This perfectly prevents any ugly white spaces */}
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
//               <h3 className="text-base font-bold text-gray-800">Physical Dynamics</h3>
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
//                 <span className="w-2 h-2 rounded-full bg-primary"></span> Welding & Fabrication Protocol
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
//             254 SMO (6Mo) super austenitic components, including heavy marine plates, seamless saltwater tubes, industrial pipes, and specialized fasteners, are heavily stocked across Saudi Arabia to support rapid deployment in desalination and petrochemical infrastructure.
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
    { standard: 'UNS Designation', grade: 'S31254 (6Mo)' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '1.4547' },
    { standard: 'France (AFNOR)', grade: 'Z1 CNDU 20.18.06Az' },
    { standard: 'Europe (EN)', grade: 'X1CrNiMoCuN20-18-7' },
    { standard: 'Sweden (SIS)', grade: '2378' },
    { standard: 'Industry Compliance', grade: 'ASTM A182 (F44)' }
  ];

  const chemicalData = [
    { element: 'Iron (Fe)', content: '55.69 (Balance)' },
    { element: 'Chromium (Cr)', content: '20.00' },
    { element: 'Nickel (Ni)', content: '18.00' },
    { element: 'Molybdenum (Mo)', content: '6.10' },
    { element: 'Nitrogen (N)', content: '0.20' },
    { element: 'Carbon (C)', content: '0.010' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength', value: '98,600 psi (680 MPa)' },
    { property: 'Yield Strength', value: '43,500 psi (300 MPa)' },
    { property: 'Elongation at Break', value: '50 %' },
    { property: 'Modulus of Elasticity', value: '28,300 ksi (195 GPa)' },
    { property: 'Shear Modulus', value: '10,900 ksi (75 GPa)' },
    { property: 'Brinell Hardness', value: '210 BHN' },
    { property: 'Poisson’s Ratio', value: '0.30' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.0 g/cm³ (0.289 lb/in³)' },
    { property: 'Melting Range', value: '1320 - 1390 °C (2408 - 2534 °F)' }
  ];

  const astmSpecifications = [
    { form: 'Seamless Pipe & Tube', specs: 'ASTM A312 / A269' },
    { form: 'Welded Pipe & Tube', specs: 'ASTM A813, A814 / A249' },
    { form: 'Sheet, Plate & Coil', specs: 'ASTM A240' },
    { form: 'Forgings & Flanges', specs: 'ASTM A182 (F44)' },
    { form: 'Bars & Rods', specs: 'ASTM A469' }
  ];

  const processingSteps = [
    { process: "Welding Protocols", details: "Requires over-alloyed filler metal. Welding without specialized filler (like Alloy 625 or AWS A5.14 ERNiCrMo-3) will lead to severe loss of strength and corrosion resistance. Electrodes must strictly match AWS A5.11 ENiCrMo-12." },
    { process: "Machining Complexity", details: "Considered highly difficult to machine due to rapid work hardening and the lack of sulfur. Operations mandate rigid setups, extremely sharp tools, positive feeds, slow speeds, and abundant lubrication." },
    { process: "254 SMO vs Duplex", details: "While both resist severe corrosion, Duplex features a dual-phase (austenite/ferrite) structure making it generally cheaper due to lower nickel content. However, 254 SMO is a pure super-austenitic stainless steel, making it drastically superior in extremely aggressive pure chloride environments like desalination plants." }
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
          <p className="text-base font-medium text-gray-600">IKT 254 SMO (6Mo) chemistry, mechanical metrics, and global ASTM compliance.</p>
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

          {/* 6. Welding & Fabrication Protocol */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 w-full text-left">
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Welding & Fabrication Protocol
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
            254 SMO (6Mo) super austenitic components, including heavy marine plates, seamless saltwater tubes, industrial pipes, and specialized fasteners, are heavily stocked across Saudi Arabia to support desalination and petrochemical infrastructure.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}