/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const safetyProducts = [
    { category: 'Industrial Handrails', items: 'Self-Closing Safety Gates & Tubular Rails' },
    { category: 'Access Walkways', items: 'GRP and Steel Grating & Structural Flooring' },
    { category: 'Edge Protection', items: 'Stable Guarding for Machinery & Elevations' },
    { category: 'Modular Fittings', items: 'High-Integrity Tubeclamps & Access Stair Components' },
    { category: 'Surface Options', items: 'Galvanized, Powder Coated, and Anti-Slip Finishes' }
  ];

  const serviceScope = [
    { category: 'Initial Advice', items: 'On-site Assessment & Safety Standards Consultation' },
    { category: 'Design Support', items: 'Technical CAD Design and Compliance Engineering' },
    { category: 'Material Supply', items: 'Certified Steel & GRP Product Inventory' },
    { category: 'Delivery', items: 'Responsive Nationwide Supply across KSA' }
  ];

  const structuralSpecs = [
    { category: 'Barrier Strength', items: 'Impact Resistance against Moving Machinery' },
    { category: 'Flooring Durability', items: 'Robust Load-Bearing Walkway Systems' },
    { category: 'Environment Suitability', items: 'Internal/External & Marine-Grade Coatings' },
    { category: 'Safety Standards', items: 'Full Compliance with Industrial Access Codes' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Safety Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Industrial safety standards, access system portfolio, and service integration matrix.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Safety Product Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Access Portfolio</h3>
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
                  {safetyProducts.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Service Integration Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Operational Service Cycle</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Service Phase</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Capability Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceScope.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Technical Specs Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Structural Performance Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Requirement Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Technical Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {structuralSpecs.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Specialized Safety Logistics in KSA:</span>
            Premium handrail and walkway components, including self-closing gates and EXC4-certified structural flooring, are heavily stocked across Saudi Arabia. We provide full technical traceability and end-to-end service integration for all regional energy, petrochemical, and manufacturing sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific safety design for KSA sites, or material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}