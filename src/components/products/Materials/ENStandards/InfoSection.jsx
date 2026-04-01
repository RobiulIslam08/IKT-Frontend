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
          <p className="text-base font-medium text-primary uppercase tracking-wider">European Standardization Steel Hierarchy (EN Series)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Unified European Quality</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The European Standard (EN) provides a unified reference code adopted by CEN, CENELEC, and ETSI. These standards ensure that steel used in construction and manufacturing across Saudi Arabia and the global market meets rigorous structural and chemical benchmarks. From common carbon steels to specialized alloy variants, the EN series facilitates seamless material procurement for the Single European Market and its global partners.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Equivalent Mapping</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT specializes in cross-referencing EN steel numbers (e.g., 1.7225) with globally recognized systems like SAE (4140), DIN (42CrMo4), and JIS (SCM 440). This precision mapping ensures that engineers and project managers can identify the exact material properties needed for high-stress applications such as EN19 gears and EN24 shafts, maintaining metallurgical integrity throughout the fabrication lifecycle.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Inventory in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Supporting the Kingdom’s industrial vision, IKT stocks an extensive range of EN-certified materials in various forms—including seamless pipes, industrial plates, and solid bars. Sourced from globally recognized manufacturers, our inventory covers Carbon, Alloy, Stainless, and Tool steel grades, all provided with full metallurgical traceability and certifications for high-stakes energy and defense sectors.
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