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
          <p className="text-base font-medium text-primary uppercase tracking-wider">NIMONIC Alloy 86 (Nickel-Chromium-Molybdenum-Cerium)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Extreme Thermal & Oxidation Stability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nimonic 86 is a specialized nickel-base alloy containing 25% chromium and 10% molybdenum. The inclusion of 0.03% Cerium provides exceptional rare-earth stabilization, allowing the material to resist aggressive oxidation at service temperatures exceeding 1000°C. This makes it an invaluable asset for Saudi Arabia’s petrochemical heating retorts and gas turbine combustion chambers.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Solution Annealed Mechanical Resilience</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Displaying an ultimate tensile strength of 825 MPa and high elongation at break (42%), Nimonic 86 maintains its structural integrity under severe mechanical load. With a high elastic modulus of 210 GPa, it provides the structural rigidity required for transition ducts and furnace muffles subjected to high-temperature creep stress cycles.
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
                  IKT holds a certified inventory of Nimonic 86 to support the Kingdom’s industrial power and aviation sectors. We provide a full range of certified forms, including high-heat tubing, industrial plates, and seamless pipes. Sourced from globally recognized manufacturers, our stock ensures full metallurgical traceability for all critical energy and aerospace procurement operations.
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