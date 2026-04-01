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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Industrial Grade Carbon Steel Classification</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Versatile Carbon Content</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Carbon steel is categorized based on its carbon content by weight, ranging up to 2.1%. Low-carbon steel (0.05-0.30%) offers excellent ductility for pipes, while medium-carbon variants balance strength and wear resistance for automotive parts. High-carbon grades provide the extreme hardness required for springs and edged tools across Saudi Arabia\'s manufacturing landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Thermal Processing</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Proper thermal management is critical for carbon steel fabrication. Forging temperatures vary significantly by grade; for instance, 0.2% carbon steel requires temperatures up to 1321°C (2410°F). IKT ensures that all specialized steel products are processed under exact metallurgical limits to maintain structural integrity and prevent burning during heavy industrial forging.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Robust Supply Infrastructure in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds an extensive inventory of carbon steel piping and fittings compliant with ASTM A106, A53, and API 5L standards. We support the Kingdom’s energy and infrastructure growth by providing fully traceable seamless pipes, boiler tubes, and high-strength industrial plates sourced from globally recognized manufacturers.
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