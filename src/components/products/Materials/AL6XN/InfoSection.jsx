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
          <p className="text-base font-medium text-primary uppercase tracking-wider">Super Austenitic AL-6XN (UNS N08367 / SSC-6MO)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Halide Resistance</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  AL-6XN is a "6-moly" super-austenitic alloy containing high levels of Chromium, Molybdenum, and Nitrogen. Developed to withstand aggressive chloride environments, it provides a cost-effective alternative to nickel-base superalloys like Hastelloy C276. It is the premier metallurgical choice for Saudi Arabia\'s massive desalination brine systems and offshore infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Enhanced Structural Strength</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Thanks to its significant nitrogen content (0.18 - 0.25%), AL-6XN possesses a higher tensile strength and modulus than standard 316L stainless steel. With a density of 8.06 g/cm³ and an optimized PREN (Pitting Resistance Equivalent Number), it maintains structural stability in high-pressure seawater heat exchangers and chemical reaction vessels.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Infrastructure Supply</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a certified inventory of AL-6XN products strictly compliant with ASTM B675, B688, and B462 standards. We supply fully traceable forms, including seamless/welded pipes, industrial plates, and forged flanges. Sourced from globally recognized manufacturers, our supply chain supports rapid deployment for energy and marine maintenance throughout the Kingdom.
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