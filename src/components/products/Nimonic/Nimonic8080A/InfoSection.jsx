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
          <p className="text-base font-medium text-primary uppercase tracking-wider">NIMONIC Alloy 80A (UNS N07080 / Werkstoff 2.4952)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precipitation-Hardened Excellence</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nimonic 80A is a nickel-chromium alloy strengthened by additions of titanium and aluminum. Developed for service at temperatures up to 815°C (1500°F), it maintains high tensile and creep-rupture properties. Because of its low cobalt content, it remains a critical material for nuclear steam generators and high-performance gas turbine discs across Saudi Arabia’s utility infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Thermal Resilience & Fabrication</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The alloy exhibits superb oxidation resistance thanks to its chromium content, which forms a stable protective layer. In its aged condition, it achieves an ultimate tensile strength of 994 MPa. IKT ensures optimal performance through controlled solution annealing (~1080°C) and aging (~700-750°C), providing the material integrity required for racing engine spindles and aerospace discs.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Robust KSA Supply Infrastructure</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a comprehensive inventory of NIMONIC 80A to support the Kingdom’s industrial power and motorsport sectors. We provide certified forms, including seamless tubes, industrial plates, and precision-turned round bars. Sourced from globally recognized manufacturers, our stock ensures full metallurgical traceability for all critical high-temperature procurement operations.
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