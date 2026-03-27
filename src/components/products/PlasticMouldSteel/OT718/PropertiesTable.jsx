// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const chemicalData = [
//     { c: '0.28 - 0.40', si: '0.20 - 0.80', mn: '0.60 - 1.00', cr: '1.40 - 2.00', mo: '0.30 - 0.55', ni: '0.80 - 1.20' }
//   ];

//   const equivalentsData = [
//     { gb: '3Cr2NiMo', din: '1.2738', aisi: 'P20+Ni', iso: '35CrNiMo2' }
//   ];

//   const mechanicalProperties = [
//     { temp: '20°C', tensile: '1100 MPa', yield: '980 MPa', reduction: '49%', elongation: '13%', impact: '20 J/cm²', elasticity: '205 GPa' },
//     { temp: '200°C', tensile: '1050 MPa', yield: '925 MPa', reduction: '51%', elongation: '14%', impact: '32 J/cm²', elasticity: '200 GPa' },
//     { temp: '400°C', tensile: '850 MPa', yield: '770 MPa', reduction: '52%', elongation: '16%', impact: '42 J/cm²', elasticity: '185 GPa' }
//   ];

//   const physicalProperties = [
//     { temp: '20°C', density: '7.80 g/cm³', thermalCond: '36.0 W/(m·K)', expansion: '-' },
//     { temp: '100°C', density: '-', thermalCond: '33.4 W/(m·K)', expansion: '11.9 x 10^-6 /°C' },
//     { temp: '200°C', density: '7.75 g/cm³', thermalCond: '31.4 W/(m·K)', expansion: '12.2 x 10^-6 /°C' },
//     { temp: '300°C', density: '-', thermalCond: '30.1 W/(m·K)', expansion: '12.5 x 10^-6 /°C' },
//     { temp: '400°C', density: '7.70 g/cm³', thermalCond: '29.3 W/(m·K)', expansion: '12.8 x 10^-6 /°C' }
//   ];

//   const criticalTemps = [
//     { point: 'Ac1', temp: '770 °C' },
//     { point: 'Ac3', temp: '825 °C' },
//     { point: 'Ar1', temp: '640 °C' },
//     { point: 'Ar3', temp: '755 °C' },
//     { point: 'Ms', temp: '335 °C' },
//     { point: 'Mf', temp: '180 °C' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Performance Specs</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT OT718 / 1.2738 properties, equivalents, and thermal metrics.</p>
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
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">GB</th>
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN</th>
//                     <th className="px-6 py-4 text-center font-bold border-r border-gray-100">AISI</th>
//                     <th className="px-6 py-4 text-center font-bold">JIS / ISO</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {equivalentsData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.gb}</td>
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.din}</td>
//                       <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.aisi}</td>
//                       <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.iso}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//           {/* Chemical Composition Table */}
//           <motion.div variants={itemVariants} className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//             <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">C%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Si%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
//                     <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
//                     <th className="px-3 py-4 text-center font-bold">Ni%</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {chemicalData.map((row, index) => (
//                     <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.c}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.si}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mn}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.cr}</td>
//                       <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.mo}</td>
//                       <td className="px-3 py-4 text-center text-gray-700 font-medium">{row.ni}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>

//         </div>

//         {/* Mechanical Properties at various temperatures */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Mechanical Properties (Based on 340 HBW Sample)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px]">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Temperature</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Tensile Strength</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Yield Strength</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Reduction</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Elongation</th>
//                   <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Impact Toughness</th>
//                   <th className="px-4 py-4 text-center font-bold">Elastic Modulus</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mechanicalProperties.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.temp}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.tensile}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.yield}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.reduction}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.elongation}</td>
//                     <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium">{row.impact}</td>
//                     <td className="px-4 py-4 text-center text-gray-700 font-medium">{row.elasticity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Physical Properties & Critical Temp Grid */}
//         <div className="grid lg:grid-cols-12 gap-8 mb-12">
//             {/* Physical Properties */}
//             <motion.div variants={itemVariants} className="lg:col-span-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Physical Properties & Thermal Dynamics</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[500px]">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Temp (°C)</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Density</th>
//                       <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Thermal Conductivity</th>
//                       <th className="px-4 py-4 text-center font-bold">Linear Expansion</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {physicalProperties.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-4 py-3 text-center border-r border-gray-100 text-gray-700 font-medium">{row.temp}</td>
//                         <td className="px-4 py-3 text-center border-r border-gray-100 text-gray-700 font-medium">{row.density}</td>
//                         <td className="px-4 py-3 text-center border-r border-gray-100 text-gray-700 font-medium">{row.thermalCond}</td>
//                         <td className="px-4 py-3 text-center text-gray-700 font-medium">{row.expansion}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>

