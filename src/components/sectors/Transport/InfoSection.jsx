/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transport Sector Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Premium Finished Components for Automotive OEMs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Digital 3D Design & Prototyping</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT utilizes advanced 3D modeling software that seamlessly integrates with customer drawings, allowing for the precise fabrication of highly complex automotive shapes. Our technology enables engineers to trial alternative designs digitally and inexpensively before full-scale production. This optimizes material use and ensures that the final solution is perfectly tuned for high-profile vehicle manufacturers.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Bespoke In-House Laser Processing</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  We maintain total control over quality by never sub-contracting. All work is performed by highly skilled in-house professionals using multi-million pound laser machinery. This leading-edge technology eliminates traditional tooling costs and drastically reduces lead times. By passing these financial savings to you, IKT provides cost-effective, precision-processed parts ready for immediate line installation.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Responsive Logistics & JIT Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Total reliability of supply is paramount in the demanding automotive sector. IKT keeps an extensive range of raw material in stock, backed by the global buying power of our group. Our Saudi Arabian logistics experts help you predict and manage ongoing requirements, while our dedicated vehicle fleet ensures on-time delivery tailored to your specific production schedules and packaging needs.
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