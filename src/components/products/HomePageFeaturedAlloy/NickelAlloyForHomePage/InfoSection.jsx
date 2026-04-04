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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Classification of Nickel-Base Superalloys</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">High-Temperature Engineering</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nickel-based high-temperature alloys are essential for equipment subjected to thermal extremes. Used predominantly in the Saudi aerospace and power generation sectors, these alloys maintain their structural integrity in jet engine hot zones and waste incineration plants. Their ability to resist creep and oxidation at red-hot temperatures ensures the longevity and safety of critical industrial heating hardware.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Corrosion Mitigation</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nickel-based corrosion-resistant alloys are designed for applications involving highly aggressive media. From chemical processing reactors to pharmaceutical grade vessels, these materials provide absolute protection against pitting and stress corrosion cracking. They are critical for the Kingdom\'s sour gas production facilities and hazardous waste treatment plants where reliability is non-negotiable.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Global Specialized Stock in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT specialises in non-standard items and hard-to-find alloy forms, supporting Saudi Arabia’s industrial growth through long-standing global relationships. Our inventory includes premium brands such as HAYNES®, HASTELLOY®, MONEL®, and INCONEL®. Whether from existing stock or through custom indent, we provide the metallurgical solutions required for the Kingdom’s most demanding energy and defense projects.
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