//             {/* Critical Temperatures */}
//             <motion.div variants={itemVariants} className="lg:col-span-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md h-fit">
//               <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//                  <h3 className="text-lg font-bold text-gray-800">Critical Temperatures</h3>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                       <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Critical Point</th>
//                       <th className="px-6 py-4 text-left font-bold">Approx. Temp</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {criticalTemps.map((row, index) => (
//                       <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                         <td className="px-6 py-3 text-left border-r border-gray-100 text-gray-700 font-medium">{row.point}</td>
//                         <td className="px-6 py-3 text-left text-gray-700 font-medium">{row.temp}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//         </div>

//         {/* Processing Note with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <div className="max-w-4xl">
//             <p className="text-sm md:text-base font-medium text-gray-700 mb-2">
//               <span className="font-bold text-gray-900">IKT Supply Formats in KSA:</span> 
//               OT718 is supplied in precision cut round bars, plates, flat bars, and squares. We provide customized annealing and pre-hardness configurations tailored to your needs.
//             </p>
//             <p className="text-sm font-medium text-gray-600">Contact our expert sales team in Saudi Arabia at <span className="font-bold">+966-13-3444036</span> for rapid pricing and availability.</p>
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
    { c: '0.28 - 0.40', si: '0.20 - 0.80', mn: '0.60 - 1.00', cr: '1.40 - 2.00', mo: '0.30 - 0.55', ni: '0.80 - 1.20' }
  ];

  const equivalentsData = [
    { gb: '3Cr2NiMo', din: '1.2738', aisi: 'P20+Ni', iso: '35CrNiMo2' }
  ];

  const mechanicalProperties = [
    { temp: '20°C', tensile: '1100 MPa', yield: '980 MPa', reduction: '49%', elongation: '13%', impact: '20 J/cm²', elasticity: '205 GPa' },
    { temp: '200°C', tensile: '1050 MPa', yield: '925 MPa', reduction: '51%', elongation: '14%', impact: '32 J/cm²', elasticity: '200 GPa' },
    { temp: '400°C', tensile: '850 MPa', yield: '770 MPa', reduction: '52%', elongation: '16%', impact: '42 J/cm²', elasticity: '185 GPa' }
  ];

  const physicalProperties = [
    { temp: '20°C', density: '7.80 g/cm³', thermalCond: '36.0 W/(m·K)', expansion: '-' },
    { temp: '100°C', density: '-', thermalCond: '33.4 W/(m·K)', expansion: '11.9 x 10^-6 /°C' },
    { temp: '200°C', density: '7.75 g/cm³', thermalCond: '31.4 W/(m·K)', expansion: '12.2 x 10^-6 /°C' },
    { temp: '300°C', density: '-', thermalCond: '30.1 W/(m·K)', expansion: '12.5 x 10^-6 /°C' },
    { temp: '400°C', density: '7.70 g/cm³', thermalCond: '29.3 W/(m·K)', expansion: '12.8 x 10^-6 /°C' }
  ];

  const criticalTemps = [
    { point: 'Ac1', temp: '770 °C' },
    { point: 'Ac3', temp: '825 °C' },
    { point: 'Ar1', temp: '640 °C' },
    { point: 'Ar3', temp: '755 °C' },
    { point: 'Ms', temp: '335 °C' },
    { point: 'Mf', temp: '180 °C' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Performance Specs</h2>
          </div>
          <p className="text-base text-gray-600">IKT OT718 / 1.2738 properties, equivalents, and thermal metrics for high-performance tooling.</p>
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
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">GB</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">AISI</th>
                    <th className="px-6 py-4 text-center font-bold">JIS / ISO</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.gb}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.din}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.aisi}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.iso}</td>
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
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-3 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                    <th className="px-3 py-4 text-center font-bold">Ni%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.si}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-3 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mo}</td>
                      <td className="px-3 py-4 text-center text-gray-700 font-medium text-base">{row.ni}</td>
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
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Mechanical Properties (340 HBW Sample)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Temperature</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Tensile Strength</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Yield Strength</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Reduction</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Elongation</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Impact Toughness</th>
                    <th className="px-4 py-4 text-center font-bold">Elastic Modulus</th>
                  </tr>
                </thead>
                <tbody>
                  {mechanicalProperties.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.temp}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.tensile}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.yield}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.reduction}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.elongation}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.impact}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.elasticity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Physical Properties Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Physical Properties & Thermal Dynamics
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Temp (°C)</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Density</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Thermal Conductivity</th>
                    <th className="px-4 py-4 text-center font-bold">Linear Expansion</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalProperties.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.temp}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.density}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.thermalCond}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.expansion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Critical Temperatures Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Critical Temperatures
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/2">Critical Point</th>
                    <th className="px-6 py-4 text-center font-bold w-1/2">Approximate Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  {criticalTemps.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base w-1/2">{row.point}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.temp}</td>
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
            <span className="font-bold text-gray-900">IKT Supply Formats in KSA:</span> 
            OT718 is supplied in precision cut round bars, plates, flat bars, and squares. We provide customized annealing and pre-hardness configurations tailored to industrial mould requirements across Saudi Arabia.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries or structural sizing details, please contact our expert sales team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}