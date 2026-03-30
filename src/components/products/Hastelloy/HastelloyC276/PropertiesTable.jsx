// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const equivalentsData = [
//     { standard: 'UNS Designation', grade: 'N10276' },
//     { standard: 'Germany (Werkstoff Nr.)', grade: '2.4819' },
//     { standard: 'Europe (EN)', grade: 'NiMo16Cr15W' },
//     { standard: 'Japan (JIS)', grade: 'NW 0276' },
//     { standard: 'Russia (GOST)', grade: 'ХН65МВУ' },
//     { standard: 'Industry Compliance', grade: 'ISO 9001, 14001, 18001, PED' }
//   ];

//   const chemicalData = [
//     { element: 'Nickel (Ni)', content: '57.00 (Balance)' },
//     { element: 'Molybdenum (Mo)', content: '15.00 - 17.00' },
//     { element: 'Chromium (Cr)', content: '14.50 - 16.50' },
//     { element: 'Iron (Fe)', content: '4.00 - 7.00' },
//     { element: 'Tungsten (W)', content: '3.00 - 4.50' },
//     { element: 'Cobalt (Co)', content: '≤ 2.50' },
//     { element: 'Manganese (Mn)', content: '≤ 1.00' },
//     { element: 'Vanadium (V)', content: '≤ 0.35' },
//     { element: 'Silicon (Si)', content: '≤ 0.080' },
//     { element: 'Carbon (C)', content: '≤ 0.010' },
//     { element: 'Phosphorus (P)', content: '≤ 0.040 / 0.025' },
//     { element: 'Sulfur (S)', content: '≤ 0.030 / 0.010' }
//   ];

//   const mechanicalData = [
//     { property: 'Tensile Strength (Annealed Sheet)', value: '115,500 psi (~796 MPa)' },
//     { property: 'Yield Strength (Annealed Sheet)', value: '54,600 psi (~376 MPa)' },
//     { property: 'Tensile Strength (Annealed Bar)', value: '110,000 psi (~758 MPa)' },
//     { property: 'Yield Strength (Annealed Bar)', value: '52,600 psi (~362 MPa)' },
//     { property: 'Elongation at Break (Bar / Sheet)', value: '62 % / 60 %' },
//     { property: 'Rockwell B Hardness', value: '87 HRB' }
//   ];

//   const physicalData = [
//     { property: 'Density', value: '8.89 g/cm³ (0.321 lb/in³)' },
//     { property: 'Melting Range', value: '1323 - 1371 °C (2415 - 2500 °F)' },
//     { property: 'Elastic Modulus', value: '29,700 ksi (205 GPa)' },
//     { property: 'Thermal Expansion (24-93°C / 75-200°F)', value: '11.2 µm/m-°C (6.2 µin/in-°F)' },
//     { property: 'Thermal Conductivity (-100°F to 2000°F)', value: '8.6 W/m-K to 28.1 W/m-K' },
//     { property: 'Electrical Resistivity', value: '1.30 microhm-m (51 microhm-in.)' }
//   ];

//   const astmSpecifications = [
//     { form: 'Seamless Pipe & Tube', specs: 'ASTM B622' },
//     { form: 'Welded Pipe & Tube', specs: 'ASTM B619 (Pipe) | ASTM B626 (Tube)' },
//     { form: 'Sheet, Strip & Plate', specs: 'ASTM B575' },
//     { form: 'Rod, Bar & Wire', specs: 'ASTM B574' },
//     { form: 'Fittings & Forgings', specs: 'Fitting: ASTM B366 | Forging: ASTM B564' }
//   ];

//   const processingSteps = [
//     { process: "Welding Protocols", details: "Highly responsive to standard welding methods including Gas Tungsten Arc (GTA/TIG), Gas Metal Arc (MA/MIG), Shielded Metal Arc (SMA/Stick), Electron Beam (EBW), and Plasma Arc (PAW)." },
//     { process: "Restricted Welding Methods", details: "Due to strict metallurgical sensitivities, Submerged Arc Welding (SAW) is strictly not recommended as it frequently results in hot cracking and severe structural distortion." },
//     { process: "C276 vs Alloy C4 Comparison", details: "While Alloy C4 utilizes a Ni-Cr-Mo chemistry with less iron, Hastelloy C276 includes crucial tungsten (3-4.5%) and higher iron, creating a superior barrier against highly localized pitting and severe crevice degradation." }
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
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Hastelloy C276 chemistry, mechanical contrast, physical parameters, and global ASTM compliance.</p>
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

