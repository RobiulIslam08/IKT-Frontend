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
          <p className="text-base font-medium text-primary uppercase tracking-wider">A286 / Grade 660 Age-Hardenable Superalloy</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Superior Thermal Performance</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  A286 (UNS S66286) is an austenitic iron-base superalloy, often known as Stainless Steel Grade 660. Developed to provide high strength and oxidation resistance at temperatures up to 700°C (1290°F), it remains stable under prolonged thermal exposure. Its robust metallurgical matrix makes it an essential material for gas turbine rotors and afterburners across Saudi Arabia’s industrial energy sector.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Mechanical Resilience & Hardening</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  DISPLAYING an ultimate tensile strength of 1035 MPa and yield strength of 759 MPa, A286 provides uncompromising structural integrity. It is precipitation-hardened to achieve superior mechanical properties, resulting in a typical Rockwell C hardness of 32. This makes it ideal for high-stress bolts, fasteners, and aviation hardware subjected to aggressive engine conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Certified Supply Infrastructure</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT holds a certified inventory of A286 Stainless Steel products to support the Kingdom’s industrial power and aviation sectors. We provide fully traceable forms, including AMS-compliant sheets, industrial plates, and precision-turned round bars. Sourced from globally recognized manufacturers, our stock ensures full compliance with ASTM A453 and A638 standards for critical procurement operations.
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