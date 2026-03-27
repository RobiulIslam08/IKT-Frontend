// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
//   const chemicalData = [
//     {
//       grade: 'Chrome Plated Bar (CK45)',
//       c: '0.42-0.50',
//       si: '0.15-0.35',
//       mn: '0.60-0.90',
//       p: '≤0.035',
//       s: '≤0.035'
//     }
//   ];

//   const mechanicalData = [
//     {
//       grade: 'Chrome Plated Bar',
//       proofStress: '370-450',
//       tensile: '620-780',
//       elongation: '14-18'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="max-w-7xl mx-auto"
//       >
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-primary rounded-full"></div>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//               Chemical & Mechanical Properties
//             </h2>
//           </div>
//           <p className="text-base font-medium text-gray-700 ml-7">
//             Detailed composition and performance characteristics
//           </p>
//         </motion.div>

//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-primary/5 border-b border-border">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Grade</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">C %</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Si %</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Mn %</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">P %</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">S %</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {chemicalData.map((row, index) => (
//                   <motion.tr
//                     key={index}
//                     variants={itemVariants}
//                     className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
//                   >
//                     <td className="px-6 py-4 text-base font-medium text-gray-700">{row.grade}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.c}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.si}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.mn}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.p}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.s}</td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-primary/5 border-b border-border">
//                   <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Grade</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">0.2% Proof Stress (MPa)</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Tensile Strength (MPa)</th>
//                   <th className="px-6 py-4 text-center text-sm font-bold text-foreground">Elongation (%)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mechanicalData.map((row, index) => (
//                   <motion.tr
//                     key={index}
//                     variants={itemVariants}
//                     className="border-b border-border hover:bg-muted/50 transition-colors duration-200"
//                   >
//                     <td className="px-6 py-4 text-base font-medium text-gray-700">{row.grade}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.proofStress}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.tensile}</td>
//                     <td className="px-6 py-4 text-base text-center font-medium text-gray-700">{row.elongation}</td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg"
//         >
//           <p className="text-base font-medium text-gray-700">
//             <span className="font-bold text-foreground">Note:</span> Values shown are typical and may vary based on specific heat treatment and manufacturing processes. Please contact us for detailed material certificates and specifications.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';
// import { Info } from 'lucide-react';

// export default function PropertiesTable() {
  
//   const dimensionalData = [
//     { grade: 'EN8D', equivalent: 'CK45', metric: '10mm to 220mm', imperial: '0.375" to 7.500"' },
//     { grade: 'EN14A', equivalent: '20MnV6', metric: '20mm to 150mm', imperial: '0.875" to 4.000"' },
//     { grade: 'AISI 431', equivalent: 'S29 T', metric: '14mm to 160mm', imperial: '0.750" to 3.000"' },
//     { grade: 'EN19T', equivalent: "42CrMo4 'T'", metric: '25mm to 100mm', imperial: '1.000" to 3.000"' }
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Available Specifications & Dimensions</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">IKT Multi-Grade Hard Chrome Plated Steel Bars</p>
//         </motion.div>

//         {/* Tolerance Highlight Box */}
//         <motion.div variants={itemVariants} className="mb-8 p-6 bg-primary/10 border border-primary/20 rounded-xl flex items-start gap-4">
//           <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 mb-1">Precision Tolerance Notice</h3>
//             <p className="text-base text-gray-700 font-medium">All chrome plated steel bars supplied by IKT adhere strictly to an outside diameter tolerance of <span className="font-bold text-gray-900">ISO f-7</span>, ensuring flawless compatibility with standard hydraulic and pneumatic sealing systems.</p>
//           </div>
//         </motion.div>

//         {/* Dimension & Grades Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">Supply Dimensions by Base Specification</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[600px]">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Base Specification</th>
//                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">Equivalent Standard</th>
//                   <th className="px-6 py-4 font-bold text-center border-r border-gray-100">Metric Range</th>
//                   <th className="px-6 py-4 font-bold text-center">Imperial Range</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dimensionalData.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
//                     <td className="px-6 py-4 text-left border-r border-gray-100">{row.equivalent}</td>
//                     <td className="px-6 py-4 text-center border-r border-gray-100">{row.metric}</td>
//                     <td className="px-6 py-4 text-center">{row.imperial}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Footer Note */}
//         <motion.div variants={itemVariants} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
//             <span className="font-bold text-gray-900 block mb-1">IKT Nationwide Delivery:</span> 
//             All standard sizes of our hard chrome plated bars are delivered directly from stock. For specific bespoke lengths or to inquire about our rapid nationwide delivery network, please contact the IKT sales department.
//           </p>
         
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }

/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function PropertiesTable() {
  
  const dimensionalData = [
    { grade: 'EN8D', equivalent: 'CK45', metric: '10mm to 220mm', imperial: '0.375" to 7.500"' },
    { grade: 'EN14A', equivalent: '20MnV6', metric: '20mm to 150mm', imperial: '0.875" to 4.000"' },
    { grade: 'AISI 431', equivalent: 'S29 T', metric: '14mm to 160mm', imperial: '0.750" to 3.000"' },
    { grade: 'EN19T', equivalent: "42CrMo4 'T'", metric: '25mm to 100mm', imperial: '1.000" to 3.000"' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Available Specifications & Dimensions</h2>
          </div>
          <p className="text-base text-gray-600">IKT Multi-Grade Hard Chrome Plated Steel Bars with precision ISO tolerance standards.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Tolerance Highlight Box */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Precision Tolerance Notice</h3>
              <p className="text-base text-gray-700 font-medium leading-relaxed">
                All chrome plated steel bars supplied by IKT adhere strictly to an outside diameter tolerance of <span className="font-bold text-gray-900">ISO f-7</span>, ensuring flawless compatibility with standard hydraulic and pneumatic sealing systems.
              </p>
            </div>
          </motion.div>

          {/* Dimension & Grades Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Supply Dimensions by Base Specification
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Base Specification</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Equivalent Standard</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Metric Range</th>
                    <th className="px-6 py-4 text-center font-bold">Imperial Range</th>
                  </tr>
                </thead>
                <tbody>
                  {dimensionalData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.grade}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.equivalent}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.metric}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.imperial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>

        {/* Processing & Delivery Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Nationwide Delivery:</span> 
            All standard sizes of our hard chrome plated bars are delivered directly from stock. For specific bespoke lengths or to inquire about our rapid nationwide delivery network across Saudi Arabia, please contact our experts.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical inquiries, please contact our specialized technical team at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}