/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const offshoreStock = [
    { category: 'Beams & Columns', items: 'EN 10025 S355 J2+M (Universal Sections)' },
    { category: 'Hollow Sections', items: 'EN 10210 S355 J2H/NH (Marine Tubulars)' },
    { category: 'Channels & Angles', items: 'EN 10025 S355J2 (PFC & Flat Bars)' },
    { category: 'Safety & Flooring', items: 'Fire Resistant GRP, Fabricated Handrails' },
    { category: 'Certification', items: 'EN 10204 3.1 Standard Mill Certificates' }
  ];

  const laserCapabilities = [
    { category: 'Equipment Capacity', items: '11 Tube Lasers (including LT24 Jumbo)' },
    { category: 'Input/Output Specs', items: '18m Input Length / 15m Output Length' },
    { category: 'Advanced Cutting', items: 'Complex Compound Mitres & Weld Preps' },
    { category: 'Process Efficiency', items: 'Single-pass Laser Prep (No Grinding Required)' }
  ];

  const industrialProcessing = [
    { category: 'Plate Profiling', items: 'Gas, Plasma, and Laser Cutting' },
    { category: 'Section Processing', items: 'Drilling, Countersinking, and Saw Cutting' },
    { category: 'Surface Finishing', items: 'Shot-Blasting and Primer Painting' },
    { category: 'Component Fabrication', items: 'Split Tees and Structural Base Plates' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Offshore Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Offshore structural standards, jumbo laser specs, and industrial processing portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Offshore Stock Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Offshore Structural Portfolio</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Product Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Typical Inventory Items</th>
                  </tr>
                </thead>
                <tbody>
                  {offshoreStock.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Laser Processing Specs */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Laser Processing (Center of Excellence)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Process Metric</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Capability Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {laserCapabilities.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. General Processing Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Processing Portfolio</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Service Facility</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Technical Inventory Items</th>
                  </tr>
                </thead>
                <tbody>
                  {industrialProcessing.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Offshore Logistics in KSA:</span>
            Premium Offshore structural steel sections, including jumbo tubulars and EXC4 processed sections, are heavily stocked across Saudi Arabia. We provide full 3.1 certification and multi-product packages for rapid deployment in energy and marine sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or jumbo laser requirements, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}