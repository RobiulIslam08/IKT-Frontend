// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';

// export default function PropertiesTable() {
  
//   const gradeComparisons = [
//     { grade: 'P20 Standard', din: '1.2311', hardness: '~300 HB', feature: 'Good Polishability, General Moulds' },
//     { grade: 'P20S (Sulphur)', din: '1.2312', hardness: '280-325 HB', feature: 'High Machinability, No Polishing' },
//     { grade: 'P20N (Nickel)', din: '1.2738', hardness: '280-325 HB', feature: 'Consistent Through-Hardness (>400mm)' }
//   ];

//   // Imperial Flats Matrix
//   const imperialFlats = [
//     { width: "1", thicknesses: ["1/2", "3/4"] },
//     { width: "1 1/4", thicknesses: ["1/2", "3/4", "1"] },
//     { width: "1 1/2", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4"] },
//     { width: "1 3/4", thicknesses: ["1", "1 1/4"] },
//     { width: "2", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4"] },
//     { width: "2 1/2", thicknesses: ["1/2", "1", "1 1/2", "1 3/4"] },
//     { width: "3", thicknesses: ["1/2", "3/4", "1", "1 1/2", "2"] },
//     { width: "4", thicknesses: ["1/2", "3/4", "1", "1 1/2", "2", "2 1/2", "3"] },
//     { width: "5", thicknesses: ["1/2", "3/4", "1", "1 1/4", "1 1/2", "2", "3"] },
//     { width: "6", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4", "1 1/2", "2"] },
//     { width: "8", thicknesses: ["1/2", "3/4", "1", "1 1/4", "1 1/2"] },
//     { width: "10", thicknesses: ["1/2", "3/4", "1"] },
//     { width: "12", thicknesses: ["1/2", "1"] }
//   ];

//   // Imperial Squares List
//   const imperialSquares = [
//     "1", "1 1/2", "2", "2 1/2", "3", "3 1/2", "4", "4 1/2", "5", "5 1/2", "6", "6 1/2", "7", "8", "9", "10"
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
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">IKT Grade Matrix & Stock Profile</h2>
//           </div>
//           <p className="text-base font-medium text-gray-600 ml-7">Comparative data and available KSA dimensions for the P20 series.</p>
//         </motion.div>

//         {/* Grade Comparison Table */}
//         <motion.div variants={itemVariants} className="mb-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
//           <div className="bg-primary/10 px-6 py-4 border-b border-gray-200">
//              <h3 className="text-lg font-bold text-gray-800">P20 Variant Specifications</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 text-sm text-gray-900 border-b border-gray-200">
//                   <th className="px-6 py-4 text-left font-bold border-r border-gray-100">IKT Designation</th>
//                   <th className="px-6 py-4 text-center font-bold border-r border-gray-100">DIN Standard</th>
//                   <th className="px-6 py-4 text-center font-bold border-r border-gray-100">Delivery Hardness</th>
//                   <th className="px-6 py-4 text-left font-bold">Key Performance Feature</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {gradeComparisons.map((row, index) => (
//                   <tr key={index} className="text-gray-700 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
//                     <td className="px-6 py-4 text-left font-bold border-r border-gray-100">{row.grade}</td>
//                     <td className="px-6 py-4 text-center border-r border-gray-100">{row.din}</td>
//                     <td className="px-6 py-4 text-center border-r border-gray-100">{row.hardness}</td>
//                     <td className="px-6 py-4 text-left">{row.feature}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>

//         {/* Inventory Grids */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
//             {/* Imperial Flats Matrix */}
//             <motion.div variants={itemVariants} className="lg:col-span-2 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
//               <div className="mb-6 border-b border-gray-200 pb-4">
//                 <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Imperial Flats Inventory
//                 </h3>
//                 <p className="text-sm font-medium text-gray-600">Cut from block to your exact required dimensions.</p>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6 max-h-[400px] overflow-y-auto pr-2">
//                 {imperialFlats.map((flat, idx) => (
//                   <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
//                     <p className="text-sm font-bold text-gray-900 mb-2 border-b border-gray-200 pb-1">{flat.width}" Width</p>
//                     <p className="text-sm text-gray-700 font-medium">Thicknesses: {flat.thicknesses.join(', ')}"</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Imperial Squares */}
//             <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm h-fit">
//               <div className="mb-6 border-b border-gray-200 pb-4">
//                 <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
//                    <span className="w-2 h-2 rounded-full bg-primary"></span> Imperial Squares
//                 </h3>
//                 <p className="text-sm font-medium text-gray-600">Standard cut block squares.</p>
//               </div>

