/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const automotiveStock = [
    { category: 'Hollow Sections', items: 'High-Tensile S355 & S700 for Chassis' },
    { category: 'Precision Tubes', items: 'Laser-Cut Profiles for Coach Building' },
    { category: 'Engineering Bars', items: 'Machined Solid Bars for Drive Shafts' },
    { category: 'Structural Sheets', items: 'Automotive Grade Cold-Rolled Plates' },
    { category: 'Bespoke Fittings', items: 'Complex Precision Brackets & Mounts' }
  ];

  const designCapabilities = [
    { category: 'Software Integration', items: 'Advanced 3D Modeling (CAD/CAM Import)' },
    { category: 'Prototyping', items: 'Inexpensive Alternative Design Trials' },
    { category: 'Accuracy', items: 'Digital Validation of Highly Complex Shapes' },
    { category: 'Customization', items: 'Bespoke Design to Front-Line Readiness' }
  ];

  const logisticsMatrix = [
    { category: 'Delivery Mode', items: 'Just-In-Time (JIT) Sequenced Delivery' },
    { category: 'Production Ready', items: 'Pre-packed Parts for Immediate Line Use' },
    { category: 'Supply Chain', items: 'Predictive Inventory & Management Systems' },
    { category: 'Fleet Ops', items: 'Wholly-Owned Transport Fleet in KSA' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Transport Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Automotive material standards, 3D processing capacity, and JIT logistics portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Automotive Stock Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Transport Sector Material Portfolio</h3>
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
                  {automotiveStock.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Digital Fabrication Specs */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Advanced Design & Prototyping</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Technical Service</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Digital Capability Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {designCapabilities.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Logistics Performance Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Transport Sector JIT Logistics</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Logistics Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Performance Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {logisticsMatrix.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Specialized Automotive Logistics in KSA:</span>
            Premium finished components for coach builders and vehicle manufacturers are heavily stocked and processed in Saudi Arabia. We provide full metallurgical traceability and precision 3D laser-processing to empower rapid assembly for regional automotive OEMs and transport infrastructure.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical automotive procurement, specialized 3D design requests, or JIT scheduling for KSA assembly plants, contact our expert team at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}