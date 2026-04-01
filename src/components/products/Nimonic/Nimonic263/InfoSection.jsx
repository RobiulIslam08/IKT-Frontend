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
          <p className="text-base font-medium text-primary uppercase tracking-wider">NIMONIC C-263 (UNS N07263 / Werkstoff 2.4650)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Elite Aerospace Integrity</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nimonic C-263 is a specialized nickel-cobalt-chromium alloy containing molybdenum for solid-solution strengthening. Designed specifically for combustion chambers and engine rings, it offers a rare combination of high-temperature strength and exceptional cold ductility. This makes it an essential metallurgical solution for Saudi Arabia\'s aviation maintenance and high-heat industrial systems.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Mechanical Resilience & Processing</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  DISPLAYING a typical yield strength of 580 MPa and ultimate tensile strength of 973 MPa in its heat-treated condition, Nimonic C-263 ensures uncompromising durability. Sourced in compliance with AMS 5872 and BS HR206, it supports aggressive shaping in its solution-treated state (22.5 Max HV) before precipitation hardening achieves peak performance for hot-gas path components.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Specialized Supply Chain in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a certified inventory of Nimonic C-263 products to support the Kingdom’s industrial power and aviation sectors. We provide a full range of certified forms, including high-heat tubing, engine-grade plates, and Nimonic 263 welding wires. Sourced from globally recognized manufacturers, our stock ensures full metallurgical traceability for all critical energy procurement operations.
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