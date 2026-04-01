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
          <p className="text-base font-medium text-primary uppercase tracking-wider">NIMONIC Alloy 901 (UNS N09901 / Werkstoff 2.4662)</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Thermal Integrity</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Nimonic 901 is a specialized Nickel-Iron-Chromium alloy fortified with Molybdenum and Titanium. Designed specifically for components operating under high-stress conditions up to 600°C, it provides an exceptional balance of tensile strength and creep resistance. It is the material of choice for Saudi Arabia\'s turbine disc manufacturing and aviation maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Precision Mechanical Performance</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  DISPLAYING an ultimate tensile strength of 150 ksi (1034 MPa) and yield strength of 100 ksi, Nimonic 901 is built for durability. The material undergoes a rigorous three-stage heat treatment process—including solution, stabilization, and precipitation treatment—to achieve a hardness range of 302-388 HB, ensuring structural reliability in the high-velocity rotors.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Supply Infrastructure in KSA</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT maintains a certified inventory of Nimonic 901 to support the Kingdom’s industrial power generation and defense aviation sectors. We provide fully traceable forms including aerospace-certified plates, round bars, and high-heat tubing. Our stock ensures full compliance with AMS 5660, AMS 5661, and BS HR 55 international specifications.
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