/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { Target, LayersIcon, PackageOpen } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 text-center md:text-left">
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Defence Sector Excellence</h1>
          <p className="text-base font-medium text-primary uppercase tracking-wider">Mission-Critical Steel & Performance Compliance</p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left">
          {/* Box 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><Target className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">High-Assurance Technical Capability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  The modern defence industry demands absolute precision and compliance. IKT delivers a specialized range of hollow sections and high-tensile steels (S460, S500, S700) engineered for vehicle weight reduction and structural durability. Our "Dudley Centre of Excellence" model provides 3D laser cutting and CNC bending up to 610mm, ensuring that modular bridging and combat chassis meet the stringent technical requirements of frontline deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><LayersIcon className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Total Material Traceability & OEM Documentation</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  Ensuring material authenticity is paramount in safety-critical defence systems. We provide full 3.1 and 3.2 material traceability as standard, backed by original mill certificates. To accelerate procurement and audit cycles for OEMs, we supply comprehensive Production Part Approval Process (PPAP) and Initial Sample Inspection Reports (ISIR), validating every tolerance and dimension before deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-xl mx-auto md:mx-0"><PackageOpen className="w-8 h-8 text-primary shrink-0" /></div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Supply Chain Resilience & Sustainability</h2>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  IKT mitigates global supply chain risks by maintaining a massive domestic inventory in Saudi Arabia, ensuring continuity for long-term ground vehicle and infrastructure programs. Through our "Green Solutions" reporting, we provide the embodied carbon data required for Net Zero defence tenders, aligning mission-readiness with the latest ESG procurement standards and national industrial resilience.
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