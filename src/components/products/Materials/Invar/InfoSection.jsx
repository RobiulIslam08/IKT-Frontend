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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Nickel-Iron Controlled Expansion Alloy (Invar)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Dimensional Stability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Invar (also known as Alloy 36) is a nickel-iron alloy with a uniquely low coefficient of thermal expansion. It exhibits near-zero expansion at ambient temperatures, making it critical for the high-precision aerospace molds and optical measurement systems across Saudi Arabia\'s industrial frameworks. Its consistent performance from absolute zero (-459.67°F) to 200°C ensures absolute reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Robust Mechanical Resilience</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Despite its specialized thermal traits, Invar maintains strong mechanical benchmarks with a typical tensile strength of 445-810 MPa. It demonstrates excellent fracture toughness (120-150 MPa.m½) and is highly resistant to fatigue. This metallurgical durability makes it a formidable choice for cryogenic liquid gas transport and structural oscillations in scientific hardware.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Elite Environmental Resistance</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Invar is engineered to withstand aggressive environments, showing excellent resistance (5/5) to seawater, fresh water, and strong alkalis. Its stable resistivity and high thermal conductivity (12-15 W/m.K) provide optimized thermal heat management, supporting the Kingdom\'s most advanced petrochemical and nuclear power thermal structural requirements.
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