//         {/* Processing Note (Outside the masonry columns) */}
//         <motion.div variants={itemVariants} className="mt-4 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
//           <p className="text-base font-medium text-gray-700 mb-2">
//             <span className="font-bold text-gray-900">IKT Extreme Logistics in KSA:</span>
//             Hastelloy C276 structural components, including highly resilient chemical plates, seamless pipes, robust tubes, and precision fasteners, are strictly stocked across Saudi Arabia to support rapid deployment in high-stakes chemical processing environments.
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
    { standard: 'UNS Designation', grade: 'N10276' },
    { standard: 'Germany (Werkstoff Nr.)', grade: '2.4819' },
    { standard: 'Europe (EN)', grade: 'NiMo16Cr15W' },
    { standard: 'Japan (JIS)', grade: 'NW 0276' },
    { standard: 'Russia (GOST)', grade: 'ХН65МВУ' },
    { standard: 'Industry Compliance', grade: 'ISO 9001, 14001, 18001, PED' }
  ];

  const chemicalData = [
    { element: 'Nickel (Ni)', content: '57.00 (Balance)' },
    { element: 'Molybdenum (Mo)', content: '15.00 - 17.00' },
    { element: 'Chromium (Cr)', content: '14.50 - 16.50' },
    { element: 'Iron (Fe)', content: '4.00 - 7.00' },
    { element: 'Tungsten (W)', content: '3.00 - 4.50' },
    { element: 'Cobalt (Co)', content: '≤ 2.50' },
    { element: 'Manganese (Mn)', content: '≤ 1.00' },
    { element: 'Vanadium (V)', content: '≤ 0.35' },
    { element: 'Silicon (Si)', content: '≤ 0.080' },
    { element: 'Carbon (C)', content: '≤ 0.010' },
    { element: 'Phosphorus (P)', content: '≤ 0.040 / 0.025' },
    { element: 'Sulfur (S)', content: '≤ 0.030 / 0.010' }
  ];

  const mechanicalData = [
    { property: 'Tensile Strength (Annealed Sheet)', value: '115,500 psi (~796 MPa)' },
    { property: 'Yield Strength (Annealed Sheet)', value: '54,600 psi (~376 MPa)' },
    { property: 'Tensile Strength (Annealed Bar)', value: '110,000 psi (~758 MPa)' },
    { property: 'Yield Strength (Annealed Bar)', value: '52,600 psi (~362 MPa)' },
    { property: 'Elongation at Break (Bar / Sheet)', value: '62 % / 60 %' },
    { property: 'Rockwell B Hardness', value: '87 HRB' }
  ];

  const physicalData = [
    { property: 'Density', value: '8.89 g/cm³ (0.321 lb/in³)' },
    { property: 'Melting Range', value: '1323 - 1371 °C (2415 - 2500 °F)' },
    { property: 'Elastic Modulus', value: '29,700 ksi (205 GPa)' },
    { property: 'Thermal Expansion (24-93°C)', value: '11.2 µm/m-°C (6.2 µin/in-°F)' },
    { property: 'Thermal Conductivity (Max Range)', value: '8.6 W/m-K to 28.1 W/m-K' },
    { property: 'Electrical Resistivity', value: '1.30 microhm-m' }
  ];

  const astmSpecifications = [
    { form: 'Seamless Pipe & Tube', specs: 'ASTM B622' },
    { form: 'Welded Pipe & Tube', specs: 'ASTM B619 (Pipe) | ASTM B626 (Tube)' },
    { form: 'Sheet, Strip & Plate', specs: 'ASTM B575' },
    { form: 'Rod, Bar & Wire', specs: 'ASTM B574' },
    { form: 'Fittings & Forgings', specs: 'Fitting: ASTM B366 | Forging: ASTM B564' }
  ];

  const processingSteps = [
    { process: "Welding Protocols", details: "Highly responsive to standard welding methods including Gas Tungsten Arc (GTA/TIG), Gas Metal Arc (MA/MIG), Shielded Metal Arc (SMA/Stick), Electron Beam (EBW), and Plasma Arc (PAW)." },
    { process: "Restricted Welding Methods", details: "Due to strict metallurgical sensitivities, Submerged Arc Welding (SAW) is strictly not recommended as it frequently results in hot cracking and severe structural distortion." },
    { process: "C276 vs Alloy C4 Comparison", details: "While Alloy C4 utilizes a Ni-Cr-Mo chemistry with less iron, Hastelloy C276 includes crucial tungsten (3-4.5%) and higher iron, creating a superior barrier against highly localized pitting and severe crevice degradation." }
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
          <p className="text-base font-medium text-gray-600">IKT Hastelloy C276 chemistry, mechanical contrast, physical parameters, and global ASTM compliance.</p>
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
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
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
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
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
            Hastelloy C276 structural components, including chemical-grade plates, seamless pipes, tubes, and precision fasteners, are heavily stocked across Saudi Arabia to ensure immediate deployment in high-stakes acidic environments.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details, or exact ASTM material certification, please consult our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}