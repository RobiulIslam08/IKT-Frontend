// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
//   const chemicalData = [
//     { grade: 'AISI 4130', c: '0.28-0.33', si: '0.15-0.35', mn: '0.40-0.60', cr: '0.80-1.10', mo: '0.15-0.25', ni: '0.50 Max', p: '0.025 Max', s: '0.025 Max' }
//   ];

//   const equivalentsData = [
//     { aisi: 'AISI 4130', din: 'DIN 1.7218', bs: '708A25 / 708M25', other: '25CrMo4, 30CrMo, SCM430' }
//   ];

//   // Bespoke Cut Flats & Squares mapping directly from plate
//   const customFlats = [
//     { thick: "10mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "20mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "30mm", widths: ["35", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "40mm", widths: ["50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "50mm", widths: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "60mm", widths: ["65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "70mm", widths: ["75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "80mm", widths: ["85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
//     { thick: "90mm", widths: ["95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "100mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "110mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "120mm", widths: ["125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "130mm", widths: ["140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "140mm", widths: ["150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
//     { thick: "150mm", widths: ["160", "180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "160mm", widths: ["180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "180mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "190mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "200mm", widths: ["220", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "220mm", widths: ["250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "250mm", widths: ["260", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "280mm", widths: ["300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
//     { thick: "300mm", widths: ["320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Availability</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">Complete material specifications for IKT AISI 4130 Alloy Steel</p>
//         </motion.div>

