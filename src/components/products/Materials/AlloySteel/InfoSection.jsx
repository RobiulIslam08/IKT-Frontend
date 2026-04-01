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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Industrial Grade Alloy Steel Classification</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Mechanical Integrity</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Alloy steel is engineered by combining carbon steel with various elements like Chromium, Molybdenum, and Nickel to enhance physical properties. AISI 4130 offers excellent strength for aerospace structures, while AISI 4140 provides the high fatigue resistance required for industrial gears. IKT provides these materials in diverse tempers (A, N, T) to suit the Kingdom\'s most demanding construction and energy projects.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Elite Thermal & Vacuum Melting</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  For critical aerospace and defense applications, IKT supplies Vacuum Melted alloy steels like 4340 and 300M (4340 Mod). These materials undergo specialized solution treatment (N&T) to achieve superior purity and fracture toughness. Compliant with MIL-S and AMS specifications, our alloy bars ensure total reliability under extreme cyclic stress in aviation landing gears and rotors.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive KSA Supply Chain</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a massive inventory of certified alloy steel piping and bars to support Saudi Arabia\'s industrial growth. Our stock includes high-temp ASTM A335 pipes, SA213 boiler tubes, and AISI 52100 bearing steels. Sourced from globally recognized manufacturers, we provide full metallurgical traceability and material test reports (MTR) for all regional procurement.
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