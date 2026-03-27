// /* eslint-disable no-unused-vars */
// 'use client';

// import { motion } from 'framer-motion';
// import { LayersIcon } from 'lucide-react';

// export function InfoSection() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <div className="bg-background">
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="px-6 py-5 md:px-12 md:py-10"
//       >
//         <motion.div variants={itemVariants}>
//           <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             More Information
//           </h1>
//           <p className="text-base font-medium text-gray-700">
//             Chrome Plated Steel Bar - Precision Engineered
//           </p>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="bg-card border border-border rounded-2xl p-8 md:p-10 mb-12"
//         >
//           <div className="flex gap-4 items-start mb-6">
//             <motion.div
//               whileHover={{ rotate: 10, scale: 1.1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <LayersIcon className="w-8 h-8 text-primary shrink-0 mt-1" />
//             </motion.div>
//             <div className="flex-1">
//               <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                 Technical Overview: Chrome Plated Steel Bar - Precision Engineered
//               </h2>
//               <p className="text-base font-medium text-gray-700 leading-relaxed">
//                 Chrome Plated Steel Bar is a precision-engineered product consisting of a medium carbon or alloy steel core with a hard chromium plating applied to the surface. The chrome layer (typically 20-30 microns) provides excellent wear resistance, low friction, and corrosion protection. The bars are precision ground and polished to achieve surface finishes of Ra 0.2 or better, with straightness tolerances suitable for linear bearing and hydraulic cylinder applications. IKT supplies chrome plated bars in standard and custom diameters, conforming to common specifications including ISO f7/f8 tolerances.
//               </p>
//             </div>
//           </div>
//         </motion.div>
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
    <div className="bg-gray-50 py-5 md:py-10">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Material Overview
          </h1>
          <p className="text-lg font-medium text-primary">
            Precision Hard Chrome Plated Steel Rods
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Box 1: Core Characteristics */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <Target className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Superior Surface Protection
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT’s hard chrome plated steel bars are engineered to withstand the harshest industrial environments. The specialized electrolytic chrome plating process deposits a highly dense layer of chromium over the steel core. This significantly boosts surface hardness, drastically lowers friction, and provides a resilient shield against corrosion and abrasive wear.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Processing & Condition */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <LayersIcon className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Multi-Grade Core Options
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Because different applications require different internal mechanical properties, we offer chrome plating across a variety of premium base steels. You can select from standard EN8D (CK45) for general engineering, EN14A (20MnV6) for enhanced weldability, high-tensile EN19T (42CrMo4), or AISI 431 for advanced internal corrosion resistance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Extensive Form Availability */}
          <motion.div variants={itemVariants} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }} className="p-4 bg-primary/10 rounded-xl">
                <PackageOpen className="w-8 h-8 text-primary shrink-0" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  ISO f-7 Precision Tolerance
                </h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Precision is non-negotiable for fluid power and linear motion systems. That is why all IKT hard chrome plated bars are manufactured with an outside diameter tolerance strictly conforming to the ISO f-7 standard. This guarantees an exact fit for hydraulic seals and bearings, preventing leaks and ensuring smooth mechanical operation.
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