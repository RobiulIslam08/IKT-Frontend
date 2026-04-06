/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuclear Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">High-Integrity Solutions for Critical Energy Infrastructure</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Safety-Critical Fabrications</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The nuclear industry demands absolute precision and long-term reliability. IKT provides certified structural steel and bespoke processed components up to EN 1090 Execution Class 4—the highest fabrication standard achievable. Whether for new-build fusion programs like STEP Fusion or life extension projects, our specialist teams ensure that every section meets the rigorous demands of civil nuclear programs.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Uncompromising Traceability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Operating with a foundation of total compliance, our supply chain is accredited to ISO 9001 (Quality) and ISO 14001 (Environmental). We provide an extensive inventory of hollow sections, flats, and plates with full metallurgical traceability. This guarantees total confidence for major contractors working on maintenance, refurbishment, and high-stakes decommissioning projects.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Sustainable & Resilient Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT is committed to "Green Solutions," focusing on reducing embodied carbon and improving material efficiency to align with the nuclear industry’s environmental goals. Our responsive logistics network and whole-market supply principles ensure continuity of supply for planned and unplanned maintenance, helping facilities reduce downtime and maintain global energy security.
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