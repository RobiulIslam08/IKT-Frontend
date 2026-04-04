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
          <p className="text-base font-medium text-primary uppercase tracking-wider">The Aluminium Technical Advantage</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Versatile Lightweight Strength</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Aluminium alloys provide a unique combination of lightness and durability, making them hard to beat in the modern industrial landscape. Abundant in nature and highly abundant in nature, aluminium bar and sheet products are critical for applications requiring extreme weight reduction without compromising structural integrity, such as Saudi Arabia\'s aviation frames and commercial transportation systems.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Durability & Metallurgical Flexibility</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Aluminium is strong, durable, impermeable, and corrosion-resistant. It can be alloyed with numerous elements to enhance specific properties—from extreme flexibility to high-stress endurance. This flexibility allows for various surface finishes and forms, ensuring suitability for everything from intricate medical assemblies to large-scale architectural projects and industrial machinery.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Environmental Sustainability in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  One of the most significant benefits of aluminium is that it is 100% recyclable, making it an environmentally friendly choice for the Kingdom’s "Vision 2030" sustainability goals. IKT provides a premium stock of traceable aluminium alloys that deliver high-performance solutions for energy, transportation, and consumer sectors while ensuring an eco-conscious industrial cycle.
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