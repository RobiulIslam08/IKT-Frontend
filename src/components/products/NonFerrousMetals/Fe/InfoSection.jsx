/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Material Overview</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Invar 36® Controlled Expansion Superalloy</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Unmatched Thermal Stability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Invar 36® (UNS K93600) is a unique 36% nickel-iron alloy designed for applications where dimensional changes due to temperature fluctuation must be absolute minimal. It boasts a rate of thermal expansion roughly one-tenth that of standard carbon steel at temperatures up to 400°F (204°C). This stability makes it critical for Saudi Arabia\'s specialized electronic packaging and aeronautical instrumentation.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Versatile Mechanical Engineering</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Available in Billet, Rod, and Bar formats, Invar 36 is often used in conjunction with high-expansion alloys to generate mechanical motion upon temperature change. Whether used for precision clock balances or cryogenic structural rods, its metallurgical profile ensures that sensitive electronic packages in telecommunications remain perfectly aligned and operational under fluctuating environmental stress.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Infrastructure Supply in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a certified inventory of Invar 36 bars and rods compliant with ASTM F1684, AMS 23011, and MIL-1-23011 standards. We provide fully traceable materials to support the Kingdom’s defense, aviation, and advanced scientific research sectors. Our supply ensures full compliance with UNS K93603 specifications for rapid deployment in high-stakes precision engineering projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default InfoSection;