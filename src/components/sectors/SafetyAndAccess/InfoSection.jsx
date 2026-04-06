/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Safety & Access Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Total Service from Initial Advice to Final Delivery</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">One-Stop Safety Shop</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT specializes in being a one-stop provider for handrails and walkways across all types of industry. Our expertise spans the entire lifecycle—offering professional advice, custom design engineering, and precision supply. Whether for new energy infrastructure or large-scale manufacturing sites, we ensure every component is purpose-built to safeguard personnel and secure restricted zones.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">High-Performance Production</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Utilizing state-of-the-art production facilities, IKT delivers stable edge protection barriers and robust industrial flooring. Our handrails are engineered to withstand impact from moving machinery and harsh environmental exposure. With long-standing experience in metallurgical design, we offer technical solutions that balance structural strength with rapid assembly on-site.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Responsive Saudi Logistics</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Our extensive stockholdings in Saudi Arabia allow for fast and cost-effective deployment. We recognize that industrial safety cannot wait, which is why our responsive supply chain supports just-in-time delivery for critical maintenance or large-scale construction phases. From basic handrails to complex modular access walkways, we ensure your facility remains compliant and secure.
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