//         {/* Chemical Composition Table */}
//         <motion.div variants={itemVariants} className="mb-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Chemical Composition (%)</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-4 py-3 text-left font-bold">Grade</th>
//                   <th className="px-4 py-3 font-bold text-center">C%</th>
//                   <th className="px-4 py-3 font-bold text-center">Si%</th>
//                   <th className="px-4 py-3 font-bold text-center">Mn%</th>
//                   <th className="px-4 py-3 font-bold text-center">Cr%</th>
//                   <th className="px-4 py-3 font-bold text-center">Mo%</th>
//                   <th className="px-4 py-3 font-bold text-center">Ni%</th>
//                   <th className="px-4 py-3 font-bold text-center">P%</th>
//                   <th className="px-4 py-3 font-bold text-center">S%</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//                   <td className="px-4 py-4 text-left font-bold border-r border-gray-100">{chemicalData[0].grade}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].c}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].si}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].mn}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].cr}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].mo}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].ni}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].p}</td>
//                   <td className="px-4 py-4 text-center">{chemicalData[0].s}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Equivalents Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Approximate Equivalent Specifications</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold">AISI Standard</th>
//                   <th className="px-6 py-4 font-bold text-center">DIN Standard</th>
//                   <th className="px-6 py-4 font-bold text-center">BS 970 Standard</th>
//                   <th className="px-6 py-4 font-bold text-center">Other Global Equivalents</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {equivalentsData.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 text-left font-bold">{row.aisi}</td>
//                     <td className="px-6 py-4 text-center">{row.din}</td>
//                     <td className="px-6 py-4 text-center">{row.bs}</td>
//                     <td className="px-6 py-4 text-center">{row.other}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Massively Custom Cut Flats & Squares Matrix */}
//         <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
//           <div className="mb-8 border-b border-gray-200 pb-4">
//             <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-2">
//                <span className="w-2 h-2 rounded-full bg-primary"></span> Bespoke Cut AISI 4130 Flats, Squares & Blocks
//             </h3>
//             <p className="text-gray-600 font-medium">We actively cut all our AISI 4130 flats and squares directly from robust steel plates. This allows us to supply highly specific, custom dimensions that reduce your machining time and material waste.</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-x-12 gap-y-6">
//             {customFlats.map((flat, idx) => (
//               <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
//                 <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//                   <span className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-bold rounded-md shadow-sm">
//                     {flat.thick} Thick
//                   </span>
//                   <div className="flex-1">
//                     <p className="text-sm font-bold text-gray-800 mb-2">Available Widths (mm):</p>
//                     <p className="text-sm text-gray-600 font-medium leading-relaxed">
//                       {flat.widths.join(', ')}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Footer Note */}
//         <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
//           <p className="text-sm md:text-base font-medium text-gray-700">
//             <span className="font-bold text-gray-900">Custom Sizing:</span> If you cannot find your exact required dimension in the list above, please contact IKT directly. As we cut from large plates, we can accommodate almost any bespoke size request.
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
  const chemicalData = [
    { grade: 'AISI 4130', c: '0.28-0.33', si: '0.15-0.35', mn: '0.40-0.60', cr: '0.80-1.10', mo: '0.15-0.25', ni: '0.50 Max', p: '0.025 Max', s: '0.025 Max' }
  ];

  const equivalentsData = [
    { aisi: 'AISI 4130', din: 'DIN 1.7218', bs: '708A25 / 708M25', other: '25CrMo4, 30CrMo, SCM430' }
  ];

  // Bespoke Cut Flats & Squares mapping directly from plate
  const customFlats = [
    { thick: "10mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "20mm", widths: ["20", "25", "30", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "30mm", widths: ["35", "40", "50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "40mm", widths: ["50", "60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "50mm", widths: ["60", "65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "60mm", widths: ["65", "70", "75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "70mm", widths: ["75", "80", "85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "80mm", widths: ["85", "90", "95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500"] },
    { thick: "90mm", widths: ["95", "100", "120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "100mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "110mm", widths: ["120", "125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "120mm", widths: ["125", "130", "140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "130mm", widths: ["140", "150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "140mm", widths: ["150", "160", "180", "200", "250", "300", "320", "350", "400", "500", "550", "600", "700", "800", "900", "1000"] },
    { thick: "150mm", widths: ["160", "180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "160mm", widths: ["180", "200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "180mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "190mm", widths: ["200", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "200mm", widths: ["220", "250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "220mm", widths: ["250", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "250mm", widths: ["260", "300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "280mm", widths: ["300", "320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] },
    { thick: "300mm", widths: ["320", "350", "400", "420", "450", "480", "500", "550", "600", "700", "750", "780", "800", "820", "850", "900", "1000"] }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Specifications & Stock Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Complete material specifications and bespoke stock availability for IKT AISI 4130 Alloy Steel.</p>
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
              <table className="w-full border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Grade</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">C%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Si%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mn%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Cr%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Mo%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">Ni%</th>
                    <th className="px-4 py-4 text-center font-bold border-r border-gray-100">P%</th>
                    <th className="px-4 py-4 text-center font-bold">S%</th>
                  </tr>
                </thead>
                <tbody>
                  {chemicalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.grade}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.c}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.si}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mn}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.cr}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.mo}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.ni}</td>
                      <td className="px-4 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.p}</td>
                      <td className="px-4 py-4 text-center text-gray-700 font-medium text-base">{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Equivalent Specifications Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Approximate Equivalent Specs
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">AISI Standard</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">DIN Standard</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">BS 970 Standard</th>
                    <th className="px-6 py-4 text-center font-bold w-1/4">Global Equivalents</th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentsData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.aisi}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.din}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.bs}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Custom Cut Flats & Squares Matrix */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Bespoke Cut AISI 4130 Stock
              </h3>
              <p className="text-base text-gray-600 mt-2 px-6">We cut all AISI 4130 flats and squares directly from plate. Specific custom dimensions are available to reduce machining waste.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">Thickness (mm)</th>
                    <th className="px-6 py-4 text-center font-bold w-3/4">Available Widths (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {customFlats.map((flat, idx) => (
                    <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base whitespace-nowrap">{flat.thick}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base leading-relaxed">{flat.widths.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Processing & Contact Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Inventory in KSA:</span> 
            AISI 4130 alloy steel components, including bespoke cut flats, blocks, and precision ground bars, are heavily stocked across Saudi Arabia to ensure immediate industrial deployment. 
          </p>
          <p className="text-base font-medium text-gray-600">
            If you cannot find your exact required dimension, please contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}