/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {
  
  const handlingInventory = [
    { category: 'Engineering Bar', items: 'High-Speed Processed Solid Bars for Rollers & Shafts' },
    { category: 'Precision Tubes', items: 'Laser-Cut Steel Tubes for Conveyors & Masts' },
    { category: 'Large OD Sections', items: 'Plasma-Cut Components for Heavy Load Cranes' },
    { category: 'Structural Sections', items: 'Hollow Sections & Beams for Warehouse Racking' },
    { category: 'Custom Plates', items: 'Profiled Steel for Chutes, Hoppers & Lift Platforms' }
  ];

  const processingSpecs = [
    { category: 'Tube Laser Cutting', items: 'High-Volume Precision 3D Profiling' },
    { category: 'Plasma Cutting', items: 'Large Diameter & High-Thickness Plate Prep' },
    { category: 'Bar Cutting', items: 'Automated High-Speed Precision Saws' },
    { category: 'Edge Preparation', items: 'Digital Beveling for High-Integrity Welding' }
  ];

  const servicePortfolio = [
    { category: 'Account Management', items: 'Single Point of Contact for Tier 1 OEMs' },
    { category: 'Logistics', items: 'Just-In-Time (JIT) Sequenced Delivery' },
    { category: 'Stockholding', items: 'Strategically Placed Depots across KSA' },
    { category: 'Fleet Capability', items: 'Wholly Owned & Operated Saudi Transport Fleet' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Logistics Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Materials handling equipment standards, processing capacity, and supply chain portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Industrial Inventory Matrix */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Materials Handling Inventory</h3>
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
                  {handlingInventory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Processing Technology Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Specialized Processing Capacity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Process Facility</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Capability Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {processingSpecs.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Service & Supply Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Operational Support Portfolio</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Service Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Operational Standards</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePortfolio.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Specialized Handling Logistics in KSA:</span>
            Production-ready structural steel for forklifts, conveyors, and warehouse racking is heavily stocked across Saudi Arabia. We provide full metallurgical traceability and JIT delivery services to empower rapid deployment for regional energy and automated logistics sectors.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing for materials handling equipment, or specialized laser requirements, contact our expert team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span>.
          </p>
        </div>

      </div>
    </section>
  );
}