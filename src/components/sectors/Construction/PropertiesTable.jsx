/* eslint-disable no-unused-vars */
'use client';

import { motion } from 'framer-motion';

export default function PropertiesTable() {

  const processingData = [
    { service: 'Surface Treatment', detail: 'Shot blasting to SA2.5' },
    { service: 'Holding Primer', detail: 'Water-based weldable (25 to 75 micron DFT)' },
    { service: 'Sawing & Drilling', detail: 'Digital Saw-Drill line with Hard Stamping' },
    { service: 'Digital Input', detail: 'Coordinates via Stru Cad / XSteel (DSTV/CAM)' },
    { service: 'Punching & Shearing', detail: 'Flats & Angles for base plates & trusses' },
    { service: 'Profiling', detail: 'Full section profiling facilities' }
  ];

  const structuralProducts = [
    { category: 'Beams & Columns', items: 'Universal Beams (UB), Universal Columns (UC)' },
    { category: 'Channels & Angles', items: 'PFC, Parallel Flange Channels, Equal/Unequal Angles' },
    { category: 'Flat Products', items: 'Structural Flat Bars, Plates & Coils' },
    { category: 'Structural Sections', items: 'Tee Sections, Hollow Sections (RHS/CHS)' }
  ];

  const projectHistory = [
    { project: 'Industrial Warehouses', scale: '2,500 Tonnes' },
    { project: 'Major Gas Pipeline Infrastructure', scale: '2,500 Tonnes' },
    { project: 'Public Grandstands & Arenas', scale: '800 Tonnes' },
    { project: 'Cultural Landmarks & Museums', scale: 'Specialized Structural Steel' }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Capability & Service Matrix</h2>
          </div>
          <p className="text-base font-medium text-gray-600">IKT Structural Steel processing capabilities and large-scale industrial project references.</p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. Structural Products Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Structural Product Portfolio</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2 text-center">Product Category</th>
                    <th className="px-6 py-4 font-bold w-1/2 text-center">Typical Inventory Items</th>
                  </tr>
                </thead>
                <tbody>
                  {structuralProducts.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Processing Facilities Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Advanced Processing Capabilities</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Service Facility</th>
                    <th className="px-6 py-4 font-bold w-1/2">Technical Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {processingData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.service}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Project Reference Table */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-full text-left">
            <div className="bg-primary/10 px-6 py-4 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold text-gray-800">Industrial Project References</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-base text-gray-900 border-b border-gray-200 text-center">
                    <th className="px-6 py-4 font-bold border-r border-gray-100 w-1/2">Project Type</th>
                    <th className="px-6 py-4 font-bold w-1/2">Estimated Material Supply</th>
                  </tr>
                </thead>
                <tbody>
                  {projectHistory.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors text-center">
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base border-r border-gray-100">{row.project}</td>
                      <td className="px-6 py-4 text-center text-gray-700 font-medium text-base w-1/2">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-12 p-8 bg-gray-100 border border-gray-200 rounded-lg text-center md:text-left">
          <p className="text-base font-medium text-gray-700 mb-2">
            <span className="font-bold text-gray-900">IKT Specialized Construction Logistics in KSA:</span>
            Structural Steel beams, columns, and processed sections are heavily stocked across Saudi Arabia to empower rapid deployment in infrastructure, energy, and commercial frameworks. We provide full metallurgical traceability and just-in-time delivery for projects throughout the Kingdom.
          </p>
          <p className="text-base font-medium text-gray-600">
            For critical procurement operations, specific sizing details for KSA, or exact material test reports (MTR), contact our expert engineering team in Saudi Arabia at <span className="font-bold text-primary">+966-13-3444036</span> or email <span className="font-bold text-primary">sales@ikt.sa</span>.
          </p>
        </div>

      </div>
    </section>
  );
}