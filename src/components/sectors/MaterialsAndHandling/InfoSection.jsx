/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Materials Handling Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Integrated Steel Supply & High-Capacity Processing</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Strategic OEM Partnerships</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT is a dedicated partner to the Materials Handling sector, supplying directly to OEMs and their sub-contractor networks. Our approach focuses on seamless integration into your production line through expert account management and customized supply chain solutions. We understand the high uptime requirements of automated logistics, ensuring our steel meets the precision demands of next-generation sorting and transport systems.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Advanced Technical Capacity</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  We have expanded our industrial footprint with the addition of two state-of-the-art tube laser machines and a specialized large-diameter plasma cutting line. Combined with our high-speed engineering bar cutting facilities, IKT delivers superior throughput for high-volume materials handling projects. Our ability to process complex geometries with extreme precision allows for the rapid assembly of high-load cranes and warehouse frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Just-In-Time KSA Logistics</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  To meet the Kingdom’s fast-paced industrial growth, IKT offers "Just-In-Time" (JIT) delivery services. Utilizing our strategically placed depots across Saudi Arabia and our wholly-owned transport fleet, we meet specific customer packaging and delivery schedules. This minimizes your inventory costs and ensures that production-ready steel components arrive exactly when they are needed on the front line of your assembly operation.
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