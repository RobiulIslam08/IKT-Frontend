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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Science of the Passive Layer & Durability</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Self-Healing Passive Protection</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The cornerstone of stainless steel is its minimum 10.5% Chromium content. Chromium reacts with oxygen to create a microscopically thin, self-healing "passive layer" of oxide. This layer acts as a barrier, preventing surface corrosion. Higher chromium levels, along with additions of Molybdenum and Nickel, further enhance resistance to aggressive chloride-bearing environments common in Saudi Arabia's coastal energy projects.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Metallurgical Versatility</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Stainless steel is divided into five fundamental categories—Austenitic, Ferritic, Duplex, Martensitic, and Precipitation Hardening. By adding elements like Titanium, Niobium, and Nickel, manufacturers can tailor properties for extreme tensile strength, high ductility, or magnetic requirements, ensuring the perfect fit for everything from subsea valves to aviation structural parts.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Global Supply for Industrial Growth</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a comprehensive stock of premium stainless steel and specialty alloys to empower the Kingdom's industrial vision. We supply fully traceable Austenitic and Duplex grades that withstand atmospheric corrosion in atmospheric conditions and resist severe acids at elevated pressures. Our long-term engineering partnerships ensure reliable sourcing of even the most hard-to-find metallurgical products.
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