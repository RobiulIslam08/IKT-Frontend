/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Agricultural Steel Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Robust Solutions for Modern Livestock and Grain Management</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Specialized Livestock Mesh</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides high-performance Expanded and Weld Mesh designed for superior animal welfare. Our Flattened Mesh offers a smooth, mud-preventing surface for stables and pig flooring, while our Raised Mesh is engineered to manicure sheep hooves and provide joint-friendly traction. These solutions ensure structural strength and natural drainage, creating a hygienic environment for high-value herds.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Storage & Barrier Systems</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Protecting your assets is our priority. We offer TCG Mesh for grain drying that allows free air-flow without produce fall-through. For physical protection, our versatile Armco Barrier systems safeguard farm buildings and machinery from vehicle impacts. Complemented by high-grade steel Tubeclamps and self-closing safety gates, our systems remove human error and provide 24/7 protection for livestock.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Reliable Supply Chain for KSA Farming</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT combines vast industry knowledge with a domestic stockholding to support Saudi Arabia’s growing agricultural sector. Our friendly sales team is on hand to provide technical advice for projects of any scale. From industrial-scale grain silos to specialized barn fittings, we deliver the complete package of certified steel products to your farm gate, ensuring long-term value and operational safety.
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