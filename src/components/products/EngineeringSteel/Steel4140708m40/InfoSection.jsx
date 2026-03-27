// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';
// import { Target, LayersIcon, PackageOpen } from 'lucide-react';

// export function InfoSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
//   };

//   return (
//     <div className="bg-gray-50 py-5 md:py-10">
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <motion.div variants={itemVariants} className="text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Material Overview
//           </h1>
//           <p className="text-lg font-medium text-primary">
//             Precision Hard Chrome Plated Steel Rods
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-8">
//           {/* Box 1: Core Characteristics */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex flex-col md:flex-row gap-6 items-start">
//               <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
//                 <Target className="w-8 h-8 text-primary shrink-0" />
//               </motion.div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                   Superior Surface Protection
//                 </h2>
//                 <p className="text-base font-medium text-gray-700 leading-relaxed">
//                   IKT’s hard chrome plated steel bars are engineered to withstand the harshest industrial environments. The specialized electrolytic chrome plating process deposits a highly dense layer of chromium over the steel core. This significantly boosts surface hardness, drastically lowers friction, and provides a resilient shield against corrosion and abrasive wear.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Box 2: Processing & Condition */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex flex-col md:flex-row gap-6 items-start">
//               <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
//                 <LayersIcon className="w-8 h-8 text-primary shrink-0" />
//               </motion.div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                   Multi-Grade Core Options
//                 </h2>
//                 <p className="text-base font-medium text-gray-700 leading-relaxed">
//                   Because different applications require different internal mechanical properties, we offer chrome plating across a variety of premium base steels. You can select from standard EN8D (CK45) for general engineering, EN14A (20MnV6) for enhanced weldability, high-tensile EN19T (42CrMo4), or AISI 431 for advanced internal corrosion resistance.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Box 3: Extensive Form Availability */}
//           <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex flex-col md:flex-row gap-6 items-start">
//               <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
//                 <PackageOpen className="w-8 h-8 text-primary shrink-0" />
//               </motion.div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3">
//                   ISO f-7 Precision Tolerance
//                 </h2>
//                 <p className="text-base font-medium text-gray-700 leading-relaxed">
//                   Precision is non-negotiable for fluid power and linear motion systems. That is why all IKT hard chrome plated bars are manufactured with an outside diameter tolerance strictly conforming to the ISO f-7 standard. This guarantees an exact fit for hydraulic seals and bearings, preventing leaks and ensuring smooth mechanical operation.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

// export default InfoSection;
/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Material Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            AISI 4140 Quenched and Tempered Structural Alloy Steel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Material Performance */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  High Strength and Fatigue Resistance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  AISI 4140 (EN19) is a chromium-molybdenum manganese-containing low alloy steel. It is highly valued for its exceptional fatigue strength, abrasion resistance, and torsional strength. Commonly used in gas and oil industries, it provides the necessary toughness for gears, shafts, and spindles. For applications requiring even better weldability, AISI 4130 is an available alternative.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Heat Treatment & Hardness */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Treated Delivery Conditions
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT supplies AISI 4140 in various conditions including annealed, as rolled, or the 'T' condition. In its quenched and tempered state, it achieves a hardness of 28-34 HRC. Annealed delivery stock maintains a hardness of less than 250 HB, ensuring excellent machinability for precision components like ejectors, piston rods, and crankshafts.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Flexible Supply Formats */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Custom Sizing & KSA Logistics
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  We maintain a comprehensive inventory in Saudi Arabia, providing AISI 4140 in round bars (hot rolled and bright drawn), flat bars, plates, and hexagonal bars. Our in-house processing facility can saw round bars to your required lengths or cut rectangular pieces from plate to your specific dimensions. We also offer precision ground tool steel bars to tight tolerances.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;