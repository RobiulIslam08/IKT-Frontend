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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Comprehensive Titanium Grade Inventory</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Versatile Mechanical Portfolio</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a deep range of Titanium grades tailored for specific industrial demands. From the unalloyed Grade 2 (CP Titanium) known for excellent weldability and formability to the high-strength Grade 5 (Ti-6Al-4V) alpha-beta alloy, our materials serve the Kingdom’s most critical engineering thresholds. Grade 23 (ELI) further offers optimized ductility and fracture toughness for medical implants.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Welding & Fabrication</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Supporting the massive Saudi offshore and desalination sectors, IKT stocks AWS A5.16 certified MIG and TIG filler wires across all major grades (ErTi-2, 5, 7, 12). These high-purity wires ensure defect-free joints in corrosive environments, particularly for Grade 7 (Palladium-enhanced) and Grade 12 (Nickel-Moly enhanced) systems that combat aggressive crevice corrosion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Supply Logistics in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Our Saudi-based inventory holds extensive stocks of Titanium Round Bars (ASTM B348), Plates (ASTM B265), and specialized medical round bars (ASTM F67). We provide full metallurgical traceability and Material Test Reports (MTR) for every grade, ranging from small-diameter medical rods (4mm) to large industrial round bars (304.8mm) for heavy energy sector deployment.
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