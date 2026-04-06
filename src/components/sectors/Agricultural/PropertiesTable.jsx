/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const meshInventory = [
    { category: 'Flattened Mesh', items: 'Animal Flooring (Sheep & Pig), Cubicles, Stables' },
    { category: 'Raised Mesh', items: 'Sheep Hoof Manicuring & Joint-Ease Traction' },
    { category: 'TCG Mesh', items: 'Grain Drying & Seed Storage (Louvred Apertures)' },
    { category: 'Weld Mesh', items: 'General Farm Fencing & Industrial Cages' },
    { category: 'Expanded Mesh', items: 'Structural Diamond Pattern with Natural Drainage' }
  ];

  const safetyFencing = [
    { category: 'Self-Closing Gates', items: 'Hands-Free Automatic Steel Safety Gates' },
    { category: 'Tubeclamps', items: 'Modular Barn Fencing & Cattle Head Systems' },
    { category: 'Armco Barriers', items: 'Machinery Impact Protection & Building Guarding' },
    { category: 'Handrail Systems', items: 'Internal/External Safety Rails for Farm Personnel' }
  ];

  const storageSpecs = [
    { category: 'Grain Mesh Types', items: 'Range of 7 specialized types for seed retention' },
    { category: 'Barrier Durability', items: 'Harsh Weather Resistant & Impact Safeguarding' },
    { category: 'Surface Finish', items: 'Galvanized / Primed for Outdoor Agricultural Use' },
    { category: 'Automation', items: 'Automatic Closing (Eliminates Human Error)' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Inventory & Agricultural Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">Agricultural mesh specifications, safety barrier types, and livestock control portfolio.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Agricultural Mesh Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Agricultural Mesh Portfolio</h3>
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
                  {meshInventory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Safety & Control Systems */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Safety & Fencing Systems</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">System Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Safety Components</th>
                  </tr>
                </thead>
                <tbody>
                  {safetyFencing.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100 w-1/2">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Operational Specs Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Operational & Storage Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Utility Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Technical Specifications</th>
                  </tr>
                </thead>
                <tbody>
                  {storageSpecs.map((row, index) => (
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
            <span className="font-bold text-gray-900">IKT Specialized Agricultural Logistics in KSA:</span>
            Premium Agricultural steel products, including galvanized mesh, Armco impact barriers, and automatic safety gates, are heavily stocked across Saudi Arabia. We provide full material traceability and technical advice for all regional livestock, grain management, and farming infrastructure projects.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement, specific project sizing for KSA, or mesh sample requirements, contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}