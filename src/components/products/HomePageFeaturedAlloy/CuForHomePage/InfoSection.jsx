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
          <p className="text-base font-medium text-primary uppercase tracking-wider">The Copper Alloy Technical Advantage</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Thermal & Electrical Performance</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Copper based alloys are renowned for their exceptional electrical and thermal conductivities, making them indispensable for Saudi Arabia’s power generation and high-heat industrial systems. Beyond conductivity, these alloys exhibit high fatigue resistance and excellent formability, allowing for intricate fabrication into solderable and brazed components for critical infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Maritime & Cryogenic Resilience</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  One of the standout features of copper alloys is their inherent biofouling resistance and chemical stability in marine environments. Furthermore, they uniquely retain their mechanical and electrical properties at cryogenic temperatures, providing total reliability for the Kingdom’s offshore desalination plants and liquid gas handling facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Specialized Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a comprehensive stock of premium copper-based alloys and corrosion-resistant specialty metals to support Saudi industrial growth. We offer fully traceable forms including round bars, sheets, and tubes, sourced from globally recognized manufacturers. Our expertise ensures reliable sourcing of both standard and hard-to-find alloys for all regional energy and defense projects.
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