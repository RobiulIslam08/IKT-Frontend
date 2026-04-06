/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Offshore & Renewable Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">High-Performance Materials for Marine Energy Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Focused Energy Sector Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT provides a dedicated service to the offshore renewable energy, oil, and gas sectors. Our stock includes high-grade Universal Beams and Columns compliant with EN 10025 S355 J2+M, along with Parallel Flange Channels (PFC) and rolled sections. All materials are sourced from elite European mills, supplied with EN 10204 3.1 certification as standard to ensure absolute metallurgical integrity for KSA’s marine infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Innovation in Large-Scale Processing</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  We lead the market with unrivalled 3D processing capabilities. Our Dudley facility houses 11 tube lasers, including the "LT24 Jumbo"—one of the largest of its kind, capable of processing input lengths of 18 meters. By finishing weld preps and complex compound mitres in a single pass, we eliminate the need for traditional jigs and rotabroaches, drastically reducing fabrication time for offshore platform frames.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Total Supply Solution (KSA Ready)</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  By utilizing our diverse product range and established global relationships, IKT offers a "Total Supply Solution" for entire offshore production projects. From fire-resistant GRP flooring and fabricated handrails to structural hollow sections (EN 10210), we provide multi-product packages that simplify your supply chain. Our domestic stockholding in Saudi Arabia ensures responsive delivery for critical energy security projects.
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