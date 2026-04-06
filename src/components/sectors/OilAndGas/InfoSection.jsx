/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Oil & Gas Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">High-Performance Materials for Global Energy Infrastructure</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Oil Field Grade Specialists</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT specializes in the supply of critical materials for the Oil, Gas, and Petrochemical industries. We provide the full range of "oil patch grades" including high-integrity Nickel Alloys, Stainless Steel, and Titanium. Our material expertise ensures that bespoke, fully finished components meet the most demanding designs for wellheads, valves, and completion tools across Saudi Arabia’s energy landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Single-Source Manufacturing Capability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Through our integrated manufacturing ecosystem, we offer a single-source solution for the energy sector. This includes production control and precision machining for downhole drilling components and subsurface hardware. By ensuring total traceability and rigorous quality standards, IKT delivers front-line ready products that maintain operational efficiency and safety in hazardous offshore environments.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Global Logistics & Extreme Environment Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT maintains a massive inventory of precision strips, sheets, and forged rings to support world-leading manufacturers. As a major supplier to the spiral wound gasket industry, we understand the technical needs of companies operating in the most challenging environments. Our logistics network ensures worldwide delivery directly to your door, backed by domestic KSA stock for rapid project deployment.
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