//               <div>
//                  <p className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Available Sizes (inches)</p>
//                  <div className="flex flex-wrap gap-2">
//                     {imperialSquares.map((item, idx) => (
//                       <span key={idx} className="px-3 py-1.5 bg-gray-50 border border-gray-300 text-gray-700 font-medium rounded-md text-sm shadow-sm cursor-default hover:bg-primary/5 transition-colors">
//                         {item}"
//                       </span>
//                     ))}
//                  </div>
//               </div>
//             </motion.div>

//         </div>

//         {/* Footer Note & Contact with Saudi Context */}
//         <motion.div variants={itemVariants} className="p-6 bg-gray-100 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
//           <p className="text-sm md:text-base font-medium text-gray-700 max-w-3xl">
//             <span className="font-bold text-gray-900 block mb-1">IKT Mould Steel Suppliers (KSA):</span> 
//             Delivering the complete P20 series throughout Saudi Arabia. All stock is cut to size as required. Call our specialized technical team now at <span className="font-bold">+966-13-3444036</span> for rapid nationwide delivery.
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
  
  const gradeComparisons = [
    { grade: 'P20 Standard', din: '1.2311', hardness: '~300 HB', feature: 'Good Polishability, General Moulds' },
    { grade: 'P20S (Sulphur)', din: '1.2312', hardness: '280-325 HB', feature: 'High Machinability, No Polishing' },
    { grade: 'P20N (Nickel)', din: '1.2738', hardness: '280-325 HB', feature: 'Consistent Through-Hardness (>400mm)' }
  ];

  const imperialFlats = [
    { width: "1", thicknesses: ["1/2", "3/4"] },
    { width: "1 1/4", thicknesses: ["1/2", "3/4", "1"] },
    { width: "1 1/2", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4"] },
    { width: "1 3/4", thicknesses: ["1", "1 1/4"] },
    { width: "2", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4"] },
    { width: "2 1/2", thicknesses: ["1/2", "1", "1 1/2", "1 3/4"] },
    { width: "3", thicknesses: ["1/2", "3/4", "1", "1 1/2", "2"] },
    { width: "4", thicknesses: ["1/2", "3/4", "1", "1 1/2", "2", "2 1/2", "3"] },
    { width: "5", thicknesses: ["1/2", "3/4", "1", "1 1/4", "1 1/2", "2", "3"] },
    { width: "6", thicknesses: ["1/2", "5/8", "3/4", "1", "1 1/4", "1 1/2", "2"] },
    { width: "8", thicknesses: ["1/2", "3/4", "1", "1 1/4", "1 1/2"] },
    { width: "10", thicknesses: ["1/2", "3/4", "1"] },
    { width: "12", thicknesses: ["1/2", "1"] }
  ];

  const imperialSquares = [
    "1", "1 1/2", "2", "2 1/2", "3", "3 1/2", "4", "4 1/2", "5", "5 1/2", "6", "6 1/2", "7", "8", "9", "10"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Data & Engineering Specs</h2>
          </div>
          <p className="text-base text-gray-600">IKT Grade Matrix & Stock Profile: Comparative data and available KSA dimensions for the P20 series.</p>
        </motion.div>

        {/* STRICTLY SINGLE COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-8">

          {/* Grade Comparison Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> P20 Variant Specifications
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">IKT Designation</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">DIN Standard</th>
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/4">Delivery Hardness</th>
                    <th className="px-6 py-4 text-center font-bold w-1/4">Key Performance Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeComparisons.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.grade}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.din}</td>
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{row.hardness}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Imperial Flats Matrix Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Imperial Flats Inventory
              </h3>
              <p className="text-base text-gray-600 mt-2">Cut from block to your exact required dimensions.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white text-base text-gray-900 border-t border-b border-gray-200">
                    <th className="px-6 py-4 text-center font-bold border-r border-gray-100 w-1/3">Width (inch)</th>
                    <th className="px-6 py-4 text-center font-bold w-2/3">Available Thicknesses (inch)</th>
                  </tr>
                </thead>
                <tbody>
                  {imperialFlats.map((flat, idx) => (
                    <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center border-r border-gray-100 text-gray-700 font-medium text-base">{flat.width}"</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base leading-relaxed">{flat.thicknesses.join(', ')}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Imperial Squares Table */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-white px-6 py-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Imperial Squares Availability
              </h3>
              <p className="text-base text-gray-600 mt-2">Standard cut block squares available in inches.</p>
            </div>
            <div className="p-8 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-3">
                {imperialSquares.map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-100 rounded text-base font-medium text-gray-700 border border-gray-200 hover:bg-primary/5 transition-colors">
                    {item}"
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Processing Note */}
        <motion.div variants={itemVariants} className="mt-8 p-6 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Mould Steel Suppliers (KSA):</span> 
            Delivering the complete P20 series throughout Saudi Arabia. All stock is cut to size as required. 
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement inquiries, structural sizing details, or exact material certifications, please contact our expert technical team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}